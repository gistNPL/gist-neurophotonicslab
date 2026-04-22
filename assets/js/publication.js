(() => {
  const page = document.querySelector(".publication-page");
  if (!page) return;

  const tabs = page.querySelectorAll(".pub-tab");
  const items = page.querySelectorAll(".pub-item");
  const years = page.querySelectorAll(".pub-year");
  const empty = page.querySelector(".pub-empty");
  const chips = page.querySelectorAll(".pub-chip");
  const countEls = page.querySelectorAll(".pub-tab-count");

  // Inject a per-year count span into each year head
  years.forEach((yr) => {
    const head = yr.querySelector(".pub-year-head");
    if (head && !head.querySelector(".pub-count")) {
      const span = document.createElement("span");
      span.className = "pub-count";
      head.appendChild(span);
    }
  });

  // Populate total counts per type (these don't change with filtering)
  const totals = { all: items.length, journal: 0, conference: 0, patent: 0 };
  items.forEach((it) => {
    const t = (it.dataset.type || "").toLowerCase();
    if (totals[t] !== undefined) totals[t] += 1;
  });
  countEls.forEach((el) => {
    const key = el.dataset.count;
    el.textContent = totals[key] ?? 0;
  });

  function applyFilter(filter) {
    let visibleTotal = 0;

    years.forEach((yr) => {
      const yrItems = yr.querySelectorAll(".pub-item");
      let yrVisible = 0;

      yrItems.forEach((item) => {
        const t = (item.dataset.type || "").toLowerCase();
        const show = filter === "all" || t === filter;
        item.classList.toggle("is-hidden", !show);
        if (show) yrVisible += 1;
      });

      yr.classList.toggle("is-empty", yrVisible === 0);
      const countEl = yr.querySelector(".pub-count");
      if (countEl) {
        countEl.textContent = yrVisible
          ? `${yrVisible} ${yrVisible === 1 ? "item" : "items"}`
          : "";
      }

      visibleTotal += yrVisible;
    });

    if (empty) empty.classList.toggle("is-visible", visibleTotal === 0);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      applyFilter(tab.dataset.filter || "all");
    });
  });

  applyFilter("all");

  // Year chip scroll-spy
  const chipById = new Map();
  chips.forEach((c) => {
    const id = c.getAttribute("href")?.replace("#", "");
    if (id) chipById.set(id, c);
  });

  if ("IntersectionObserver" in window && chipById.size) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const chip = chipById.get(entry.target.id);
          if (!chip) return;
          chips.forEach((c) => c.classList.remove("is-current"));
          chip.classList.add("is-current");
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    years.forEach((yr) => observer.observe(yr));
  }
})();
