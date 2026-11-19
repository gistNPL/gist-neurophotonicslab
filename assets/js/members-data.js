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
// To add an alumnus, append a member to the relevant alumni group below.
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
        image: "young-ro-kim.png",
        name: "Young Ro Kim",
        role: "Endowed Han-Ryang Professorship",
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
          "Research interests: AI-based image processing and optical setup for image acquisition",
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
          "Research interests: medical devices &amp; software, in-vivo imaging and deep understanding of brain functions",
        ],
        detailPage: "fatemeh.html",
      },
      {
        image: "acquah.png",
        name: "Acquah Emmanuel",
        role: "Ph.D Student",
        details: [
          "Research interests: somatosensory system &amp; DRG; neuroimmune interactions; neuropathic pain mechanisms",
        ],
        detailPage: "acquah.html",
      },
      {
        image: "shudha.png",
        name: "Shudha Tasnim Iqbal",
        role: "Ph.D Student",
        details: [
          "Research interests: bio-inspired vision systems; translational optical design for medical imaging &amp; diagnostics",
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
          "Research interests: optimized light control for in-vivo application; light-sheet microscopy; high-speed large area brain imaging",
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
        name: "Jaebong Jo / 조재봉",
        role: "Integrated (M.S./Ph.D) Student, GIST Biomedical Engineering",
        details: [
          "Research interests: magnetic stimulation of neural systems; computational modeling of electromagnetic-neural interactions",
          'Email: <a href="mailto:philosophal@gm.gist.ac.kr">philosophal@gm.gist.ac.kr</a>',
        ],
        detailPage: "jaebong.html",
      },
      {
        image: "yejin.png",
        name: "Yejin Kim / 김예진",
        role: "Integrated (M.S./Ph.D) Student",
        details: [
          "Research interests: DRG (dorsal root ganglion), pain mechanisms, pain regulation",
          'Email: <a href="mailto:judy024802@gmail.com">judy024802@gmail.com</a>',
        ],
        detailPage: "yejin.html",
      },
      {
        image: "daeun.png",
        name: "Daeun Roh / 노다은",
        role: "Integrated (M.S./Ph.D) Student",
        details: [
          "Research interests: neuropathic pain, computational modeling; DRG in pain processing",
        ],
        detailPage: "daeun.html",
      },
      {
        image: "seungjun.png",
        name: "Seungjun Lee / 이승준",
        role: "Integrated (M.S./Ph.D) Student",
        details: [
          "Research interests: imaging &amp; signal analysis in biomedical research; innovative approaches in optics",
        ],
        detailPage: "seungjun.html",
      },
      {
        image: "nada.png",
        name: "Nada Elnagar",
        role: "Integrated (M.S./Ph.D) Student",
        details: [
          "Research interests: neuropathic pain, neurodegenerative diseases, molecular mechanisms of neural signaling, neurophotonics",
        ],
        detailPage: "nada.html",
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
          "Research interests: Data Science",
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
        role: "Undergraduate Research Assistant, GIST EECS",
        details: [
          "Research interests: neural manifold, state-space analysis, theoretical modeling",
          'Email: <a href="mailto:hyojeonglee11190@gmail.com">hyojeonglee11190@gmail.com</a>',
        ],
        detailPage: "hyojeong.html",
      },
      {
        image: "siyeon.png",
        name: "Siyeon Park / 박시연",
        role: "Intern",
        details: [
          "Research interests: biomedical image processing, AI healthcare &amp; signal processing, optical imaging",
          "Education: M.S. / B.S. in Electronic Engineering, Chosun University",
        ],
        detailPage: "siyeon.html",
      },
      {
        image: "youngmin.png",
        name: "Youngmin Jung / 정영민",
        role: "Undergraduate Student",
        details: [
          "Research interests: optical microscopy, fluorescence imaging, event based sensing",
        ],
        detailPage: "youngmin.html",
      },
    ],
  },

  {
    section: "alumni",
    title: "Alumni",
    description: "Career details are from the previous NPL alumni roster unless a newer source is linked.",
    groups: [
      {
        title: "Postdoctoral researchers",
        members: [
          { name: "IM Afzal", role: "Postdoctoral researcher", details: ["Harvard Medical School, Boston, USA"] },
          { name: "MK Shourav", role: "Postdoctoral researcher", details: ["Department of Ophthalmology, Johns Hopkins University, USA"] },
          { name: "PK Poola", role: "Research assistant", details: ["Imaging Lyceum Laboratory, Arizona State University, USA"] },
          { name: "ES Kim", role: "Associate Professor", details: ["Department of Biological Sciences, Chonnam National University, Korea"] },
        ],
      },
      {
        title: "Ph.D. alumni",
        members: [
          { name: "HJ Jeon", role: "Professor", details: ["Department of Mechanical and Biomedical Engineering, Kangwon National University, Korea"] },
          { name: "SW Yoo", role: "Clinical Assistant Professor", details: ["Department of Nuclear Medicine, Chonnam National University Hwasun Hospital, Korea"] },
          { name: "KS Oh", role: "Examiner", details: ["Medical Technology Examination Division, Korean Intellectual Property Office, Korea"] },
          { name: "HJ Park", role: "Research Professor", details: ["Korea University Ansan Hospital, Korea"] },
          { name: "MM Qureshi", role: "Postdoctoral researcher", details: ["Biophotonics of Cancer Research, University Health Network, University of Toronto, Canada"] },
        ],
      },
      {
        title: "Master's alumni",
        members: [
          { name: "YS Jeong", role: "Postdoctoral researcher", details: ["School of Engineering and Applied Sciences, Harvard University, USA"] },
          {
            name: "A M Mahmud Chowdhury",
            role: "Assistant Professor, Department of Cybersecurity",
            details: [
              "SUNY Canton, USA",
              '<a href="https://cyber.canton.edu/faculty" target="_blank" rel="noopener noreferrer">Current faculty profile</a>',
            ],
          },
          { name: "JD Badadhe", role: "Ph.D. student", details: ["Biomedical Engineering, KIST, Korea"] },
          { name: "RK Saha", role: "Ph.D. student", details: ["Arizona State University, USA"] },
          { name: "ES Jeong", role: "Senior Researcher", details: ["R&D Center, Hyundai Motor Company, Korea"] },
          { name: "SH Park", role: "Field Application Engineer", details: ["ASML Korea"] },
          { name: "YJ Ryu", role: "Researcher", details: ["Korea Brain Research Institute, Korea"] },
          { name: "JH Ryu", details: ["Advanced Photonics Research Institute, GIST, Korea"] },
          { name: "SJ Hwang", details: ["Seegene Inc., Korea"] },
          { name: "AM Safi", role: "Ph.D. student", details: ["Department of Electrical Engineering, University of South Florida, USA"] },
          { name: "HJ Cho", role: "Scientist", details: ["Samsung Biologics, Korea"] },
          { name: "SY Kim", role: "Marketing professional", details: ["Siemens Healthineers Korea"] },
          { name: "MS Kim", details: ["Max Planck Florida Institute for Neuroscience, USA"] },
        ],
      },
      {
        title: "Undergraduate alumni",
        members: [
          { name: "JH Lee", details: ["College of Medicine, Hanyang University, Korea"] },
          { name: "HM Lee", details: ["Department of Endocrinology and Metabolism, Samsung Medical Center, Korea"] },
          { name: "YB Ko", details: ["Department of Dentistry, Chosun University, Korea"] },
          { name: "KS Lee", details: ["Department of Life Sciences, GIST, Korea"] },
          { name: "GU Kim", role: "Medical student", details: ["Kyung Hee University School of Medicine, Korea"] },
          { name: "SH Ku", role: "Ph.D. student", details: ["Department of Life Sciences, POSTECH, Korea"] },
          { name: "JW Byun", role: "Ph.D. student", details: ["Materials Science and Engineering, GIST, Korea"] },
          { name: "HH Hwang", details: ["Gyeongsang National University, Korea"] },
          { name: "JE Shin", role: "Ph.D. student", details: ["Department of Chemistry, KAIST, Korea"] },
          { name: "H Chung", role: "Ph.D. student", details: ["Department of Biomedical Engineering, Duke University, USA"] },
        ],
      },
    ],
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
