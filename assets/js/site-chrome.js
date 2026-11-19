// Single source of truth for site header and footer year.
// Edit NAV_LINKS or the header markup here to update every page at once.
(function () {
  const SITE_ROOT = "/gist-neurophotonicslab";

  const NAV_LINKS = [
    { href: "/",             label: "Home" },
    { href: "/research/",    label: "Research" },
    { href: "/member/",      label: "Member" },
    { href: "/publication/", label: "Publication" },
    { href: "/gallery/",     label: "Gallery" },
    { href: "/news/",        label: "News" },
    { href: "/contact/",     label: "Contact" },
  ];

  function renderHeader() {
    const header = document.querySelector("header.site-header");
    if (!header) return;
    header.innerHTML = `
      <a class="brand" href="${SITE_ROOT}/" aria-label="Go to Home">
        <img class="brand-logo"
             src="${SITE_ROOT}/assets/img/home/logo.png"
             alt="GIST Neurophotonics Lab logo" />
        <span class="brand-text">GIST Neurophotonics Lab</span>
      </a>
      <nav class="site-nav">
        ${NAV_LINKS.map(l =>
          `<a href="${SITE_ROOT}${l.href}">${l.label}</a>`
        ).join("")}
      </nav>
    `;
  }

  function renderFooterYear() {
    const year = new Date().getFullYear();
    document.querySelectorAll("footer").forEach(f => {
      f.innerHTML = f.innerHTML.replace(/©\s*\d{4}/, `© ${year}`);
    });
  }

  function init() {
    renderHeader();
    renderFooterYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
