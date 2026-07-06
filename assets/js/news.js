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
      "/gist-neurophotonicslab/assets/img/gallery/2026/2026_HJL_award_KOSOMBE.png",

    // Detail-page fields (all optional)
    subtitle: "대한의용생체공학회 포스터상 수상",
    description:
      "Hyojeong Lee (이효정) was honored with the Poster Award (포스터상) at the 2026 Annual Conference of the Korean Society of Medical and Biological Engineering (대한의용생체공학회, KOSOMBE).",
    paperTitle:
      "Influence of Hierarchical Task Inference on Representational Dynamics in Healthy and Aging-Like RNNs under Hidden-Rule Conditions",
    closing: "Congratulations to Hyojeong on this well-deserved recognition!",
  },

  {
    id: "2026-kscbfm-gehan",
    date: "2026-05-30",
    title: "Gehan Fatima received the Young Investigator Award at KSCBFM 2026",
    summary:
      "Gehan Fatima가 2026 대한뇌혈류대사학회(KSCBFM)에서 Young Investigator Award를 수상했습니다.",
    thumbnail:
      "/gist-neurophotonicslab/assets/img/gallery/2026/2026_Gehan_award.png",

    subtitle: "대한뇌혈류대사학회 Young Investigator Award 수상",
    description:
      "Gehan Fatima was honored with the Young Investigator Award at the 2026 Conference of the Korean Society for Cerebral Blood Flow and Metabolism (대한뇌혈류대사학회, KSCBFM).",
    closing: "Congratulations to Gehan on this well-deserved recognition!",
  },

  {
    id: "2026-isa-gehan",
    date: "2026-06-20",
    title: "Gehan Fatima received an award at ISA 2026",
    summary:
      "Gehan Fatima가 2026 국제 노화 심포지엄(International Symposium on Aging, ISA)에서 수상했습니다.",
    thumbnail:
      "/gist-neurophotonicslab/assets/img/gallery/2026/2026_ISA_Gehan_award.png",

    subtitle: "국제 노화 심포지엄(ISA 2026) 수상",
    description:
      "Gehan Fatima was recognized with an award at the 2026 International Symposium on Aging (ISA).",
    closing: "Congratulations to Gehan on this well-deserved recognition!",
  },

  {
    id: "2026-isa-acquah",
    date: "2026-06-20",
    title: "Acquah Emmanuel received an award at ISA 2026",
    summary:
      "Acquah Emmanuel이 2026 국제 노화 심포지엄(International Symposium on Aging, ISA)에서 수상했습니다.",
    thumbnail:
      "/gist-neurophotonicslab/assets/img/gallery/2026/2026_ISA_Acquah_award.jpeg",

    subtitle: "국제 노화 심포지엄(ISA 2026) 수상",
    description:
      "Acquah Emmanuel was recognized with an award at the 2026 International Symposium on Aging (ISA).",
    closing: "Congratulations to Acquah on this well-deserved recognition!",
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
