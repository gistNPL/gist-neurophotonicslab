// Central news data source.
// To add a new news item:
//   1. Add an entry to this array (date in YYYY-MM-DD format)
//   2. Create the matching detail page at /news/<slug>.html
// The main page and the news index page both render automatically,
// sorted by date (newest first).
window.NEWS = [
  {
    date: "2026-05-13",
    title: "Hyojeong Lee received the Excellent Poster Award at KOSOMBE 2026",
    summary:
      "이효정 학생이 대한의용생체공학회(KOSOMBE) 2026에서 우수 포스터상을 수상했습니다 — \"Influence of Hierarchical Task Inference on Representational Dynamics in Healthy and Aging-Like RNNs under Hidden-Rule Conditions\".",
    thumbnail:
      "/gist-neurophotonicslab/assets/img/gallery/2026/2026_KOSOMBE10.png?v=3",
    link: "/gist-neurophotonicslab/news/2026-kosombe-hyojeong.html",
  },
];

window.NEWS_HELPERS = {
  sortedDesc() {
    return [...window.NEWS].sort((a, b) => b.date.localeCompare(a.date));
  },
  formatDate(iso) {
    // "2026-05-13" -> "2026.05.13"
    return iso.replace(/-/g, ".");
  },
  escape(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  },
};
