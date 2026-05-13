// Central news data source.
//
// To add a new news item:
//   1. Add an entry to this array (date in YYYY-MM-DD format, unique `id`)
//   2. (Optional) Add detail-only fields: subtitle, description, paperTitle, closing
//   3. Done — main page card, news index, and /news/detail.html?id=<id>
//      all render automatically, sorted by date (newest first).
window.NEWS = [
  {
    id: "2026-kosombe-hyojeong",
    date: "2026-05-13",
    title: "Hyojeong Lee received the Poster Award at KOSOMBE 2026",
    summary:
      "이효정 학생이 대한의용생체공학회(KOSOMBE) 2026에서 포스터상을 수상했습니다 — \"Influence of Hierarchical Task Inference on Representational Dynamics in Healthy and Aging-Like RNNs under Hidden-Rule Conditions\".",
    thumbnail:
      "/gist-neurophotonicslab/assets/img/gallery/2026/2026_KOSOMBE10.jpg",

    // Detail-page fields (all optional)
    subtitle: "대한의용생체공학회 포스터상 수상",
    description:
      "Hyojeong Lee (이효정) was honored with the Poster Award (포스터상) at the 2026 Annual Conference of the Korean Society of Medical and Biological Engineering (대한의용생체공학회, KOSOMBE).",
    paperTitle:
      "Influence of Hierarchical Task Inference on Representational Dynamics in Healthy and Aging-Like RNNs under Hidden-Rule Conditions",
    closing: "Congratulations to Hyojeong on this well-deserved recognition!",
  },
];

window.NEWS_HELPERS = {
  sortedDesc() {
    return [...window.NEWS].sort((a, b) => b.date.localeCompare(a.date));
  },
  findById(id) {
    return window.NEWS.find((n) => n.id === id) || null;
  },
  detailUrl(id) {
    return "/gist-neurophotonicslab/news/detail.html?id=" + encodeURIComponent(id);
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
