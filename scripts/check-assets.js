const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const missing = [];
let checked = 0;

function check(file, source) {
  const clean = file.split(/[?#]/, 1)[0];
  if (!clean || /^(?:https?:|data:|about:)/.test(clean) || clean.includes('${')) return;

  const asset = clean.startsWith('/gist-neurophotonicslab/')
    ? path.join(root, clean.slice('/gist-neurophotonicslab/'.length))
    : path.resolve(path.dirname(source), clean);
  checked++;
  if (!fs.existsSync(asset)) missing.push(`${path.relative(root, source)} -> ${file}`);
}

function scanHtml(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'assets' || entry.name === 'scripts') continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      scanHtml(file);
    } else if (entry.name.endsWith('.html')) {
      const html = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
      for (const match of html.matchAll(/\b(?:src|data-img)\s*=\s*"([^"]+)"/g)) {
        check(match[1], file);
      }
      for (const match of html.matchAll(/\bthis\.src\s*=\s*'([^']+)'/g)) {
        check(match[1], file);
      }
    }
  }
}

scanHtml(root);
global.window = {};
require(path.join(root, 'assets/js/gallery-data.js'));
require(path.join(root, 'assets/js/members-data.js'));
require(path.join(root, 'assets/js/news.js'));

for (const year of window.GALLERY_YEARS) {
  for (const event of year.events) {
    for (const photo of event.photos) {
      check(`assets/img/gallery/${year.year}/${photo}`, path.join(root, 'index.html'));
      check(`assets/img/gallery/${year.year}/thumbs/${photo}.jpg`, path.join(root, 'index.html'));
    }
  }
}

for (const year of window.GALLERY_CITIZENSHIP) {
  for (const award of year.awards) {
    check(`assets/img/gallery/citizenship/${decodeURIComponent(award.pdf)}`, path.join(root, 'index.html'));
  }
}

for (const section of window.MEMBERS) {
  for (const member of section.members || []) {
    if (member.image) check(`assets/img/member/${member.image}`, path.join(root, 'index.html'));
  }
}

for (const item of window.NEWS) {
  if (item.thumbnail) check(item.thumbnail, path.join(root, 'index.html'));
}

if (missing.length) {
  console.error(missing.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${checked} local asset references across the site.`);
}
