const DATA = {
  profile: {
    name: "Fadel Muhammad",
    avatar: "img/me.webp",
    status: "Ayo Berkolaborasi",
    email: "fadelmuh185@email.com",
    github: "https://github.com/Swiftttdell",
    instagram: "https://www.instagram.com/_swifttdell/",
    linkedin: "#",
    whatsapp: "https://wa.me/6289509394128"
  },

  themes: [
    { id: "light", icon: "sun", title: "Light" },
    { id: "dark", icon: "moon", title: "Dark" },
    { id: "dim", icon: "bolt", title: "Yellow" },
    { id: "contrast", icon: "half", title: "Ramadan" },
    { id: "focus", icon: "heart", title: "Valentine" }
  ],

  nav: [
    { id: "beranda", label: "Beranda", icon: "home" },
    { id: "tentang", label: "Tentang", icon: "user" },
    { id: "pencapaian", label: "Pencapaian", icon: "award" },
    { id: "proyek", label: "Proyek", icon: "folder" },
    { id: "kegunaan", label: "Kegunaan", icon: "monitor" },
    { id: "kontak", label: "Kontak", icon: "mail" },
    { id: "links", label: "Playlist", icon: "spotify" }
  ],

  hero: {
    title: "Hi, saya Fadel Muhammad",
    subtitle: "Web Developer & UI/UX Design.",
    meta: [
      { icon: "location", text: "Kota Bekasi, Jawa Barat" },
      { icon: "briefcase", text: "Open to Collaboration" }
    ],
    p1: "Seorang Web Developer & UI/UX Design yang berdedikasi untuk membangun solusi digital yang berdampak. Saya spesialis dalam pengembangan platform web yang skalabel dan design tampilan yang user friendly menggunakan tech stack seperti PHP, React.js, dan Figma.",
    p2: "Fokus saya adalah merancang arsitektur website yang terstruktur dengan baik, dan mudah dipelihara. Saya memadukan keahlian teknis dengan komunikasi proaktif dan kepemimpinan untuk memastikan setiap proyek memberikan kejelasan logis dan dampak nyata di dunia nyata."
  },

  skillTabs: [
    { id: "all", label: "Semua" },
    { id: "utama", label: "Utama" },
    { id: "frontend", label: "Front End" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Alat" }
  ],

  skills: [
    { name: "HTML",       icon: "devicon-html5-plain colored",       category: ["utama","frontend"], colorClass: "skill-html" },
    { name: "CSS",        icon: "devicon-css3-plain colored",        category: ["utama","frontend"], colorClass: "skill-css" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored",  category: ["utama","frontend"], colorClass: "skill-js" },
    { name: "Java",       icon: "devicon-java-plain colored",        category: ["utama","backend"],  colorClass: "skill-java" },
    { name: "Kotlin",     icon: "devicon-kotlin-plain colored",      category: ["utama","backend"],  colorClass: "skill-kotlin" },
    { name: "TailwindCSS",icon: "devicon-tailwindcss-plain colored", category: ["utama","frontend"], colorClass: "skill-tailwind" },
    { name: "PHP",        icon: "devicon-php-plain colored",         category: ["utama","backend"],  colorClass: "skill-php" },
    { name: "MySQL",      icon: "devicon-mysql-plain colored",       category: ["utama","database"], colorClass: "skill-mysql" },
    { name: "React.js",   icon: "devicon-react-original colored",    category: ["utama","frontend"], colorClass: "skill-react" },
    { name: "Git",        icon: "devicon-git-plain colored",         category: ["utama","tools"],    colorClass: "skill-git" },
    { name: "GitHub",     icon: "devicon-github-original",           category: ["utama","tools"],    colorClass: "skill-github" },
    { name: "npm",        icon: "devicon-npm-plain",                   category: ["utama","tools"],  colorClass: "skill-npm" },
    { name: "Figma",      icon: "devicon-figma-plain colored",       category: ["utama","tools"],    colorClass: "skill-figma" },
    { name: "Bun",        icon: "devicon-bun-plain colored",         category: ["utama","tools"],    colorClass: "skill-bun" },
  ],

  about: {
    paragraphs: [
      {
        id: "Saya adalah seorang pelajar yang punya semangat tinggi di dunia teknologi, khususnya dalam membangun pengalaman digital yang menarik. Sebagai seseorang yang mendalami Web Development sekaligus UI/UX Design, saya sangat menikmati proses mengubah ide mentah menjadi sebuah produk visual yang estetik dan fungsional. Bagi saya, coding bukan cuma soal baris perintah, tapi soal bagaimana menciptakan solusi yang bermanfaat bagi orang banyak.",
        en: "I am a student with a deep passion for technology, especially in building engaging digital experiences. As someone who studies Web Development alongside UI/UX Design, I really enjoy the process of turning raw ideas into aesthetic and functional visual products. For me, coding is not just about lines of commands — it's about creating solutions that benefit many people."
      },
      {
        id: "Dalam hal teknis, saya sehari-hari berkutat dengan React Js untuk membangun sisi engine website yang tangguh dan interaktif. Namun, sebelum masuk ke bagian kode, saya biasanya menuangkan kreativitas saya di Figma terlebih dahulu. Di sana, saya merancang tampilan antarmuka yang modern dan memastikan pengalaman pengguna (user experience) terasa mulus dan nyaman saat digunakan.",
        en: "On the technical side, I spend my days working with React Js to build robust, interactive website engines. But before jumping into code, I usually pour my creativity into Figma first. There, I craft modern interfaces and make sure the user experience feels smooth and comfortable to use."
      },
      {
        id: "Meskipun masih berstatus pelajar, saya selalu haus akan tantangan baru dan terus mengikuti perkembangan teknologi terbaru. Fokus utama saya adalah terus belajar, bereksperimen dengan berbagai desain, dan menghasilkan proyek-proyek web yang tidak hanya keren dilihat, tapi juga efisien secara performa.",
        en: "Even though I'm still a student, I'm always hungry for new challenges and keep up with the latest tech trends. My main focus is to keep learning, experimenting with different designs, and producing web projects that not only look great but also perform efficiently."
      }
    ],
    signature: "Fadel Muhammad",
    careers: [
      {
      role:
       { id: "KPPN Bekasi", en: "KPPN Bekasi" },
        company: { id: "Kantor Pelayanan Perbendaharaan Negara Bekasi", en: "State Treasury Services Office Bekasi" },
        period: { id: " 3 November 2025 - 30 Januari 2026", en: "3 November 2025 - 30 Januari 2026" },
        detail: {
          id: "Mendedikasikan keahlian saya selama Magang/PKL di KPPN Bekasi untuk merancang, membangun prototipe, dan mengimplementasikan antarmuka aplikasi atau situs web yang estetis, intuitif, dan konsisten demi mendukung pelayanan publik dan digitalisasi instansi.",
          en: "Dedicating my expertise during internship at KPPN Bekasi to design, build prototypes, and implement aesthetic, intuitive, and consistent application or website interfaces to support public services and institutional digitalization."
        },
        logo: "img/Kppn.webp"
      }
    ],
    education: [
      {
        name: { id: "SMKS Taruna Bangsa", en: "SMKS Taruna Bangsa"},
        meta: { id: "SMK - 2024 - 2027 -  Kota Bekasi, Jawa Barat", en: "Vocational High School - 2024 - 2027 - Bekasi City, West Java"},
        logo: "img/tb.webp"
      },
      {
        name: { id: "SMP IT Al-Manar", en: "SMP IT Al-Manar" },
        meta: { id: "SMP - 2020 - 2023 - Kota Bekasi, Jawa Barat", en: "Junior High School - 2020 - 2024 - Bekasi City, West Java"},
        logo: "img/almanar.webp"
      },
      {
        name: { id: "SD Negeri Tp 7", en: "SD Negeri Tp 7" },
        meta: { id: "SD - 2013 - 2019 - Kota Bekasi, Jawa Barat", en: "Elementary School - 2013 - 2019 - Bekasi City, West Java" },
        logo: "img/sdn.webp"
      },
      {
        name: { id: "TK OdaPusa", en: "TK OdaPusa" },
        meta: { id: "Taman Kanak-Kanak - 2012- 2013 - Kota Bekasi, Jawa Barat", en: "Kindergarten - 2012 - 2013 - Bekasi City, West Java" },
        logo: "img/tk.webp"
      }
    ]
  },

  projects: {
    typeTabs: [
      { key: "Semua", id: "Semua", en: "All" },
      { key: "Web", id: "Web", en: "Web" },
      { key: "Prototype", id: "Prototype", en: "Prototype" }
    ],
    categoryTabs: [
      { key: "Semua", id: "Semua", en: "All" },
      { key: "Proyek Pribadi", id: "Proyek Pribadi", en: "Personal Project" },
      { key: "Freelance", id: "Freelance", en: "Freelance" },
      { key: "Lomba", id: "Lomba", en: "Competition" }
    ],
    items: [
      {
        slug: "fadel-my-id",
        title: "Fadel.my.id — Personal Portfolio",
        desc: {
          id: "Website portofolio pribadi yang menampilkan profil, keahlian, pencapaian, proyek, dan musik favorit.",
          en: "A personal portfolio website featuring my profile, skills, achievements, projects, and favorite music."
        },
        type: "Web",
        category: "Proyek Pribadi",
        image: "img/web-developer.webp",
        featured: true,
        tech: ["HTML", "CSS", "JavaScript", "Vercel"],
        links: [
          { label: "Live Demo", url: "https://fadel.my.id" },
          { label: "GitHub Source", url: "https://github.com/fm5355138-pixel/pribadi" }
        ],
        github_raw: "fm5355138-pixel/pribadi"
      },
      {
        slug: "cheznous-caffe",
        title: "ChezNous Caffe — Boardgame Cafe",
        desc: {
          id: "Website boardgame cafe dengan menu makanan dan minuman, 100+ pilihan boardgame, keranjang pesanan, serta booking meja.",
          en: "A boardgame cafe website featuring food and drink menus, 100+ boardgames, an order cart, and table booking."
        },
        type: "Web",
        category: "Proyek Pribadi",
        image: "img/proyek/cheznous-caffe.svg",
        tech: ["React", "TypeScript"],
        detail: {
          id: "<h3>Gambaran Proyek</h3><p>ChezNous Caffe adalah website boardgame cafe yang menggabungkan informasi kafe, menu, pilihan permainan, pemesanan, dan booking meja dalam satu tempat.</p><h3>Fitur dan Konten</h3><ul><li>Menampilkan menu makanan favorit seperti Bakso ChezNous, Nasi Goreng ChezNous, dan Mix Platter, serta pilihan minuman signature.</li><li>Memperkenalkan koleksi 100+ judul boardgame dan suasana kafe yang nyaman.</li><li>Menyediakan keranjang pesanan dan akses untuk melihat menu serta melakukan booking meja.</li><li>Menampilkan pilihan paket bermain: Main Per Jam Rp12.000/jam dan All Day Play Rp35.000/orang.</li></ul><h3>Teknologi</h3><p>Dibangun menggunakan React dan TypeScript.</p>",
          en: "<h3>Project Overview</h3><p>ChezNous Caffe is a boardgame cafe website that brings together cafe information, menus, games, ordering, and table booking.</p><h3>Features and Content</h3><ul><li>Showcases favorite food such as ChezNous Meatballs, ChezNous Fried Rice, and Mix Platter, along with signature drinks.</li><li>Introduces a collection of 100+ boardgames and the cafe's cozy atmosphere.</li><li>Provides an order cart and access to browse the menu and book a table.</li><li>Lists play options: Main Per Jam at Rp12,000/hour and All Day Play at Rp35,000/person.</li></ul><h3>Technology</h3><p>Built with React and TypeScript.</p>"
        },
        links: [
          { label: "Live Demo", url: "https://caffe-hc98.vercel.app" }
        ]
      },
      {
        slug: "lego-minifigure",
        title: "Lego Minifigure — Customizer",
        desc: {
          id: "Customizer interaktif untuk mengubah ekspresi serta warna bagian atas dan bawah minifigure Lego.",
          en: "An interactive customizer for changing a Lego minifigure's expression and upper- and lower-body colors."
        },
        type: "Web",
        category: "Proyek Pribadi",
        image: "img/proyek/lego-minifigure.svg",
        tech: ["HTML", "CSS", "JavaScript"],
        links: [
          { label: "Live Demo", url: "https://fadel-nu.vercel.app" }
        ]
      }
    ]
  },

  achievements: [
    {
      id: "ach-1",
      code: "07Z67Q39WPQR",
      title: "Spec-Driven Development dengan Kiro (AI)",
      org: "Dicoding Indonesia",
      type: "Ai",
      category: "Dasar",
      date: { id: "Mei 20, 2026", en: "May 20, 2026" },
      image: "img/sertifikat/belajardengankiro.webp",
      credentialUrl: "https://www.dicoding.com/certificates/07Z67Q39WPQR"
    },
    {
      id: "ach-2",
      code: "N9ZON090DXG5",
      title: "Belajar Dasar Manajemen Proyek",
      org: "Dicoding Indonesia",
      type: "Manajemen",
      category: "Dasar",
      date: { id: "Mei 20, 2026", en: "May 20, 2026" },
      image: "img/sertifikat/analisdasar.webp",
      credentialUrl: "https://www.dicoding.com/certificates/N9ZON090DXG5"
    },
    {
      id: "ach-3",
      code: "1OP8R3EW1ZQK",
      title: "Belajar Dasar Cloud Computing",
      org: "Dicoding Indonesia",
      type: "Cloud",
      category: "Dasar",
      date: { id: "Juni 27, 2026", en: "June 27, 2026" },
      image: "img/sertifikat/awsdasar.webp",
      credentialUrl: "https://www.dicoding.com/certificates/1OP8R3EW1ZQK"
    },
    {
      id: "ach-4",
      code: "81P2OREOOZOY",
      title: "Memulai Pemrograman dengan Python",
      org: "Dicoding Indonesia",
      type: "Ptython",
      category: "Dasar",
      date: { id: "Juni 29, 2026", en: "June 29, 2026" },
      image: "img/sertifikat/python.webp",
      credentialUrl: "https://www.dicoding.com/certificates/81P2OREOOZOY"
    },
  ],

  uses: [
    {
      group: { id: "Perangkat Keras", en: "Hardware" },
      items: [
        {
          name: { id: "Laptop IDEAPAD", en: "IDEAPAD Laptop" },
          desc: {
            id: "Perangkat portable dengan spesifikasi Intel Core i3, RAM 8GB yang memungkinkan saya untuk belajar dimana saja",
            en: "A portable rig with Intel Core i3, 8GB RAM that lets me study from anywhere."
          }
        },
        {
          name: { id: "Keyboard Mechanical Rexus", en: "Rexus Mechanical Keyboard" },
          desc: {
            id: "Keyboard Mechanical Red Switch yang memberikan pengalaman ketik serta meningkatkan kenyamanan saya dalam mengetik",
            en: "A Red Switch mechanical keyboard that gives a great typing feel and boosts my typing comfort."
          }
        },
        {
          name: { id: "Mouse Logitech Wireless", en: "Logitech Wireless Mouse" },
          desc: {
            id: "Mouse wireless untuk kenyamanan tanpa adanya gangguan kabel, dibekali dengan desain yang ergonimis sehingga nyaman saat digunakan",
            en: "A wireless mouse for cable-free comfort, with an ergonomic design that's pleasant to use."
          }
        }
      ]
    },
    {
      group: { id: "Editor", en: "Editor" },
      items: [
        {
          name: { id: "VS Code", en: "VS Code" },
          desc: {
            id: "Editor code yang saya gunakan sebagai alat utama untuk pengembangan website dengan ekosistem ekstensi yang sangat lengkap",
            en: "The code editor I use as my main tool for web development, with a very rich extension ecosystem."
          }
        },
      ]
    },
    {
      group: { id: "Terminal", en: "Terminal" },
      items: [
        {
          name: { id: "Windows Terminal", en: "Windows Terminal" },
          desc: { id: "Terminal utama di Windows", en: "My main terminal on Windows." }
        },
        {
          name: { id: "Git Bash", en: "Git Bash" },
          desc: { id: "Terminal berbasis Git untuk workflow", en: "Git-based terminal for my workflow." }
        },
        {
          name: { id: "Claude Code", en: "Claude Code" },
          desc: { id: "AI coding assistant di terminal", en: "An AI coding assistant inside the terminal." }
        },
        {
          name: { id: "Bun", en: "Bun" },
          desc: { id: "Runtime & package manager JavaScript cepat", en: "A fast JavaScript runtime & package manager." }
        }
      ]
    },
    {
      group: { id: "Aplikasi", en: "Apps" },
      items: [
        {
          name: { id: "Google Stitch", en: "Google Stitch" },
          desc: {
            id: " Alat bantu untuk integrasi aset desain yang memastikan setiap elemen visual selaras dengan standar pengembangan produk digital modern",
            en: "A helper for design-asset integration that ensures every visual element aligns with modern digital product standards."
          }
        }
      ]
    },
    {
      group: { id: "Tech Stack", en: "Tech Stack" },
      items: [
        {
          name: { id: "JavaScript", en: "JavaScript" },
          desc: { id: "Fondasi pengembangan web", en: "The foundation of web development." }
        },
        {
          name: { id: "PHP", en: "PHP" },
          desc: { id: "Backend web klasik", en: "Classic web backend." }
        },
        {
          name: { id: "MySQL", en: "MySQL" },
          desc: { id: "Database relasional utama", en: "Main relational database." }
        },
        {
          name: { id: "React", en: "React" },
          desc: { id: "Framework JavaScript untuk UI", en: "JavaScript framework for building user interfaces." }
        }
      ]
    }
  ],

  contacts: [
    {
      title: { id: "Tetap Terhubung", en: "Stay Connected" },
      desc: {
        id: "Hubungi saya melalui email untuk pertanyaan atau kolaborasi.",
        en: "Reach me via email for questions or collaboration."
      },
      button: { id: "Pergi ke Gmail", en: "Open Gmail" },
      icon: "mail",
      theme: "theme-red",
      full: true,
      url: "mailto:fadelmuh185@email.com"
    },
    {
      title: { id: "Sisi Lain Saya", en: "My Other Side" },
      desc: {
        id: "Berbagi cerita, hobi, dan keluh kesah saat ngoding.",
        en: "Sharing stories, hobbies, and complaints while coding."
      },
      button: { id: "Pergi ke Instagram", en: "Open Instagram" },
      icon: "instagram",
      theme: "theme-pink",
      url: "https://www.instagram.com/_swifttdell/"
    },
    {
      title: { id: "Mari Terhubung", en: "Let's Connect" },
      desc: {
        id: "Terhubung dengan saya secara profesional.",
        en: "Connect with me professionally."
      },
      button: { id: "Pergi ke Linkedin", en: "Open LinkedIn" },
      icon: "linkedin",
      theme: "theme-blue",
      url: "# "
    },
    {
      title: { id: "Bergabung dalam Keseruan", en: "Join the Fun" },
      desc: {
        id: "Tonton konten yang menarik dan menyenangkan.",
        en: "Watch fun and engaging content."
      },
      button: { id: "Pergi ke Tiktok", en: "Open TikTok" },
      icon: "music",
      theme: "theme-gray",
      url: "https://www.tiktok.com/@username719277"
    },
    {
      title: { id: "Jelajahi Kode", en: "Explore the Code" },
      desc: {
        id: "Jelajahi karya sumber terbuka saya.",
        en: "Explore my open-source work."
      },
      button: { id: "Pergi ke Github", en: "Open GitHub" },
      icon: "github",
      theme: "theme-navy",
      url: "https://github.com/Swiftttdell"
    }
  ],

};