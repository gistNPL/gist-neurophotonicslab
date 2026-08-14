// Central gallery data source.
//
// To add a new event:
//   1. Find the year block (or add one) in GALLERY_YEARS.
//   2. Append an event { title, photos: ["file1.png", ...] }.
//      Filenames are relative to /assets/img/gallery/<year>/.
//   3. (Optional) Add video: { youtubeId, title } to embed a YouTube
//      player above that event's photo grid.
// To add a new citizenship award:
//   1. Find the year in GALLERY_CITIZENSHIP and add { name, pdf } to its awards array.
//      PDF filenames are relative to /assets/img/gallery/citizenship/.
window.GALLERY_YEARS = [
  {
    year: 2026,
    // Events are listed newest-first (top of the page = most recent).
    events: [
      {
        title: "2026 NPL Summer Workshop",
        // Optional: a YouTube video shown above the photo grid.
        video: {
          youtubeId: "2ksHNfcq9S4",
          title: "2026 NPL Summer Workshop highlights",
        },
        // Presentation photos first, then workshop photos.
        photos: [
          "2026_Summer_Workshop_presentation1.jpg",
          "2026_Summer_Workshop_presentation2.jpg",
          "2026_Summer_Workshop_presentation3.jpg",
          "2026_Summer_Workshop_presentation4.jpg",
          "2026_Summer_Workshop_presentation5.jpg",
          "2026_Summer_Workshop_presentation6.jpg",
          "2026_Summer_Workshop_presentation7.jpg",
          "2026_Summer_Workshop_presentation8.jpg",
          "2026_Summer_Workshop_presentation9.jpg",
          "2026_Summer_Workshop_presentation10.jpg",
          "2026_Summer_Workshop_presentation11.jpg",
          "2026_Summer_Workshop_presentation12.jpg",
          "2026_Summer_Workshop1.jpg",
          "2026_Summer_Workshop2.jpg",
          "2026_Summer_Workshop3.jpg",
          "2026_Summer_Workshop4.jpg",
          "2026_Summer_Workshop5.jpg",
          "2026_Summer_Workshop6.jpg",
          "2026_Summer_Workshop7.jpg",
          "2026_Summer_Workshop8.jpg",
          "2026_Summer_Workshop9.jpg",
          "2026_Summer_Workshop10.jpg",
        ],
      },
      {
        title: "2026 국제 노화 심포지엄 (ISA)",
        photos: [
          "2026_ISA_1.jpg",
          "2026_ISA_2.jpg",
          "2026_ISA_3.jpg",
          "2026_ISA_4.jpeg",
          "2026_ISA_5.jpeg",
          "2026_ISA_6.jpeg",
          "2026_ISA_7.jpeg",
        ],
      },
      {
        title: "2026 Teacher's Day",
        photos: [
          "2026_td1.png",
          "2026_td2.png",
        ],
      },
      {
        title: "2026 대한의용생체공학회",
        photos: [
          "2026_KOSOMBE1.jpg",
          "2026_KOSOMBE2.jpg",
          "2026_KOSOMBE3.jpg",
          "2026_KOSOMBE4.jpg",
          "2026_KOSOMBE5.jpg",
          "2026_KOSOMBE6.jpg",
          "2026_KOSOMBE7.jpg",
          "2026_KOSOMBE8.png",
          "2026_KOSOMBE9.png",
          "2026_KOSOMBE10.jpg",
        ],
      },
      {
        title: "2026 Cherry Blossom Day",
        photos: [
          "2026_cherry1.jpg",
          "2026_cherry2.jpg",
          "2026_cherry3.jpg",
          "2026_cherry4.jpg",
          "2026_cherry5.jpg",
          "2026_cherry6.jpg",
          "2026_cherry7.jpg",
          "2026_cherry8.jpg",
          "2026_cherry9.jpg",
          "2026_cherry10.jpg",
        ],
      },
      {
        title: "2026 NPL Workshop - Hoengseong, Gangwondo",
        photos: [
          "2026_workshop1.jpg",
          "2026_workshop2.jpg",
          "2026_workshop3.jpg",
          "2026_workshop4.jpg",
          "2026_workshop5.jpg",
          "2026_workshop6.jpg",
          "2026_workshop7.jpg",
          "2026_workshop8.jpg",
          "2026_workshop9.jpg",
          "2026_workshop10.jpg",
          "2026_workshop11.png",
        ],
      },
      {
        title: "2026 NPL Winter Camp",
        photos: [
          "2026_wintercamp1.jpg",
          "2026_wintercamp2.jpg",
          "2026_wintercamp3.jpg",
          "2026_wintercamp4.jpg",
          "2026_wintercamp5.jpg",
          "2026_wintercamp6.jpg",
          "2026_wintercamp7.jpg",
          "2026_wintercamp8.jpg",
          "2026_wintercamp9.jpg",
          "2026_wintercamp10.png",
          "2026_wintercamp11.png",
          "2026_wintercamp12.png",
          "2026_wintercamp13.png",
          "2026_wintercamp14.png",
        ],
      },
    ],
  },
];

window.GALLERY_CITIZENSHIP = [
  {
    year: 2025,
    awards: [
      { name: "Daeun ROH",   pdf: "2025_CITIZENSHIP%20AWARD%20(DER_Daeun%20ROH).pdf" },
      { name: "Sihyun LEE",  pdf: "2025_CITIZENSHIP%20AWARD%20(SHL_Sihyun%20LEE).pdf" },
    ],
  },
  {
    year: 2024,
    awards: [
      { name: "Akm Ashiquzzaman",         pdf: "2024_CITIZENSHIP%20AWARD%20(AKM.%20Akm%20Ashiquzzaman).pdf" },
      { name: "Christine Hyerang HWANG",  pdf: "2024_CITIZENSHIP%20AWARD%20(CHH.%20Christine%20Hyerang%20HWANG).pdf" },
    ],
  },
  {
    year: 2023,
    awards: [
      { name: "Fatemeh D. Nezhad Derarandash", pdf: "2023_CITIZENSHIP%20AWARD%20(FDN.%20Fatemeh%20D.%20Nezhad%20Derarandash).pdf" },
      { name: "Yejin KIM",                     pdf: "2023_CITIZENSHIP%20AWARD%20(YJK.Yejin%20KIM).pdf" },
    ],
  },
];

window.GALLERY_HELPERS = {
  IMG_BASE: "/gist-neurophotonicslab/assets/img/gallery",
  photoUrl(year, filename) {
    return this.IMG_BASE + "/" + year + "/" + filename;
  },
  citizenshipUrl(filename) {
    return this.IMG_BASE + "/citizenship/" + filename;
  },
  allYears() {
    const set = new Set();
    (window.GALLERY_YEARS || []).forEach((y) => set.add(y.year));
    (window.GALLERY_CITIZENSHIP || []).forEach((y) => set.add(y.year));
    return [...set].sort((a, b) => b - a);
  },
  escape(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  },
};
