// Central member roster.
//
// To add a member:
//   1. Find the right section in MEMBERS and append an object.
//   2. Fields:
//        - image:      filename in /assets/img/member/  (omit for text-only cards)
//        - name:       display name (e.g., "Sihyun Lee / 이시현")
//        - badge:      optional small label (e.g., "PI")
//        - role:       title line under the name
//        - details:    array of HTML strings (links allowed; lab-authored, no escaping applied)
//        - detailPage: filename in /member/  (omit to make the card non-clickable)
//
// To add a new section (e.g., Alumni members), insert a new section object
// or add to an existing one's members array.
window.MEMBERS = [
  {
    section: "professor",
    title: "Professor",
    members: [
      {
        image: "euiheonchung.png",
        name: "Prof. Euiheon Chung",
        badge: "PI",
        role: "Full Professor, Department of Biomedical Science and Engineering (BMSE), GIST",
        details: [
          "Translational neurophotonic technologies; functional optical imaging &amp; neuromodulation",
          "Focus: neurovascular diseases, neuropathic pain (Director, Gliopathic Pain Research Center)",
        ],
        detailPage: "euiheonchung.html",
      },
    ],
  },

  {
    section: "research-professor",
    title: "Research Professor",
    members: [
      {
        name: "Young-ro Kim",
        role: "Adjunct Professor",
        details: [
          'Email: <a href="mailto:spmkim@gmail.com">spmkim@gmail.com</a>',
          "Athinoula A. Martinos Center for Biomedical Imaging, Massachusetts General Hospital (MGH)",
          "Department of Radiology, Harvard Medical School, Boston, MA, USA",
        ],
      },
      {
        name: "Sang Seong Kim",
        role: "Research Professor",
        details: [
          'Email: <a href="mailto:chiralcenter21@gmail.com">chiralcenter21@gmail.com</a>',
          "Drug development for alleviating ion channel-derived pain sensation",
          "Understanding hippocampal circuit alteration in neurodegeneration",
          "Characterization of neural coding in olfactory and vomeronasal system",
          "Development of next-generation optical stimulation in multielectrode array",
        ],
      },
    ],
  },

  {
    section: "postdoc",
    title: "Post-doc",
    members: [
      {
        image: "gehan.png",
        name: "Gehan Fatima",
        role: "Post-Doc",
        details: [
          'Email: <a href="mailto:gehanfatima@gist.ac.kr">gehanfatima@gist.ac.kr</a>',
          "TEL: 062-715-2756",
          "Research: Alzheimer&rsquo;s disease (AD), vascular biology, in vivo two-photon imaging",
        ],
        detailPage: "gehan.html",
      },
    ],
  },

  {
    section: "phd",
    title: "Ph.D Students",
    members: [
      {
        image: "ashiq.png",
        name: "Akm Ashiquzzaman",
        role: "Ph.D Student",
        details: [
          "Research Interest: AI-based image processing and optical setup for image acquisition",
          "Education: MS (Chonnam National University), B.Sc. (University of Asia Pacific)",
        ],
        detailPage: "ashiq.html",
      },
      {
        image: "fatemeh.png",
        name: "Fatemeh Dehghan Nezhad Derarandash",
        role: "Ph.D Student",
        details: [
          'Email: <a href="mailto:f.dehghan.nezhad@gm.gist.ac.kr">f.dehghan.nezhad@gm.gist.ac.kr</a>',
          "TEL: 062-715-2761",
          "OFFICE: 404",
          "Research Interest: medical devices &amp; software, in-vivo imaging and deep understanding of brain functions",
        ],
        detailPage: "fatemeh.html",
      },
      {
        image: "acquah.png",
        name: "Acquah Emmanuel",
        role: "Ph.D Student",
        details: [
          "Research Field: somatosensory system &amp; DRG; neuroimmune interactions; neuropathic pain mechanisms",
        ],
        detailPage: "acquah.html",
      },
      {
        image: "shudha.png",
        name: "Shudha Tasnim Iqbal",
        role: "Ph.D Student",
        details: [
          "Research Field: bio-inspired vision systems; translational optical design for medical imaging &amp; diagnostics",
        ],
        detailPage: "shudha.html",
      },
    ],
  },

  {
    section: "integrated",
    title: "Integrated (M.S./Ph.D)",
    members: [
      {
        image: "youngseung.png",
        name: "Young-seung Yoo / 유영승",
        role: "Integrated (M.S./Ph.D) Student",
        details: [
          "Research Interest: optimized light control for in-vivo application; light-sheet microscopy; high-speed large area brain imaging",
        ],
        detailPage: "youngseung.html",
      },
      {
        image: "nhat.png",
        name: "Tien Nhat Nguyen / Nguyen, Tien Nhat",
        role: "Integrated (M.S./Ph.D) Student",
        details: [
          "Education: Integrated MS-PhD Candidate (BMSE, GIST); GIST Research Assistant (2019–2021); B.S. Biomedical Engineering (HUST, Vietnam)",
        ],
        detailPage: "nhat.html",
      },
      {
        image: "sihyun.png",
        name: "Sihyun Lee / 이시현",
        role: "Integrated (M.S./Ph.D) Student, GIST AI Graduate School",
        details: [
          "Medical AI, biomedical/microscopy image enhancement, neurophotonics",
          'Email: <a href="mailto:tlgus7668@gm.gist.ac.kr">tlgus7668@gm.gist.ac.kr</a>',
        ],
        detailPage: "sihyunlee.html",
      },
      {
        image: "jaebong.png",
        name: "Jaebong Joe / 조재봉",
        role: "Integrated (M.S./Ph.D) Student, GIST Biomedical Engineering",
        details: [
          "Magnetic Stimulation",
          'Email: <a href="mailto:philosophal@gm.gist.ac.kr">philosophal@gm.gist.ac.kr</a>',
        ],
        detailPage: "jaebong.html",
      },
      {
        image: "yejin.png",
        name: "Yejin Kim / 김예진",
        role: "Integrated (M.S./Ph.D) Student",
        details: [
          "Research Field: DRG (dorsal root ganglion), pain mechanisms, pain regulation",
          'Email: <a href="mailto:judy024802@gmail.com">judy024802@gmail.com</a>',
        ],
        detailPage: "yejin.html",
      },
      {
        image: "daeun.png",
        name: "Daeun Roh / 노다은",
        role: "Integrated (M.S./Ph.D) Student",
        details: [
          "Research Field: neuropathic pain, computational modeling; DRG in pain processing",
        ],
        detailPage: "daeun.html",
      },
      {
        image: "seungjun.png",
        name: "Seungjun Lee / 이승준",
        role: "Integrated (M.S./Ph.D) Student",
        details: [
          "Research Field: imaging &amp; signal analysis in biomedical research; innovative approaches in optics",
        ],
        detailPage: "seungjun.html",
      },
    ],
  },

  {
    section: "master",
    title: "Master Students",
    members: [
      {
        image: "ethel.png",
        name: "Ethel Phiri",
        role: "Master",
        details: [
          "Research Field: Data Science",
        ],
        detailPage: "ethel.html",
      },
    ],
  },

  {
    section: "intern",
    title: "Intern / Undergraduate",
    members: [
      {
        image: "hyojeong.png",
        name: "Hyojeong Lee / 이효정",
        role: "Undergraduate Student",
        details: [
          "Research Field: imaging &amp; signal analysis in biomedical research; innovative approaches in optics",
        ],
        detailPage: "hyojeong.html",
      },
      {
        image: "youngmin.png",
        name: "Youngmin Jung / 정영민",
        role: "Undergraduate Student",
        details: [
          "Research Field: optical microscopy, fluorescence imaging, event based sensing",
        ],
        detailPage: "youngmin.html",
      },
    ],
  },

  {
    section: "alumni",
    title: "Alumni",
    description: "졸업생 및 전 구성원.",
    members: [],
  },
];

window.MEMBERS_HELPERS = {
  IMG_BASE: "/gist-neurophotonicslab/assets/img/member",
  imageUrl(filename) {
    return this.IMG_BASE + "/" + filename;
  },
  escape(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  },
};
