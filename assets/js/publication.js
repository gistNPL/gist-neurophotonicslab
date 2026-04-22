(() => {
  const page = document.querySelector(".publication-page");
  if (!page) return;

  // Per-year Journal/Conference filter buttons
  page.querySelectorAll(".pub-year").forEach((year) => {
    const btns = year.querySelectorAll(".pub-filter-btn");
    if (!btns.length) return;

    const items = year.querySelectorAll(".pub-item");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = (btn.dataset.filter || "all").toLowerCase();
        items.forEach((item) => {
          const t = (item.dataset.type || "").toLowerCase();
          const show = filter === "all" || t === filter;
          item.classList.toggle("is-hidden", !show);
        });
      });
    });
  });

  // Year chip scroll-spy
  const chips = page.querySelectorAll(".pub-chip");
  const years = page.querySelectorAll(".pub-year");
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
