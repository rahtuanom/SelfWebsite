export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  role: string;
  highlights?: string[];
  link?: string;
  image?: string;
  gallery?: string[];
  featured?: boolean;
  themeColor?: "blue" | "green" | "purple" | "orange" | "pink";
  figmaEmbed?: string;
  order?: number;
}

export interface Experience {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  responsibilities?: string[];
  logo?: string;
  gallery?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Topic Modeling untuk Judul Berita Indonesia",
    category: "Data Science & NLP",
    role: "Data Scientist / NLP Engineer",
    description: "Merancang pipeline Natural Language Processing (NLP) end-to-end untuk memproses dan menganalisis lebih dari 100.000 data judul berita hasil scraping. Proyek ini bertujuan untuk memetakan struktur taksonomi teks secara otomatis.",
    techStack: ["Python", "Django", "Web Scraping", "NLP", "Machine Learning"],
    featured: true,
    order: 1,
    themeColor: "purple",
    highlights: [
      "Mengimplementasikan custom domain-based stopwords yang secara efektif menyaring noise jurnalistik.",
      "Mengembangkan model Machine Learning Agglomerative Hierarchical Clustering untuk pemetaan taksonomi teks.",
      "Mengevaluasi berbagai metode linkage untuk menemukan dan menyajikan struktur topik yang paling optimal melalui visualisasi data interaktif.",
      "Mendemonstrasikan kemampuan mengolah, membersihkan, dan menganalisis dataset berskala besar untuk kebutuhan Data Analytics."
    ]
  },
  {
    id: 8,
    title: "Analisis Prediksi Review Game Steam",
    category: "Data Science & Big Data",
    role: "Data Analyst",
    description: "Membangun model prediksi deret waktu (time-series) untuk memproyeksikan tren sentimen ulasan game harian di platform Steam, yang membantu memahami potensi kualitas dan rating game di masa depan.",
    techStack: ["Python", "ARIMA", "SARIMA", "Data Modeling", "Big Data"],
    themeColor: "purple",
    highlights: [
      "Menggunakan model statistika tingkat lanjut (ARIMA & SARIMA) untuk memprediksi jumlah ulasan positif dan negatif.",
      "Menganalisis pergerakan tren data harian untuk menghasilkan wawasan prediktif berbasis data."
    ]
  },
  {
    id: 9,
    title: "Sistem Informasi Rekam Medis Terintegrasi",
    category: "Web Development",
    role: "Full-Stack Developer",
    description: "Mengembangkan platform rekam medis berbasis web untuk administrasi rumah sakit yang memungkinkan pengelolaan data pasien secara dinamis.",
    techStack: ["HTML/CSS", "Bootstrap", "JavaScript", "Backend Integration"],
    themeColor: "blue",
    highlights: [
      "Membangun arsitektur Full-Stack dasar dengan fungsionalitas CRUD (Create, Read, Update, Delete) yang solid.",
      "Mengimplementasikan fitur pencetakan data otomatis (print-ready) untuk pelaporan medis."
    ]
  },
  {
    id: 4,
    title: "HaloHati - Microsoft Elevate Hackathon",
    category: "Web Development",
    role: "Front-End Developer",
    description: "Berpartisipasi dalam kompetisi Microsoft Elevate Hackathon, membangun solusi digital kolaboratif dalam lingkungan kerja bertempo cepat (agile).",
    techStack: ["Front-End Development", "UI/UX Design", "System Integration"],
    featured: true,
    order: 2,
    themeColor: "pink",
    highlights: [
      "Merancang dan mengimplementasikan antarmuka (Front-End) yang sangat responsif dan berpusat pada pengalaman pengguna (User-Centric).",
      "Berkolaborasi lintas disiplin untuk memastikan integrasi sistem berjalan mulus dari desain hingga deployment."
    ]
  },
  {
    id: 5,
    title: "Sistem Deteksi Tinggi Badan (Computer Vision)",
    category: "Artificial Intelligence",
    role: "AI Developer",
    description: "Membuat program pendeteksi dimensi fisik manusia secara real-time melalui tangkapan webcam menggunakan teknologi Computer Vision.",
    techStack: ["Python", "YOLO", "Pre-trained Models", "Computer Vision"],
    themeColor: "purple",
    highlights: [
      "Memanfaatkan arsitektur YOLO untuk deteksi objek presisi tinggi.",
      "Mengimplementasikan pemetaan skeleton tubuh (pose estimation) untuk mengkalkulasi estimasi jarak dan tinggi badan manusia."
    ]
  },
  {
    id: 6,
    title: "Smart Attendance System via Telegram Bot",
    category: "Internet of Things (IoT)",
    role: "IoT Engineer",
    description: "Merancang sistem absensi fisik terpadu menggunakan perangkat keras mikrokontroler yang terhubung secara otomatis ke platform Telegram untuk pemantauan real-time.",
    techStack: ["RFID RC522", "ESP8266", "Telegram Bot API", "Database", "Security System"],
    themeColor: "blue",
    highlights: [
      "Mengintegrasikan sensor RFID dengan modul WiFi ESP8266 untuk komunikasi data IoT.",
      "Membangun Bot Telegram fungsional sebagai antarmuka (interface) pemantauan log absensi bagi pengguna."
    ]
  },
  {
    id: 7,
    title: "CASHOW: Aplikasi Mobile Pencatatan Keuangan",
    category: "Mobile Development",
    role: "Android Developer",
    image: "/projects/CASHOW.png",
    description: "Mengembangkan aplikasi mobile native Android untuk membantu pengguna mencatat histori finansial dan memantau status kas.",
    techStack: ["Kotlin/Java", "Android Studio", "Mobile Database"],
    themeColor: "blue",
    highlights: [
      "Membangun aplikasi from scratch menggunakan android studio.",
      "Mengimplementasikan metode CRUD pada lingkungan mobile app."
    ]
  },
  {
    id: 3,
    title: "TraBali: Desain UI/UX Aplikasi Pariwisata",
    category: "UI/UX Design",
    role: "UI/UX Designer",
    image: "/projects/TRABALI1.png",
    gallery: ["/projects/TRABALI1.png", "/projects/TRABALI2.png"],
    description: "Mendesain purwarupa (prototype) aplikasi mobile direktori pariwisata Bali dengan pendekatan desain modern, estetik, dan fungsional berbasis deteksi lokasi pengguna.",
    techStack: ["Figma", "Wireframing", "Prototyping", "UX Research"],
    themeColor: "orange",
    highlights: [
      "Fokus pada eksplorasi estetika antarmuka (UI) yang memikat dengan alur pengalaman pengguna (UX) yang intuitif."
    ]
  },
  {
    id: 2,
    title: "Infografis: Eksplorasi Data Perpustakaan Udayana",
    category: "Data Analysis",
    role: "Data Analyst",
    image: "/projects/PERPUS1.png",
    gallery: ["/projects/PERPUS1.png", "/projects/PERPUS2.png", "/projects/PERPUS3.png", "/projects/PERPUS4.png", "/projects/PERPUS5.png", "/projects/PERPUS6.png", "/projects/PERPUS7.png", "/projects/PERPUS8.png"],
    description: "Menganalisis log harian pengunjung dari seluruh fakultas di Perpustakaan Universitas Udayana untuk menemukan pola kunjungan dan insight tersembunyi.",
    techStack: ["Data Visualization", "Exploratory Data Analysis (EDA)", "Statistics"],
    themeColor: "purple",
    highlights: [
      "Mengubah raw data menjadi argumen visual (infografis) yang mudah dipahami oleh audiens non-teknis.",
      "Membuat sebuah konten infografis yang dapat dipertimbangkan dalam media sosial informasi perpustakaan."
    ]
  },
  {
    id: 10,
    title: "Juara 1 Nasional - Infografis Technostress",
    category: "Design & Research",
    role: "Visual Researcher",
    image: "/projects/TECHNOSTRESS1.png",
    gallery: ["/projects/TECHNOSTRESS1.png", "/projects/TECHNOSTRESS2.png", "/projects/TECHNOSTRESS3"],
    description: "Memenangkan juara pertama kompetisi tingkat nasional oleh BEM Psikologi Universitas Jayabaya lewat karya visual yang membahas dampak stres akibat penggunaan media digital berlebih.",
    techStack: ["Graphic Design", "Psychological Research", "Data Storytelling", "Infographic"],
    featured: true,
    order: 3,
    themeColor: "orange",
    highlights: [
      "Menyajikan solusi berbasis riset yang kredibel lewat visualisasi data kreatif."
    ]
  },
  {
    id: 11,
    title: "Infografis Dampak Ekonomi Nyepi",
    category: "Design & Research",
    role: "Visual Researcher",
    image: "/projects/NYEPI.png",
    description: "Mengangkat topik kebudayaan di festival Litfest Brawijaya dengan menganalisis penghematan energi nasional (hingga Rp17,4 Miliar) selama Hari Raya Nyepi.",
    techStack: ["Data Journalism", "Information Design"],
    themeColor: "orange"
  },
  {
    id: 12,
    title: "Infografis Kripto: Anatomi Bitcoin",
    category: "Design & Research",
    role: "Visual Researcher",
    image: "/projects/BITCOIN.png",
    description: "Mengeksplorasi konsep uang digital untuk Gammafest melalui media edukatif yang membedah mekanika Bitcoin dibandingkan mata uang konvensional.",
    techStack: ["Financial Tech", "Visual Design"],
    themeColor: "orange"
  },
  {
    id: 13,
    title: "Personal Web Portfolio",
    category: "Web Development",
    role: "Front-End Developer",
    description: "Situs portofolio modern yang menampilkan perjalanan karir, skill, dan proyek pribadi. Dibangun dengan fokus pada estetika tinggi, animasi dinamis, dan performa maksimal.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    themeColor: "blue"
  },
  {
    id: 14,
    title: "#JuaraVibeCoding (Ongoing)",
    category: "Software Engineering",
    role: "Developer",
    description: "Eksplorasi teknologi secara berkelanjutan dan kompetitif dalam ekosistem Vibe Coding.",
    techStack: ["Agentic AI", "Modern Web Tech"],
    themeColor: "purple"
  },
  {
    id: 15,
    title: "Desain Grafis Feed Instagram KKN-XXIX Desa Lebih",
    category: "Graphic Design & Branding",
    role: "Graphic Designer",
    description: "Merancang identitas visual, template postingan, dan memproduksi konten kreatif untuk feed Instagram KKN Universitas Udayana di Desa Lebih, Gianyar. Fokus pada dokumentasi visual program kerja pengabdian secara komunikatif.",
    techStack: ["Adobe Illustrator", "Canva", "Social Media Branding", "Copywriting"],
    themeColor: "orange",
    featured: true,
    figmaEmbed: "https://embed.figma.com/design/kQKrN4UFzNxx7m8s9MorXX/KKN.LEBIH2024?node-id=22-2&embed-host=share",
    highlights: [
      "Menyusun tata letak feed Instagram yang estetis, rapi, dan informatif untuk company profile dan kegiatan pengabdian masyarakat.",
      "Memperkenalkan seluruh bagan keanggotaan dan program kerja melalui konsistensi gaya desain visual dan video."
    ]
  },
  {
    id: 16,
    title: "Desain Grafis & Konten Feed Instagram PAKSI UDAYANA",
    category: "Graphic Design & Branding",
    role: "Kepala Bidang Jurnalistik",
    description: "PAKSI UDAYANA adalah Unit Kegiatan Mahasiswa di lingkungan Fakultas Teknik yang bergerak dibidang antariksa",
    techStack: ["Figma", "Adobe Premiere Pro", "Adobe Photoshop", "Social Media Branding", "Copywriting"],
    themeColor: "orange",
    featured: true,
    figmaEmbed: "",
    highlights: [
      "Menyusun tata letak feed Instagram yang estetis, rapi, dan informatif untuk company profile dan kegiatan PAKSI UDAYANA.",
      "Memperkenalkan seluruh bagan keanggotaan dan program kerja melalui konsistensi gaya desain visual dan video.",
      "Membuat Desain Baju, Jacket, Poster untuk menggait minat mahasiswa baru untuk bergabung dengan Organisasi"
    ]
  }
];

export const educationAndBootcamps: Experience[] = [
  {
    id: 1,
    role: "Data & Software Engineering Trainee (Grade: 92/100)",
    organization: "RevoU Academy (MSIB Kampus Merdeka)",
    period: "2023",
    description: "Program intensif MSIB Batch 5, berfokus pada analisis data dan pengembangan perangkat lunak.",
    responsibilities: [
      "Data Analysis (Capstone 1): Memimpin tugas prapemrosesan dan pembersihan data (data cleaning) untuk memastikan akurasi dataset. Berperan sebagai asisten Team Lead dalam menjaga efisiensi alur kerja analisis.",
      "Software Engineering (Capstone 2): Bertindak sebagai Team Lead yang mengelola timeline proyek dan memandu pengembangan aplikasi web fungsional. Menerapkan prinsip Front-End dan Back-End untuk menghasilkan produk digital yang terpadu.",
      "Keterampilan Utama: Kepemimpinan Tim (Team Management), Analisis Data, Full-Stack Development."
    ],
    gallery: ["/SelfPotrait.png", "/projects/web_dev.png"]
  }
];

export const organizationsData: Experience[] = [
  {
    id: 1,
    role: "Kepala Bidang Jurnalistik & Bursa (Kepala Divisi)",
    organization: "PAKSI",
    period: "2023 - 2024",
    description: "Bertanggung jawab memimpin arah strategi publikasi, branding digital, manajemen konten, serta mengelola operasional pusat informasi internal organisasi.",
    logo: "/logos/LOGOPAKSI.png",
    gallery: ["/projects/PAKSI1.png", "/projects/PAKSI2.png", "/projects/PAKSI3.png", "/projects/PAKSI4.png"],
    responsibilities: [
      "Mendesain strategi visual dan identitas brand PAKSI melalui feed & story Instagram yang konsisten.",
      "Memproduksi video profil/pengenalan fungsionaris sebagai sarana komunikasi efektif ke civitas akademika Udayana.",
      "Menyusun dan mengeksekusi kalender konten media sosial serta menganalisis metrik interaksi audiens.",
      "Memimpin operasional bursa anggota sebagai simpul koordinasi internal."
    ]
  },
  {
    id: 2,
    role: "Sekretaris II",
    organization: "Program Studi Maestro (Tim Jurnalistik Fakultas Teknik)",
    period: "2023 - 2024",
    description: "Mengelola administrasi dan memfasilitasi jalur komunikasi strategis di dalam tim jurnalistik lingkungan Fakultas Teknik Universitas Udayana.",
    logo: "/logos/LOGOMAESTRO.jpg",
    responsibilities: [
      "Mengawasi tata kelola arsip, rekam jejak surat menyurat, serta pendistribusian dokumen internal dan eksternal.",
      "Menjembatani dan memfasilitasi arus komunikasi antara Ketua dengan divisi internal maupun pihak eksternal, memastikan sinergi operasional berjalan lancar."
    ]
  },
  {
    id: 3,
    role: "Anggota Divisi Programming",
    organization: "KRSRI - ROBOTEC Universitas Udayana",
    period: "2021 - 2023",
    description: "Berperan aktif selama 3 tahun dalam divisi pemrograman khusus untuk Kontes Robot SAR Indonesia (KRSRI) pada Unit Kegiatan Mahasiswa Robotika.",
    logo: "/logos/LOGOROBOTEC.png",
    responsibilities: [
      "Mengembangkan dan mengoptimalkan algoritma pergerakan dan navigasi robot otonom untuk simulasi maupun pertandingan nyata.",
      "Melakukan troubleshooting pada integrasi hardware dan software mikrokontroler saat sesi uji coba lintasan.",
      "Membimbing anggota baru (regenerasi) dengan memberikan materi dasar logika pemrograman dan struktur kendali robotika."
    ]
  },
  {
    id: 4,
    role: "Anggota Bidang Rohani",
    organization: "Himpunan Mahasiswa Teknologi Informasi (HMTI)",
    period: "2023",
    description: "Bertanggung jawab dalam merencanakan dan mengeksekusi program kerja yang memfasilitasi pemenuhan kebutuhan spiritual serta menjaga keseimbangan nilai-nilai moral fungsionaris.",
    logo: "/logos/LOGOHMTI.jpg",
    responsibilities: [
      "Mengkoordinir kegiatan keagamaan rutin untuk mempererat solidaritas anggota lintas keyakinan.",
      "Memastikan penyisipan nilai religius dan etika dalam setiap pelaksanaan program kerja himpunan agar berjalan lancar.",
      "Menyediakan dukungan dan fasilitas kelancaran ibadah di tengah padatnya agenda organisasi kampus."
    ]
  }
];

export const committeesData: Experience[] = [
  {
    id: 1,
    role: "Koordinator - Sie Acara",
    organization: "Pelatihan Jurnalistik Mahasiswa (PJM) Fakultas Teknik",
    logo: "/logos/LOGOMAESTRO.jpg",
    period: "2023",
    description: "Memimpin divisi acara, merancang konsep (rundown), dan memastikan kualitas eksekusi lapangan berjalan tanpa hambatan.",
    responsibilities: [
      "Memimpin seluruh proses perencanaan (konsep dan proposal) serta eksekusi lapangan (rundown) untuk kegiatan pelatihan jurnalistik.",
      "Menjalin komunikasi efektif dengan internal dan eksternal",
      "Melakukan evaluasi setelah acara guna mengidentifikasi kekuatan dan area perbaikan untuk kegiatan mendatang.",
      "Mengembangkan kreativitas dalam penyajian materi agar sesi tidak monoton dan mampu mempertahankan tingkat keterlibatan peserta."
    ]
  },
  {
    id: 2,
    role: "Master of Ceremony (MC) - Sie Acara",
    organization: "Pembukaan PILMAPRES Universitas Udayana",
    logo: "/logos/LOGOHMTI.jpg",
    period: "2022",
    description: "Memandu berjalannya ajang bergengsi Pemilihan Mahasiswa Berprestasi (Pilmapres) tingkat universitas dengan standar protokoler tinggi.",
  },
  {
    id: 3,
    role: "Master of Ceremony (MC) - Sie Acara",
    organization: "Pelatihan Jurnalistik Mahasiswa (PJM)",
    logo: "/logos/LOGOMAESTRO.jpg",
    gallery: ["/gallery/PJM-MC01.jpg", "/gallery/PJM-MC02.jpg", "/gallery/PJM-MC03.jpg", "/gallery/PJM-MC04.jpg"],
    period: "2022",
    description: "Memandu seluruh rangkaian sesi pelatihan secara profesional.",
    responsibilities: [
      "Mengerjakan rundown acara dengan terperinci",
      "Membuat teks MC dan Kerangka Teks Moderator",
      "Menjalankan tugas utama menjadi MC yang mengatur jalannya acara utama",
    ]
  },
  {
    id: 4,
    role: "Anggota Sie KGP",
    organization: "Kids Game Programming (ITCC)",
    logo: "/logos/LOGOSCRATCH.png",
    period: "2022",
    description: "Bertanggung jawab menjadi fasilitator sekaligus pengawas teknis untuk kategori lomba pemrograman game anak-anak tingkat nasional yang diselenggarakan oleh Information Technology Creative Competition.",
    responsibilities: [
      "Membuat demo project untuk contoh game yang dapat diikutsertakan sesuai dengan tema",
      "Memberikan pendampingan teknis dan arahan kepada peserta (anak-anak) sebelum proses penjurian dimulai.",
      "Memastikan seluruh perangkat lunak (software) dan komputer peserta berfungsi optimal tanpa kendala.",
      "Menciptakan lingkungan kompetisi yang kondusif, menyenangkan, dan ramah anak."
    ]
  }
];
