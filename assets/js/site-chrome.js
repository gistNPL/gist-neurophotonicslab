// Shared navigation and footer for every page.
(function () {
  const siteRoot = "/gist-neurophotonicslab";
  const sections = [
    ["", "Home"],
    ["research", "Research"],
    ["member", "Members"],
    ["publication", "Publications"],
    ["gallery", "Gallery"],
    ["news", "News"],
    ["contact", "Contact"],
  ];

  const header = document.querySelector("header.site-header");
  if (header) {
    const path = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "");
    const [section, subpage] = path.slice(siteRoot.length).split("/").filter(Boolean);
    const links = sections.map(([slug, label]) => {
      const current = slug === (section || "");
      const aria = current ? ` aria-current="${subpage ? "location" : "page"}"` : "";
      const href = slug ? `${siteRoot}/${slug}/` : `${siteRoot}/`;
      return `<a href="${href}"${aria}>${label}</a>`;
    }).join("");

    header.innerHTML = `
      <div class="site-header-inner">
        <a class="brand" href="${siteRoot}/" aria-label="GIST Neurophotonics Lab home">
          <img class="brand-logo" src="${siteRoot}/assets/img/home/logo.png" width="34" height="34" alt="" />
          <span class="brand-text">GIST Neurophotonics Lab</span>
        </a>
        <button class="site-menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" /></svg>
          Menu
        </button>
        <nav class="site-nav" id="site-navigation" aria-label="Main navigation">${links}</nav>
      </div>
    `;
    header.classList.add("site-header--ready");

    const main = document.querySelector("main");
    if (main) {
      if (!main.id) main.id = "main-content";
      main.tabIndex = -1;
      const skip = document.createElement("a");
      skip.className = "site-skip-link";
      skip.href = `#${main.id}`;
      skip.textContent = "Skip to content";
      header.before(skip);
    }

    const toggle = header.querySelector(".site-menu-toggle");
    const narrow = window.matchMedia("(max-width: 900px)");
    const isOpen = () => toggle.getAttribute("aria-expanded") === "true";
    const setOpen = (open) => toggle.setAttribute("aria-expanded", String(open));

    toggle.addEventListener("click", () => setOpen(!isOpen()));
    narrow.addEventListener("change", () => setOpen(false));

    header.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !isOpen()) return;
      setOpen(false);
      toggle.focus();
    });

    header.addEventListener("focusout", (event) => {
      if (event.relatedTarget && !header.contains(event.relatedTarget)) setOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (isOpen() && !header.contains(event.target)) setOpen(false);
    });
  }

  const year = new Date().getFullYear();
  for (const footer of document.querySelectorAll("footer")) {
    const copyright = footer.firstChild;
    if (copyright && copyright.nodeType === Node.TEXT_NODE) {
      copyright.textContent = copyright.textContent.replace(/©\s*\d{4}/, `© ${year}`);
    }
  }
})();
