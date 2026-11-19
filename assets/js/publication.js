(() => {
  const page = document.querySelector(".publication-page");
  if (!page) return;

  const form = page.querySelector(".pub-search");
  const query = form.elements.namedItem("q");
  const yearFilter = form.elements.namedItem("year");
  const typeFilter = form.elements.namedItem("type");
  const resultCount = page.querySelector(".pub-result-count");
  const yearNav = page.querySelector(".pub-year-chips");
  const yearLinks = Array.from(yearNav.querySelectorAll(".pub-chip"));
  const chipById = new Map(yearLinks.map((link) => [link.hash.slice(1), link]));

  function normalize(text) {
    return text.normalize("NFD").toLowerCase()
      .replace(/\p{M}/gu, "")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  }

  const types = new Set();
  const groups = Array.from(page.querySelectorAll(".pub-year"), (section) => {
    const year = section.querySelector("h2").textContent.trim();
    yearFilter.add(new Option(year, year));
    const entries = Array.from(section.querySelectorAll(".pub-item"), (item) => {
      const title = item.querySelector(".pub-title")?.textContent || "";
      const authors = item.querySelector(".pub-authors")?.textContent || "";
      const type = item.dataset.type || "";
      if (type) types.add(type);
      return { item, type, searchText: normalize(`${title} ${authors}`) };
    });
    return { section, year, entries, chip: chipById.get(section.id) };
  });

  for (const type of Array.from(types).sort()) {
    typeFilter.add(new Option(type[0].toUpperCase() + type.slice(1), type));
  }

  function applyFilters() {
    const words = normalize(query.value).split(" ").filter(Boolean);
    let matches = 0;

    for (const { section, year, entries, chip } of groups) {
      const matchesYear = !yearFilter.value || yearFilter.value === year;
      let yearMatches = 0;

      for (const { item, type, searchText } of entries) {
        const visible = matchesYear && (!typeFilter.value || typeFilter.value === type)
          && words.every((word) => searchText.includes(word));
        item.hidden = !visible;
        if (visible) yearMatches += 1;
      }

      section.hidden = yearMatches === 0;
      if (chip) {
        chip.hidden = section.hidden;
        if (section.hidden) chip.removeAttribute("aria-current");
      }
      matches += yearMatches;
    }

    yearNav.hidden = matches === 0;
    if (matches === 0) {
      resultCount.textContent = "No results. Try a different search or clear the filters.";
    } else {
      resultCount.textContent = matches === 1 ? "1 result" : `${matches} results`;
    }
  }

  query.addEventListener("input", applyFilters);
  yearFilter.addEventListener("change", applyFilters);
  typeFilter.addEventListener("change", applyFilters);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
  });
  form.querySelector(".pub-clear").addEventListener("click", () => {
    form.reset();
    applyFilters();
    query.focus();
  });
  form.hidden = false;
  applyFilters();

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const current = entries.find((entry) => entry.isIntersecting && !entry.target.hidden);
      if (!current) return;
      for (const link of yearLinks) link.removeAttribute("aria-current");
      chipById.get(current.target.id)?.setAttribute("aria-current", "location");
    }, { rootMargin: "-40% 0px -55% 0px" });
    for (const { section } of groups) observer.observe(section);
  }
})();
