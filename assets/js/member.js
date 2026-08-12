// assets/js/member.js
// 1) member/index.html: 카드 전체 클릭 + Enter 키로 detail 페이지 이동
// 2) member detail page: Personal Gallery 클릭 -> modal open/close

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // (A) Member index: card click -> navigate
  // =========================
  const cards = document.querySelectorAll(".member-card.member-link");

  cards.forEach((card) => {
    // 카드 클릭 -> detail 이동
    card.addEventListener("click", (e) => {
      // DETAIL 버튼 클릭이면 카드 이동 막기
      if (e.target.closest("a.detail-link")) return;

      const href =
        card.getAttribute("data-href") ||
        card.getAttribute("onclick")?.match(/location\.href='([^']+)'/)?.[1];

      if (href) window.location.href = href;
    });

    // Enter 키 -> detail 이동
    card.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;

      const href =
        card.getAttribute("data-href") ||
        card.getAttribute("onclick")?.match(/location\.href='([^']+)'/)?.[1];

      if (href) window.location.href = href;
    });
  });

  // =========================
  // (B) Member detail: personal gallery (newest-first, 3x3 pages) + modal
  // =========================
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");
  const gallery = document.querySelector(".personal-gallery");
  const galleryImgs = gallery ? [...gallery.querySelectorAll("img")] : [];

  // detail 페이지가 아니면(요소 없으면) 그냥 종료
  if (!modal || !modalImg || !galleryImgs.length) return;

  // 파일명 숫자가 클수록 최신 -> 최신순(내림차순)으로 DOM 재배열
  const imgNumber = (img) => {
    const m = (img.getAttribute("src") || "").match(/(\d+)\.\w+$/);
    return m ? parseInt(m[1], 10) : -1;
  };
  galleryImgs.sort((a, b) => imgNumber(b) - imgNumber(a));
  galleryImgs.forEach((img) => gallery.appendChild(img));

  // 3x3 = 9장씩 페이지 나누기
  const PAGE_SIZE = 9;
  const pageCount = Math.ceil(galleryImgs.length / PAGE_SIZE);
  let currentPage = 1;
  let pagerEl = null;

  function showPage(page) {
    currentPage = Math.min(Math.max(page, 1), pageCount);
    galleryImgs.forEach((img, i) => {
      img.style.display =
        Math.floor(i / PAGE_SIZE) === currentPage - 1 ? "" : "none";
    });
    if (pagerEl) {
      pagerEl.querySelectorAll("[data-page]").forEach((btn) => {
        btn.classList.toggle("active", Number(btn.dataset.page) === currentPage);
      });
      pagerEl.querySelector("[data-prev]").disabled = currentPage === 1;
      pagerEl.querySelector("[data-next]").disabled = currentPage === pageCount;
    }
  }

  if (pageCount > 1) {
    pagerEl = document.createElement("nav");
    pagerEl.className = "gallery-pagination";
    pagerEl.setAttribute("aria-label", "Personal gallery pages");

    const pageButtons = Array.from(
      { length: pageCount },
      (_, i) => `<button type="button" data-page="${i + 1}">${i + 1}</button>`
    ).join("");
    pagerEl.innerHTML = `
      <button type="button" data-prev aria-label="Previous page">&lsaquo;</button>
      ${pageButtons}
      <button type="button" data-next aria-label="Next page">&rsaquo;</button>
    `;

    pagerEl.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      if (btn.hasAttribute("data-prev")) showPage(currentPage - 1);
      else if (btn.hasAttribute("data-next")) showPage(currentPage + 1);
      else if (btn.dataset.page) showPage(Number(btn.dataset.page));
    });

    gallery.insertAdjacentElement("afterend", pagerEl);
  }

  showPage(1);

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || "Expanded view";
    modal.classList.add("open");   // ✅ CSS: .gallery-modal.open { display:grid; }
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  galleryImgs.forEach((img) => {
    img.addEventListener("click", () => openModal(img.src, img.alt));
  });

  // 배경 클릭하면 닫기 (이미지 클릭은 유지)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC로 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
