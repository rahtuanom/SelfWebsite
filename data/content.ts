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
    image: "/projects/SKRIPSI03.png",
    category: "Data Science & NLP",
    role: "Data Scientist / NLP Engineer",
    description: "Sebuah proyek data science yang berfokus pada perancangan pipeline Natural Language Processing (NLP) end-to-end untuk memproses, menganalisis, dan memetakan taksonomi dari lebih dari 100.000 data judul berita secara otomatis. Proyek ini bertujuan untuk mengekstrak struktur topik laten dan memetakan tren informasi dengan akurasi tinggi menggunakan pendekatan clustering hierarkis.",
    techStack: ["Python", "Django", "Web Scraping", "NLP", "Machine Learning"],
    gallery: ["/projects/SKRIPSI01.png", "/projects/SKRIPSI02.png", "/projects/SKRIPSI03.png", "/projects/SKRIPSI04.png"],
    featured: true,
    order: 1,
    themeColor: "purple",
    highlights: [
      "Filter Kebisingan Media: Mengimplementasikan custom domain-based stopwords yang secara efektif menyaring noise jurnalistik untuk meningkatkan kemurnian ekstraksi topik.",
      "Klasterisasi Hierarkis Cerdas: Mengembangkan model Machine Learning Agglomerative Hierarchical Clustering untuk memetakan struktur taksonomi teks secara otomatis dan terstruktur.",
      "Analisis Linkage Optimal: Mengevaluasi berbagai metode linkage untuk mengidentifikasi struktur topik terbaik yang disajikan melalui visualisasi data interaktif yang intuitif.",
      "Pengolahan Data Skala Besar: Mendemonstrasikan kapabilitas Big Data Analytics dalam mengolah, membersihkan, dan menganalisis dataset berskala besar untuk kebutuhan pengambilan keputusan berbasis data."
    ]
  },
  {
    id: 8,
    title: "Analisis Prediksi Review Game Steam",
    image: "/projects/PREDIKSISTEAM01.png",
    category: "Data Science & Big Data",
    role: "Data Analyst",
    description: "Proyek data analytics yang berfokus pada pembangunan model peramalan deret waktu (time-series forecasting) untuk memproyeksikan tren sentimen ulasan game harian di platform Steam. Dengan menganalisis dinamika sentimen pengguna, proyek ini memberikan wawasan prediktif yang krusial bagi developer dan publisher dalam memahami potensi kualitas dan penerimaan pasar sebuah game di masa depan.",
    techStack: ["Python", "ARIMA", "SARIMA", "Data Modeling", "Big Data"],
    themeColor: "purple",
    highlights: [
      "Pemodelan Prediktif Canggih: Memanfaatkan model statistika tingkat lanjut (ARIMA & SARIMA) untuk memproyeksikan tren ulasan positif dan negatif secara presisi.",
      "Analisis Tren Dinamis: Menganalisis fluktuasi harian dan pola musiman data ulasan untuk menghasilkan wawasan prediktif berbasis data yang taktis.",
      "Optimalisasi Pengambilan Keputusan: Menyediakan kerangka kerja analisis sentimen prediktif untuk meminimalkan risiko peluncuran produk dan meningkatkan retensi pemain."
    ]
  },
  // {
  //   id: 9,
  //   title: "Sistem Informasi Rekam Medis Terintegrasi",
  //   category: "Web Development",
  //   role: "Full-Stack Developer",
  //   description: "Proyek rekayasa perangkat lunak berbasis web yang berfokus pada pengembangan sistem informasi rekam medis terintegrasi untuk digitalisasi administrasi rumah sakit. Sistem ini memfasilitasi pengelolaan data pasien, riwayat medis, dan administrasi klinis secara dinamis, aman, dan real-time guna meningkatkan efisiensi operasional layanan kesehatan.",
  //   techStack: ["HTML/CSS", "Bootstrap", "JavaScript", "Backend Integration"],
  //   themeColor: "blue",
  //   highlights: [
  //     "Arsitektur Full-Stack Solid: Membangun sistem administrasi rekam medis dengan fungsionalitas CRUD (Create, Read, Update, Delete) yang responsif dan aman.",
  //     "Pelaporan Otomatis Siap Cetak: Mengintegrasikan modul pencetakan data medis otomatis (print-ready) untuk mempercepat pelaporan administrasi klinis.",
  //     "Manajemen Data Terpusat: Menyederhanakan pencarian dan pengelolaan riwayat medis pasien secara terpusat untuk meminimalkan human error."
  //   ]
  // },
  {
    id: 4,
    title: "HaloHati - Microsoft Elevate Hackathon",
    category: "Web Development",
    role: "Front-End Developer",
    description: "Inisiatif rekayasa perangkat lunak kolaboratif yang dikembangkan dalam ajang kompetisi Microsoft Elevate Hackathon. Solusi digital ini dirancang dengan metodologi agile bertempo cepat guna menghadirkan platform interaktif yang mengatasi isu kesehatan mental, mengintegrasikan antarmuka user-centric dengan arsitektur cloud Microsoft Azure yang tangguh.",
    techStack: ["Front-End Development", "MICROSOFT AZURE", "System Integration"],
    gallery: ["/projects/HALOHATI1.png", "/projects/HALOHATI2.png", "/projects/HALOHATI3.png"],
    image: "/projects/HALOHATI1.png",
    featured: true,
    order: 2,
    themeColor: "pink",
    highlights: [
      "Antarmuka User-Centric: Merancang dan mengimplementasikan antarmuka (Front-End) responsif tinggi yang mengedepankan kemudahan navigasi dan kenyamanan psikologis pengguna.",
      "Integrasi Desain ke Produksi: Memastikan transisi yang mulus dari wireframe High-Fidelity di Figma hingga implementasi kode dan deployment sistem secara fungsional.",
      "Deployment Berbasis Cloud: Memanfaatkan infrastruktur Microsoft Azure untuk memastikan skalabilitas, keandalan, dan keamanan performa aplikasi."
    ]
  },
  {
    id: 5,
    title: "Sistem Deteksi Tinggi Badan (Computer Vision)",
    image: "/projects/COMPVIS01.png",
    gallery: ["/projects/COMPVIS02.png"],
    category: "Artificial Intelligence",
    role: "AI Developer",
    description: "Sebuah implementasi computer vision canggih yang berfokus pada deteksi dimensi fisik manusia secara real-time menggunakan tangkapan kamera/webcam. Dengan memanfaatkan algoritma Deep Learning, sistem ini mengotomatisasi pengukuran tinggi badan dan estimasi proporsi tubuh tanpa kontak fisik secara instan.",
    techStack: ["Python", "YOLO", "Pre-trained Models", "Computer Vision"],
    themeColor: "purple",
    highlights: [
      "Deteksi Objek Real-Time: Memanfaatkan arsitektur YOLO (You Only Look Once) untuk mendeteksi subjek dengan presisi tinggi dan latensi sangat rendah.",
      "Estimasi Pose Skeleton: Mengimplementasikan pemetaan skeleton tubuh (pose estimation) untuk menghitung jarak kamera dan mengkalkulasi estimasi tinggi badan secara matematis.",
      "Automasi Tanpa Kontak: Menyajikan solusi pengukuran inovatif yang dapat diadaptasi untuk kebutuhan skrining kesehatan, retail fashion pintar, hingga interaksi manusia-komputer."
    ]
  },
  {
    id: 6,
    title: "Smart Attendance System via Telegram Bot",
    image: "/projects/IOT01.png",
    category: "Internet of Things (IoT)",
    role: "IoT Engineer",
    gallery: ["/projects/IOT01.png", "/projects/IOT02.png", "/projects/IOT03.png", "/projects/IOT04.png", "/projects/IOT05.png", "/projects/IOT06.png"],
    description: "Proyek IoT (Internet of Things) terpadu yang menggabungkan perangkat keras mikrokontroler dengan ekosistem pesan instan untuk menciptakan sistem absensi otomatis. Sistem ini memungkinkan verifikasi identitas fisik secara instan dan menyalurkan log kehadiran secara real-time ke administrator melalui Bot Telegram.",
    techStack: ["RFID RC522", "ESP8266", "Telegram Bot API", "Database", "Security System"],
    themeColor: "blue",
    highlights: [
      "Integrasi Perangkat Keras: Menghubungkan sensor RFID RC522 dengan modul WiFi ESP8266 untuk pengumpulan dan transmisi data absensi nirkabel secara efisien.",
      "Bot Telegram Fungsional: Membangun bot interaktif sebagai antarmuka pemantauan log absensi, memberikan notifikasi real-time dan kemudahan pelaporan langsung di smartphone.",
      "Efisiensi Operasional: Mengeliminasi pencatatan manual dan mempercepat proses absensi karyawan atau mahasiswa dengan tingkat keamanan data yang andal."
    ]
  },
  {
    id: 7,
    title: "CASHOW: Aplikasi Mobile Pencatatan Keuangan",
    category: "Mobile Development",
    role: "Android Developer",
    image: "/projects/CASHOW.png",
    description: "Aplikasi mobile native Android yang dirancang khusus untuk mempermudah manajemen keuangan pribadi dan pemantauan status arus kas secara mandiri. Aplikasi ini memberikan pengalaman pencatatan keuangan yang aman, intuitif, dan responsif langsung dari genggaman pengguna.",
    techStack: ["Kotlin/Java", "Android Studio", "Mobile Database"],
    themeColor: "blue",
    highlights: [
      "Pengembangan Native Android: Membangun arsitektur aplikasi dari nol (from scratch) menggunakan Android Studio dengan bahasa Kotlin/Java untuk performa optimal.",
      "Manajemen Data Lokal: Mengimplementasikan basis data mobile lokal (SQLite/Room) dengan fungsionalitas CRUD lengkap untuk keamanan data finansial pengguna.",
      "Antarmuka Ringan & Responsif: Mendesain layout antarmuka yang bersih dan interaktif untuk mempercepat pencatatan transaksi harian."
    ]
  },
  {
    id: 3,
    title: "TraBali: Desain UI/UX Aplikasi Pariwisata",
    category: "UI/UX Design",
    role: "UI/UX Designer",
    image: "/projects/TRABALI1.png",
    gallery: ["/projects/TRABALI1.png", "/projects/TRABALI2.png"],
    description: "Sebuah proyek desain UI/UX komprehensif untuk aplikasi mobile direktori pariwisata Bali berbasis deteksi lokasi. Proyek ini mengedepankan perpaduan antara keindahan estetika lokal dengan kegunaan digital modern untuk memberikan panduan perjalanan yang intuitif bagi wisatawan.",
    techStack: ["Figma", "Wireframing", "Prototyping", "UX Research"],
    themeColor: "orange",
    highlights: [
      "Riset Pengalaman Pengguna (UX): Melakukan eksplorasi kebutuhan wisatawan untuk memetakan arsitektur informasi dan user flow yang seamless.",
      "Estetika Visual Memikat (UI): Merancang antarmuka visual modern dengan palet warna yang harmonis dan tipografi elegan yang mencerminkan nuansa pariwisata Bali.",
      "Prototipe Interaktif: Membangun purwarupa high-fidelity di Figma yang merepresentasikan fitur deteksi lokasi, pencarian destinasi, dan rekomendasi interaktif."
    ]
  },
  {
    id: 2,
    title: "Infografis: Eksplorasi Data Perpustakaan Udayana",
    category: "Data Analysis",
    role: "Data Analyst",
    image: "/projects/PERPUS1.png",
    gallery: ["/projects/PERPUS1.png", "/projects/PERPUS2.png", "/projects/PERPUS3.png", "/projects/PERPUS4.png", "/projects/PERPUS5.png", "/projects/PERPUS6.png", "/projects/PERPUS7.png", "/projects/PERPUS8.png"],
    description: "Proyek eksplorasi data yang berfokus pada analisis log kunjungan harian di Perpustakaan Universitas Udayana dari berbagai fakultas. Proyek ini bertujuan menerjemahkan ribuan baris data mentah menjadi narasi visual (infografis) interaktif yang menyingkap pola kunjungan, jam sibuk, dan preferensi literasi mahasiswa.",
    techStack: ["Data Visualization", "Exploratory Data Analysis (EDA)", "Statistics"],
    themeColor: "purple",
    highlights: [
      "Analisis Data Eksploratif (EDA): Membersihkan dan menganalisis dataset log kunjungan menggunakan metode statistika untuk menemukan tren tren tersembunyi.",
      "Storytelling Berbasis Data: Merancang konten infografis bernilai tinggi yang menyajikan temuan teknis menjadi argumen visual yang persuasif bagi audiens non-teknis.",
      "Rekomendasi Publikasi Sosial: Menghasilkan aset informasi siap publikasi untuk mendukung kampanye digital media sosial perpustakaan dalam meningkatkan minat kunjung."
    ]
  },
  {
    id: 10,
    title: "Juara 1 Nasional - Infografis Technostress",
    category: "Design & Research",
    role: "Visual Researcher",
    image: "/projects/TECHNOSTRESS1.png",
    gallery: ["/projects/TECHNOSTRESS1.png", "/projects/TECHNOSTRESS2.png", "/projects/TECHNOSTRESS3.jpeg"],
    description: "Karya infografis yang berhasil meraih predikat Juara 1 Nasional dalam kompetisi yang diselenggarakan oleh BEM Fakultas Psikologi Universitas Jayabaya. Karya ini mengkaji fenomena 'technostress'—dampak psikologis dan stres akibat paparan teknologi digital berlebih di era modern—dengan memadukan riset literatur mendalam dan desain komunikasi visual yang persuasif.",
    techStack: ["Graphic Design", "Psychological Research", "Data Storytelling", "Infographic"],
    featured: true,
    order: 3,
    themeColor: "orange",
    highlights: [
      "Riset Dampak Psikologis: Menganalisis berbagai studi literatur psikologi mengenai adiksi gadget dan stres digital untuk membangun basis teori yang kredibel.",
      "Visualisasi Data Kreatif: Menyederhanakan statistik kompleks mengenai kesehatan mental menjadi ilustrasi visual yang menggugah kesadaran publik.",
      "Solusi Aplikatif: Menyajikan panduan praktis penanganan technostress yang siap diimplementasikan dalam kehidupan sehari-hari oleh generasi digital."
    ]
  },
  {
    id: 11,
    title: "Infografis Dampak Ekonomi Nyepi",
    category: "Design & Research",
    role: "Visual Researcher",
    image: "/projects/NYEPI.png",
    description: "Sebuah proyek jurnalisme data yang mengeksplorasi sinergi antara tradisi kebudayaan Hari Raya Nyepi di Bali dengan kontribusi nyata terhadap kelestarian lingkungan dan penghematan ekonomi nasional. Infografis ini membedah kalkulasi penghematan energi listrik, penurunan emisi gas rumah kaca, dan reduksi biaya operasional negara secara komparatif.",
    techStack: ["Data Journalism", "Information Design"],
    themeColor: "orange",
    highlights: [
      "Kalkulasi Penghematan Energi: Menyajikan analisis kuantitatif mengenai efisiensi konsumsi listrik harian nasional yang bernilai hingga puluhan miliar rupiah selama Nyepi.",
      "Dampak Reduksi Emisi: Memvisualisasikan penurunan drastis polusi udara dan jejak karbon harian sebagai kontribusi ekologis nyata terhadap isu iklim global.",
      "Jurnalisme Data Budaya: Memadukan riset sosio-ekologis dengan seni komunikasi visual untuk audiens festival budaya Litfest Brawijaya."
    ]
  },
  {
    id: 12,
    title: "Infografis Kripto: Anatomi Bitcoin",
    category: "Design & Research",
    role: "Visual Researcher",
    image: "/projects/BITCOIN.png",
    description: "Proyek desain informasi edukatif yang membedah konsep dasar, arsitektur, dan cara kerja aset kripto paling berpengaruh di dunia: Bitcoin. Dibuat untuk ajang Gammafest, infografis ini berfungsi sebagai media literasi finansial digital yang membandingkan kelebihan serta kerentanan Bitcoin dengan sistem moneter konvensional.",
    techStack: ["Financial Tech", "Visual Design"],
    themeColor: "orange",
    highlights: [
      "Visualisasi Mekanika Blockchain: Menyederhanakan proses penambangan (mining), sistem desentralisasi, dan konsensus kriptografi menjadi bagan alur yang mudah dicerna.",
      "Analisis Moneter Komparatif: Membedah perbedaan fundamental antara fiat money yang dikontrol bank sentral dengan kelangkaan terprogram (hard cap 21 juta) Bitcoin.",
      "Edukasi Keuangan Modern: Menyediakan panduan visual bagi pemula untuk memahami volatilitas, keamanan dompet digital, dan peran masa depan mata uang kripto."
    ]
  },
  {
    id: 13,
    title: "Personal Web Portfolio",
    category: "Web Development",
    role: "Front-End Developer",
    description: "Situs portofolio web modern premium yang dirancang sebagai pusat representasi digital perjalanan karir, keterampilan teknis, dan portofolio proyek pribadi. Aplikasi web ini dibangun dengan komitmen tinggi pada visual premium, animasi mikro yang interaktif, serta optimasi performa dan SEO yang luar biasa.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    themeColor: "blue",
    highlights: [
      "Desain Estetis & Premium: Menerapkan tren desain modern dengan tipografi dari Google Fonts, skema warna HSL harmonis, dan transisi selembut sutra.",
      "Animasi Dinamis & Interaktif: Menggunakan GSAP dan Framer Motion untuk menghadirkan micro-interactions yang responsif dan meningkatkan kenyamanan berselancar.",
      "Performa & SEO Optimal: Memanfaatkan Next.js App Router (React 19) dan Tailwind CSS untuk memastikan waktu muat super cepat dan indeks mesin pencari yang optimal."
    ]
  },
  {
    id: 14,
    title: "#JuaraVibeCoding (Ongoing)",
    category: "Software Engineering",
    role: "Developer",
    description: "Inisiatif riset dan eksperimentasi teknologi berkelanjutan yang berfokus pada pemanfaatan Agentic AI dan perkakas pengembangan web modern dalam ekosistem Vibe Coding. Proyek ini bertujuan mendorong batas produktivitas rekayasa perangkat lunak melalui kolaborasi dinamis antara developer manusia dan asisten kecerdasan buatan.",
    techStack: ["Agentic AI", "Modern Web Tech"],
    themeColor: "purple",
    highlights: [
      "Eksplorasi Agentic AI: Menguji efisiensi pengerjaan kode, debugging otomatis, dan pembuatan sistem menggunakan model bahasa besar terbaru.",
      "Implementasi Web Modern: Menerapkan teknologi mutakhir dalam pengembangan aplikasi web untuk memastikan adaptabilitas dan performa maksimal.",
      "Pembelajaran Eksperimental: Mendokumentasikan teknik pengembangan cepat (rapid development) untuk menciptakan alur kerja coding masa depan."
    ]
  },
  {
    id: 15,
    title: "Desain Grafis Feed Instagram KKN-XXIX Desa Lebih",
    category: "Graphic Design & Branding",
    role: "Graphic Designer",
    description: "Proyek perancangan identitas visual, panduan branding (branding guidelines), dan produksi konten digital kreatif untuk akun Instagram KKN Universitas Udayana Periode XXIX di Desa Lebih, Gianyar. Proyek ini bertujuan mendokumentasikan dan mempublikasikan rangkaian program pengabdian masyarakat secara estetis, komunikatif, dan profesional guna memperluas jangkauan informasi publik.",
    techStack: ["Adobe Illustrator", "Canva", "Social Media Branding", "Copywriting"],
    themeColor: "orange",
    featured: true,
    figmaEmbed: "https://embed.figma.com/design/kQKrN4UFzNxx7m8s9MorXX/KKN.LEBIH2024?node-id=22-2&embed-host=share",
    highlights: [
      "Tatakelola Branding Terpadu: Menyusun template layout grid feed Instagram yang rapi, estetis, dan terstruktur untuk mempertahankan konsistensi visual instansi.",
      "Storytelling Visual Kegiatan: Mengolah materi dokumentasi program kerja pengabdian menjadi konten infografis dan video reels yang informatif serta menarik minat interaksi publik.",
      "Purwarupa Desain di Figma: Merancang dan menyimulasikan tata letak publikasi secara kolaboratif melalui prototype Figma sebelum dipublikasikan ke media sosial."
    ]
  },
  {
    id: 16,
    title: "Desain Grafis & Konten Feed Instagram PAKSI UDAYANA",
    category: "Graphic Design & Branding",
    role: "Kepala Bidang Jurnalistik",
    description: "Kampanye branding komprehensif dan manajemen konten visual untuk akun Instagram PAKSI UDAYANA, Unit Kegiatan Mahasiswa Fakultas Teknik Universitas Udayana yang bergerak di bidang riset keantariksaan dan dirgantara. Kampanye ini dirancang untuk memperkuat identitas organisasi, mendiseminasi informasi sains populer, serta meningkatkan minat rekrutmen mahasiswa baru.",
    techStack: ["Figma", "Adobe Premiere Pro", "Adobe Photoshop", "Social Media Branding", "Copywriting"],
    themeColor: "orange",
    featured: true,
    figmaEmbed: "",
    highlights: [
      "Grid Layout Bertema Keantariksaan: Merancang sistem template feed Instagram futuristik bernuansa kosmik yang mencerminkan visi ilmiah organisasi.",
      "Desain Merchandise & Atribut Resmi: Memproduksi desain pakaian (jaket angkatan, baju dinas) dan poster promosi cetak dengan standar estetika tinggi.",
      "Kampanye Rekrutmen Kreatif: Mengembangkan konten video profil dan grafis interaktif yang terbukti menaikkan volume pendaftaran anggota baru secara signifikan."
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
