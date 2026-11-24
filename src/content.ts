// Sitedeki tüm metinler burada. Bir şeyi değiştirmek istediğinde sadece bu dosyayı düzenlemen yeterli.
export type Lang = 'tr' | 'en'
export type L = { tr: string; en: string }

export const profile = {
  name: 'Zeynep Sena',
  surname: 'Şahin',
  email: 'zsena.shn@gmail.com',
  github: 'https://github.com/zsenasahin',
  linkedin: 'https://www.linkedin.com/in/zeynep-sena-%C5%9Fahin-480944259/',
  photo: '/profile.jpg',
  cv: { tr: '/Zeynep_Sena_Sahin_CV.pdf', en: '/Zeynep_Sena_Sahin_CV.pdf' } as L,
}

export const ui = {
  nav: {
    about: { tr: 'Hakkımda', en: 'About' },
    experience: { tr: 'Deneyim', en: 'Experience' },
    projects: { tr: 'Projeler', en: 'Projects' },
    skills: { tr: 'Yetkinlikler', en: 'Skills' },
    freelance: { tr: 'Freelance', en: 'Freelance' },
    contact: { tr: 'İletişim', en: 'Contact' },
  },
  hero: {
    badge: { tr: 'İş ve freelance projelere açığım', en: 'Open to roles & freelance work' },
    hello: { tr: 'Merhaba, ben', en: "Hi, I'm" },
    role: { tr: 'Full-Stack Yazılım Mühendisi', en: 'Full-Stack Software Engineer' },
    lead: {
      tr: 'Kullanıcının dokunduğu arayüzden veritabanındaki sorguya kadar; React ve .NET ile sade, sürdürülebilir ve gerçekten işe yarayan yazılımlar geliştiriyorum.',
      en: 'From the interface people touch to the query in the database — I build clean, maintainable software that actually helps, with React and .NET.',
    },
    ctaProjects: { tr: 'Projelerimi gör', en: 'See my work' },
    ctaCv: { tr: 'CV indir', en: 'Download CV' },
    scroll: { tr: 'Kaydır', en: 'Scroll' },
    ring: { tr: 'REACT · .NET · REACT NATIVE · MSSQL · ', en: 'REACT · .NET · REACT NATIVE · MSSQL · ' },
  },
  about: {
    eyebrow: { tr: 'Hakkımda', en: 'About me' },
    title: { tr: 'Kullanıcı odaklı, sürdürülebilir\nyazılımlar geliştiriyorum.', en: 'I build user-focused,\nmaintainable software.' },
    p1: {
      tr: "2026'da Konya Teknik Üniversitesi Yazılım Mühendisliği bölümünden mezun oldum. Üniversitenin son iki yılını Architecht'te, gerçek kullanıcıları olan kurumsal ERP projelerinde geçirdim: React ile ekranlar, C# ve .NET ile servisler, MSSQL'de optimize edilmiş sorgular.",
      en: "I graduated in Software Engineering from Konya Technical University in 2026. I spent my last two years of university at Architecht, working on enterprise ERP products with real users: screens in React, services in C# and .NET, and optimized queries in MSSQL.",
    },
    p2: {
      tr: "Orada kodun yanında Scrum'ın ritmini, code review kültürünü ve bir ekiple birlikte üretmeyi öğrendim. Okul dışında da merak ettiğim problemleri projeye dönüştürüyorum; görme engelliler için banknot tanıyan bir uygulamadan 81 il için rota planlayan bir gezi rehberine kadar.",
      en: "Beyond code, I learned the rhythm of Scrum, the culture of code reviews and how to build as a team. Outside of work I turn problems I'm curious about into projects — from an app that recognizes banknotes for visually impaired people to a travel guide that plans routes across all 81 provinces of Türkiye.",
    },
    facts: {
      location: { tr: 'Konum', en: 'Location' },
      locationValue: { tr: 'Kahramanmaraş, Türkiye', en: 'Kahramanmaraş, Türkiye' },
      locationNote: { tr: 'Yeni bir şehre taşınmaya açığım', en: 'Open to relocation' },
      education: { tr: 'Eğitim', en: 'Education' },
      educationValue: { tr: 'Konya Teknik Üniversitesi', en: 'Konya Technical University' },
      educationNote: { tr: 'Yazılım Mühendisliği · GANO 3.44', en: 'Software Engineering · GPA 3.44' },
      experience: { tr: 'Deneyim', en: 'Experience' },
      experienceValue: { tr: '2 yıl kurumsal', en: '2 years, enterprise' },
      experienceNote: { tr: 'ERP · Full-stack · Scrum', en: 'ERP · Full-stack · Scrum' },
    },
    interestsTitle: { tr: 'İlgi alanları', en: 'Interests' },
    interests: [
      { tr: 'Ney', en: 'Ney flute' },
      { tr: 'Piyano', en: 'Piano' },
      { tr: 'Satranç', en: 'Chess' },
      { tr: 'Gezmek', en: 'Travel' },
    ],
  },
  experience: {
    eyebrow: { tr: 'Deneyim', en: 'Experience' },
    current: { tr: 'Devam ediyor', en: 'Current' },
    title: { tr: 'İş deneyimim', en: 'Work experience' },
  },
  projects: {
    eyebrow: { tr: 'Projeler', en: 'Projects' },
    title: { tr: 'Öne çıkan projelerim', en: 'Selected projects' },
    lead: {
      tr: 'Web, mobil ve yapay zekâ alanlarında geliştirdiğim projeler. Her biri gerçek bir ihtiyaca odaklanıyor; mimariden arayüze kadar uçtan uca kendim geliştirdim.',
      en: 'Projects I have built across web, mobile and AI. Each one focuses on a real need, and I developed them end to end, from architecture to interface.',
    },
    filters: {
      all: { tr: 'Tümü', en: 'All' },
      web: { tr: 'Web', en: 'Web' },
      mobile: { tr: 'Mobil', en: 'Mobile' },
      ai: { tr: 'Yapay Zekâ', en: 'AI / ML' },
    },
    live: { tr: 'Canlı demo', en: 'Live demo' },
    code: { tr: 'Kod', en: 'Code' },
    more: { tr: 'Diğer çalışmalar', en: 'More work' },
    allOnGithub: { tr: "Tüm projeler GitHub'da", en: 'All projects on GitHub' },
  },
  skills: {
    eyebrow: { tr: 'Yetkinlikler', en: 'Skills' },
    title: { tr: 'Teknik yetkinliklerim', en: 'Technical skills' },
  },
  freelance: {
    eyebrow: { tr: 'Freelance', en: 'Freelance' },
    title: { tr: 'Projeniz için freelance destek', en: 'Freelance development for your project' },
    text: {
      tr: 'Bireyler ve işletmeler için freelance projeler geliştiriyorum. Küçük bir tanıtım sitesinden uçtan uca bir uygulamaya kadar; ihtiyacınızı dinleyip size en uygun çözümü birlikte planlıyoruz.',
      en: 'I build freelance projects for individuals and businesses. From a simple website to a full end-to-end app, I listen to what you need and we plan the right solution together.',
    },
    services: [
      {
        icon: 'monitor',
        title: { tr: 'Web sitesi & web uygulaması', en: 'Websites & web apps' },
        text: { tr: 'Tanıtım sitelerinden yönetim panellerine; hızlı, mobil uyumlu, modern arayüzler.', en: 'From landing pages to admin dashboards — fast, responsive, modern interfaces.' },
      },
      {
        icon: 'smartphone',
        title: { tr: 'Mobil uygulama', en: 'Mobile apps' },
        text: { tr: 'React Native ile tek kod tabanından hem iOS hem Android uygulaması.', en: 'iOS and Android apps from a single React Native codebase.' },
      },
      {
        icon: 'server',
        title: { tr: 'Backend & API', en: 'Backend & APIs' },
        text: { tr: '.NET ve Supabase ile güvenli API, veritabanı tasarımı ve kimlik doğrulama.', en: 'Secure APIs, database design and authentication with .NET and Supabase.' },
      },
      {
        icon: 'wrench',
        title: { tr: 'Geliştirme & bakım', en: 'Improvements & maintenance' },
        text: { tr: 'Mevcut projenize yeni özellik, hata düzeltme ve performans iyileştirmesi.', en: 'New features, bug fixes and performance work on your existing project.' },
      },
    ],
    processTitle: { tr: 'Nasıl çalışırım?', en: 'How I work' },
    steps: [
      { title: { tr: 'Tanışalım', en: "Let's talk" }, text: { tr: 'İhtiyacınızı ve hedefinizi dinler, kapsamı birlikte netleştiririz.', en: 'I listen to your needs and goals, and we define the scope together.' } },
      { title: { tr: 'Geliştirelim', en: 'Build' }, text: { tr: 'Düzenli ara teslimlerle ilerler, her adımda geri bildiriminizi alırım.', en: 'We move in regular iterations and I get your feedback at every step.' } },
      { title: { tr: 'Teslim & destek', en: 'Launch & support' }, text: { tr: 'Projenizi yayına alır, sonrasında da destek vermeye devam ederim.', en: 'I ship your project and stay around afterwards.' } },
    ],
    cta: { tr: 'Projenizi anlatın', en: 'Tell me about your project' },
    ctaNote: { tr: 'Teklif almak için kısa bir e-posta göndermeniz yeterli.', en: 'A short email is all it takes to get a quote.' },
    mailSubject: { tr: 'Freelance proje', en: 'Freelance project' },
  },
  contact: {
    eyebrow: { tr: 'İletişim', en: 'Contact' },
    title: { tr: 'Birlikte çalışalım', en: "Let's work together" },
    text: {
      tr: 'Junior ya da full-stack pozisyonlar için aktif olarak iş arıyorum; freelance projeler için de müsaitim. İş fırsatları ve proje teklifleri için bana e-posta veya LinkedIn üzerinden ulaşabilirsiniz.',
      en: "I'm actively looking for junior and full-stack roles, and I'm available for freelance projects. Feel free to reach out by email or LinkedIn about opportunities or projects.",
    },
    copy: { tr: 'Kopyala', en: 'Copy' },
    copied: { tr: 'Kopyalandı', en: 'Copied' },
    footer: { tr: 'React ve Framer Motion ile tasarlandı ve geliştirildi.', en: 'Designed and built with React and Framer Motion.' },
    top: { tr: 'Başa dön', en: 'Back to top' },
  },
  theme: { light: { tr: 'Açık temaya geç', en: 'Switch to light theme' }, dark: { tr: 'Koyu temaya geç', en: 'Switch to dark theme' } },
  menu: { tr: 'Menü', en: 'Menu' },
}

export const experience: {
  company: string
  current?: boolean
  role: L
  period: L
  note: L
  bullets: L[]
  tags: string[]
}[] = [
  {
    company: 'Freelance',
    current: true,
    role: { tr: 'Freelance Yazılım Geliştirici', en: 'Freelance Software Developer' },
    period: { tr: '2026 — Günümüz', en: '2026 — Present' },
    note: { tr: 'Bireyler ve işletmeler için projeler geliştiriyorum.', en: 'Building projects for individuals and businesses.' },
    bullets: [
      {
        tr: 'Müşterilerin ihtiyaçlarını dinleyip kapsamı netleştiriyor, web ve mobil projeleri tasarımdan yayına kadar uçtan uca geliştiriyorum.',
        en: 'I gather requirements, define the scope and deliver web and mobile projects end to end, from design to launch.',
      },
      {
        tr: 'Düzenli ara teslimler ve açık iletişimle ilerleyerek projeyi müşterinin geri bildirimine göre şekillendiriyorum.',
        en: 'I work in regular iterations with clear communication, shaping each project around client feedback.',
      },
    ],
    tags: ['React', '.NET', 'React Native', 'Supabase'],
  },
  {
    company: 'Architecht Bilişim Sistemleri',
    role: { tr: 'Yazılım Mühendisi Stajyeri', en: 'Software Engineering Intern' },
    period: { tr: 'Temmuz 2024 — 2026', en: 'Jul 2024 — 2026' },
    note: {
      tr: 'Part-time başladım; son dönemde tam zamanlı çalıştım.',
      en: 'Started part-time; worked full-time during my final semester.',
    },
    bullets: [
      {
        tr: 'BOA platformu üzerinde kurumsal ERP modülleri geliştirdim; C# ve .NET ile servis ve API katmanlarını hayata geçirdim.',
        en: 'Built enterprise ERP modules on the BOA platform, implementing service and API layers with C# and .NET.',
      },
      {
        tr: 'React ve TypeScript ile yeni ekranlar ve modüller geliştirdim; bileşen mimarisini ve state yönetimini kurdum.',
        en: 'Developed new screens and modules with React and TypeScript, designing component architecture and state management.',
      },
      {
        tr: 'MSSQL üzerinde karmaşık sorgular yazıp optimize ettim; mevcut sistemlerde refactoring ve hata düzeltmeleri yaptım.',
        en: 'Wrote and optimized complex MSSQL queries; refactored and fixed bugs in existing systems.',
      },
      {
        tr: "TFS, Azure DevOps ve Git ile versiyon kontrolünü yürüttüm; pull request ve code review döngülerinde yer aldım.",
        en: 'Managed version control with TFS, Azure DevOps and Git, taking part in pull request and code review cycles.',
      },
      {
        tr: 'İki haftalık Scrum sprintlerinde daily, planning, review ve retrospektif toplantılarına düzenli katıldım; Azure Boards üzerinden user story ve görevleri takip ettim.',
        en: 'Took part in two-week Scrum sprints (daily, planning, review, retro) and tracked user stories and tasks on Azure Boards.',
      },
    ],
    tags: ['C#', '.NET', 'React', 'TypeScript', 'MSSQL', 'BOA', 'Azure DevOps', 'Scrum'],
  },
]

export type Category = 'web' | 'mobile' | 'ai'
export type Project = {
  id: string
  title: L
  category: Category
  icon: 'map' | 'eye' | 'calendar' | 'book' | 'shield' | 'users' | 'heart' | 'scan' | 'brain' | 'coins'
  summary: L
  highlights?: L[]
  stat?: { value: string; label: L }
  tags: string[]
  live?: string
  repos?: { label: string; url: string }[]
  image?: string // ekran görüntüsü eklenince: '/projects/akilli-gezi.png'
  featured?: boolean
}

const gh = (r: string) => `https://github.com/zsenasahin/${r}`

export const projects: Project[] = [
  {
    id: 'gezi',
    featured: true,
    title: { tr: 'Akıllı Gezi Rehberi', en: 'Smart Travel Guide' },
    category: 'mobile',
    icon: 'map',
    summary: {
      tr: "Türkiye'nin 81 ili için gezilecek yerleri, etkinlikleri ve yöresel lezzetleri sunan; şehir, tarih, ulaşım ve tempoya göre saat saat kişisel gezi programı çıkaran mobil uygulama.",
      en: 'A mobile app covering sights, events and local food across all 81 provinces of Türkiye — it builds an hour-by-hour personal itinerary from your city, dates, transport and pace.',
    },
    highlights: [
      { tr: 'K-Means kümeleme ve TSP (Nearest Neighbor + 2-Opt) ile cihaz üzerinde çalışan rota motoru', en: 'On-device route engine using K-Means clustering and TSP (Nearest Neighbor + 2-Opt)' },
      { tr: 'Kapanış saatlerine ve öğle arasına duyarlı zaman çizelgesi', en: 'Timeline aware of opening hours and lunch breaks' },
      { tr: 'OpenStreetMap verisi, Supabase ve Edge Functions ile güvenli altyapı', en: 'OpenStreetMap data with a secure Supabase + Edge Functions backend' },
    ],
    stat: { value: '81', label: { tr: 'il', en: 'provinces' } },
    tags: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'OpenStreetMap'],
    live: 'https://akilli-gezi-rehberi.vercel.app',
    repos: [{ label: 'GitHub', url: gh('Akilli-gezi-rehberi') }],
  },
  {
    id: 'cuzdan',
    featured: true,
    title: { tr: 'Engelsiz Cüzdan', en: 'Accessible Wallet' },
    category: 'ai',
    icon: 'eye',
    summary: {
      tr: 'Görme engelli bireylerin Türk Lirası banknotlarını kameraya göstermesiyle tanıyıp “200 Türk Lirası” gibi sesli geri bildirim veren derin öğrenme tabanlı sistem.',
      en: 'A deep-learning system that recognizes Turkish Lira banknotes held up to the camera and announces them out loud — built for visually impaired people.',
    },
    highlights: [
      { tr: 'MobileNetV2 ile transfer learning ve OCR’ı birleştiren hibrit yaklaşım', en: 'Hybrid approach combining MobileNetV2 transfer learning with OCR' },
      { tr: '6 sınıf, yaklaşık 6.000 görüntüden oluşan veri seti', en: 'Dataset of ~6,000 images across 6 denominations' },
      { tr: 'Otomatik Türkçe seslendirme ile erişilebilir deneyim', en: 'Accessible experience with automatic Turkish text-to-speech' },
    ],
    stat: { value: '%98', label: { tr: 'doğruluk', en: 'accuracy' } },
    tags: ['Python', 'TensorFlow', 'MobileNetV2', 'OpenCV', 'EasyOCR'],
    repos: [{ label: 'GitHub', url: gh('Engelsiz-cuzdan') }],
  },
  {
    id: 'ajanda',
    featured: true,
    title: { tr: 'Dijital Ajanda', en: 'Digital Planner' },
    category: 'web',
    icon: 'calendar',
    summary: {
      tr: 'Görev, hedef ve alışkanlık takibi için geliştirdiğim full-stack web uygulaması. Arayüz React ile, REST API .NET 8 ile yazıldı.',
      en: 'A full-stack web app for tracking tasks, goals and habits — React on the front end, a .NET 8 REST API on the back end.',
    },
    highlights: [
      { tr: 'Controller – Service – Repository katmanlı mimari', en: 'Layered Controller – Service – Repository architecture' },
      { tr: 'JWT tabanlı kimlik doğrulama', en: 'JWT-based authentication' },
      { tr: 'MSSQL ile veri yönetimi', en: 'Data management with MSSQL' },
    ],
    tags: ['React', '.NET 8', 'ASP.NET Core', 'MSSQL', 'JWT'],
    repos: [
      { label: 'Frontend', url: gh('dijital-ajanda-frontend') },
      { label: 'Backend', url: gh('DijitalAjanda.Server') },
    ],
  },
  {
    id: 'kitaphane',
    featured: true,
    title: { tr: 'Kitaphane', en: 'Kitaphane' },
    category: 'mobile',
    icon: 'book',
    summary: {
      tr: 'Okurlar için sosyal kütüphane uygulaması: kitapları rafa ekle, okuma durumunu takip et, paylaşım yap, yazarları ve diğer okurları takip et.',
      en: 'A social library app for readers: shelve books, track reading status, share posts and follow authors and fellow readers.',
    },
    highlights: [
      { tr: 'Google Books ve Open Library entegrasyonu', en: 'Google Books and Open Library integration' },
      { tr: 'Supabase ile kimlik doğrulama, beğeni ve takip sistemi', en: 'Auth, likes and follows powered by Supabase' },
      { tr: 'Açık / koyu tema desteği', en: 'Light and dark theme support' },
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    repos: [{ label: 'GitHub', url: gh('Kitaphane') }],
  },
  {
    id: 'blockchain',
    title: { tr: 'Blockchain Sertifika Doğrulama', en: 'Blockchain Certificate Verification' },
    category: 'web',
    icon: 'shield',
    summary: {
      tr: 'Sertifikaları akıllı kontratla kaydeden, doğrulayan ve iptal eden sistem. KVKK gereği kişisel veriler zincire hash + salt olarak yazılır.',
      en: 'Issues, verifies and revokes certificates via a smart contract. Personal data is stored on-chain only as salted hashes for privacy compliance.',
    },
    tags: ['Solidity', 'Hardhat', 'Docker', 'Node.js'],
    repos: [{ label: 'GitHub', url: gh('blockchain-certicate') }],
  },
  {
    id: 'social',
    title: { tr: 'Sosyal Öğrenme Platformu', en: 'Social Learning Platform' },
    category: 'web',
    icon: 'users',
    summary: {
      tr: 'Gönderi, seri, etkinlik ve takip özellikleriyle insanların öğrendiklerini paylaştığı bir topluluk platformu.',
      en: 'A community platform where people share what they learn through posts, series, events and follows.',
    },
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    repos: [{ label: 'GitHub', url: gh('social-learning') }],
  },
  {
    id: 'medical',
    title: { tr: 'Medikal Takip Sistemi', en: 'Medical Tracking System' },
    category: 'web',
    icon: 'heart',
    summary: {
      tr: 'Hasta, doktor ve yönetici panelleriyle randevu, reçete ve klinik yönetimi yapılan web uygulaması.',
      en: 'A web app with patient, doctor and admin dashboards for appointments, prescriptions and clinics.',
    },
    tags: ['ASP.NET Core MVC', 'C#', 'EF Core'],
    repos: [{ label: 'GitHub', url: gh('MedicalTrackingSystem') }],
  },
  {
    id: 'bookly',
    title: { tr: 'Bookly', en: 'Bookly' },
    category: 'mobile',
    icon: 'coins',
    summary: {
      tr: 'Okumayı oyunlaştıran mobil uygulama: kütüphane, keşfet akışı ve okudukça kazanılan coin sistemi.',
      en: 'A mobile app that gamifies reading: a personal library, an explore feed and coins earned as you read.',
    },
    tags: ['React Native', 'Expo Router', 'Supabase'],
    repos: [{ label: 'GitHub', url: gh('bookly-app') }],
  },
  {
    id: 'image',
    title: { tr: 'Görüntü İşleme Uygulaması', en: 'Image Processing Desktop App' },
    category: 'ai',
    icon: 'scan',
    summary: {
      tr: 'Kontrast artırma, yol çizgisi ve göz tespiti, netleştirme ve nesne özellik çıkarımı yapan PyQt5 masaüstü uygulaması.',
      en: 'A PyQt5 desktop app for contrast enhancement, lane and eye detection, deblurring and object feature extraction.',
    },
    tags: ['Python', 'OpenCV', 'PyQt5'],
    repos: [{ label: 'GitHub', url: gh('dijitalGoruntuProjem') }],
  },
  {
    id: 'ml',
    title: { tr: 'Medikal Makine Öğrenmesi', en: 'Medical Machine Learning' },
    category: 'ai',
    icon: 'brain',
    summary: {
      tr: 'Meme kanseri teşhisi için Logistic Regression, Random Forest, SVM ve KNN karşılaştırması; MR görüntülerinden beyin tümörü tespiti yapan masaüstü uygulaması.',
      en: 'Compared Logistic Regression, Random Forest, SVM and KNN for breast cancer diagnosis; built a desktop app that detects brain tumors in MRI scans.',
    },
    tags: ['Python', 'Scikit-learn', 'OpenCV'],
  },
]

export const skills = [
  { title: { tr: 'Backend', en: 'Backend' }, icon: 'server', items: ['C#', '.NET 8', 'ASP.NET Core', 'REST API', 'Node.js', 'Entity Framework'] },
  { title: { tr: 'Frontend', en: 'Frontend' }, icon: 'layers', items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML & CSS'] },
  { title: { tr: 'Mobil', en: 'Mobile' }, icon: 'smartphone', items: ['React Native', 'Expo'] },
  { title: { tr: 'Veritabanı', en: 'Database' }, icon: 'database', items: ['MSSQL', 'PostgreSQL', 'Supabase', 'Firebase'] },
  { title: { tr: 'DevOps & Süreç', en: 'DevOps & Process' }, icon: 'git', items: ['Git', 'Azure DevOps', 'TFS', 'Docker', 'Scrum', 'Azure Boards'] },
  { title: { tr: 'Yapay Zekâ', en: 'AI / ML' }, icon: 'brain', items: ['Python', 'Scikit-learn', 'TensorFlow', 'OpenCV'] },
]

export const marquee = ['React', '.NET 8', 'C#', 'TypeScript', 'React Native', 'MSSQL', 'ASP.NET Core', 'Supabase', 'Azure DevOps', 'Docker', 'Python', 'OpenCV']
