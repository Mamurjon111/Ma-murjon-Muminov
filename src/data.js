/* ============================================================
   SIZNING MA'LUMOTLARINGIZ
   ------------------------------------------------------------
   Saytdagi BARCHA matn shu yerda. O'zgartirish uchun faqat shu
   faylni tahrirlang — boshqa fayllarga tegmasangiz ham bo'ladi.
   Har bir bo'lim izohlangan. Tirnoqlar (' ') ichidagi matnni
   o'zingiznikiga almashtiring.
   ============================================================ */

// ---------- 1. ASOSIY MA'LUMOT (Bosh sahifa / Hero) ----------
export const profile = {
  name: "Ma'murjon Muminov",
  // Lavozim — bosh sahifada aylanib turadi (bir nechta yozsangiz, almashib turadi)
  roles: ['Frontend dasturchi', 'React mutaxassisi', 'UI muhandisi'],
  // Bosh sahifadagi qisqa tanishtiruv
  tagline:
    'Men zamonaviy, tez va chiroyli veb-interfeyslar yarataman. React va frontend texnologiyalari bilan foydalanuvchiga yoqadigan mahsulotlar quraman.',
  // Joylashuv
  location: "O'zbekiston, Toshkent",
  // Holat belgisi (masalan: ish qidiryapman / band)
  availability: 'Yangi loyihalar uchun ochiqman',
  // Profil rasmi: rasmni public/ papkasiga qo'ying va shu yerga yo'lini yozing
  // Masalan: '/avatar.jpg'. Bo'sh qoldirsangiz, bosh harf ko'rinadi.
  avatar: '',
}

// ---------- 2. ALOQA / IJTIMOIY TARMOQLAR ----------
// Kerakmasini o'chiring, url larni o'zingiznikiga almashtiring.
export const contact = {
  email: 'mmominov303@gmail.com',
  phone: '+998 93 205 48 11', // bo'sh qoldirsangiz ko'rinmaydi
  socials: [
    { name: 'GitHub', url: 'https://github.com/Mamurjon111', icon: 'github' },
    { name: 'Telegram', url: 'https://t.me/mominov_me', icon: 'telegram' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/username', icon: 'instagram' },
  ],
}

// ---------- 3. MEN HAQIMDA ----------
export const about = {
  // Bir nechta paragraf yozishingiz mumkin
  paragraphs: [
    "Salom! Men Ma'murjon — veb-saytlar va ilovalar uchun foydalanuvchi interfeyslarini yaratuvchi frontend dasturchiman. Kodni nafaqat ishlashi, balki chiroyli va tushunarli bo'lishini ham muhim deb bilaman.",
    "So'nggi yillarda React ekotizimida ishlab kelaman: komponentlar, holatni boshqarish, animatsiyalar va responsiv dizayn. Har bir loyihada o'rganishni va o'sishni maqsad qilaman.",
  ],
  // Tezkor faktlar (statistikalar) — istalgancha o'zgartiring
  stats: [
    { value: '3+', label: "yillik tajriba" },
    { value: '20+', label: "tugatilgan loyiha" },
    { value: '10+', label: "mamnun mijoz" },
  ],
}

// ---------- 4. KO'NIKMALAR ----------
// Kategoriyalarga bo'lingan. Istalgan texnologiyani qo'shing/o'chiring.
export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Vositalar va boshqalar',
    items: ['Vite', 'Git', 'Figma', 'REST API', 'Framer Motion', 'Redux'],
  },
]

// ---------- 5. LOYIHALAR ----------
// Har bir loyiha — bitta obyekt. Rasm uchun: public/ ga qo'ying, '/rasm.jpg' yozing.
// Rasm bo'lmasa, chiroyli gradient ko'rinadi.
export const projects = [
  {
    title: 'Loyiha nomi 1',
    description:
      "Bu loyiha haqida qisqacha. Nima qildingiz, qanday muammoni hal qildingiz va natija qanday bo'ldi.",
    tags: ['React', 'Vite', 'Tailwind'],
    image: '', // masalan '/projects/loyiha1.jpg'
    liveUrl: '', // ishlab turgan sayt manzili (bo'sh = tugma ko'rinmaydi)
    codeUrl: 'https://github.com/username/loyiha1',
    featured: true, // true = kattaroq ko'rinadi
  },
  {
    title: 'Loyiha nomi 2',
    description:
      "Ikkinchi loyiha tavsifi. O'zingiz qilgan ishlarni shu yerga yozing.",
    tags: ['JavaScript', 'API'],
    image: '',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/username/loyiha2',
    featured: false,
  },
  {
    title: 'Loyiha nomi 3',
    description:
      "Uchinchi loyiha tavsifi. Texnologiyalar va o'ziga xosligini yozing.",
    tags: ['React', 'TypeScript'],
    image: '',
    liveUrl: '',
    codeUrl: 'https://github.com/username/loyiha3',
    featured: false,
  },
]

// ---------- 6. TAJRIBA / ISH JOYLARI (vaqt chizig'i) ----------
// Eng yangisi yuqorida bo'lsin.
export const experience = [
  {
    role: 'Frontend dasturchi',
    company: 'Kompaniya nomi',
    period: '2023 — hozir',
    description:
      "Bu yerda nima qilganingizni yozing: qaysi loyihalarda ishladingiz, qanday natijalarga erishildi.",
  },
  {
    role: 'Junior dasturchi',
    company: 'Oldingi kompaniya',
    period: '2021 — 2023',
    description:
      "Oldingi ish joyingizdagi vazifalar va yutuqlar.",
  },
]

// ---------- 7. TA'LIM VA SERTIFIKATLAR ----------
export const education = [
  {
    title: "Bakalavr — Axborot texnologiyalari",
    place: 'Universitet nomi',
    period: '2019 — 2023',
  },
  {
    title: 'React Frontend Developer (sertifikat)',
    place: "O'quv markazi / Onlayn platforma",
    period: '2022',
  },
]

// ---------- 8. BLOG / MAQOLALAR ----------
// To'liq maqola matni shu yerda. 'slug' — manzil uchun (faqat lotincha-raqam-chiziqcha).
export const posts = [
  {
    slug: 'react-da-toza-kod',
    title: "React'da toza kod yozish: 5 ta amaliy maslahat",
    date: '2026-05-12',
    readTime: '5 daqiqa',
    excerpt:
      "Komponentlarni qanday tartibli saqlash, holatni boshqarish va qayta ishlatiluvchi kod yozish bo'yicha amaliy maslahatlar.",
    tags: ['React', 'Toza kod'],
    // Maqola tanasi — oddiy paragraflar ro'yxati (xohlasangiz HTML ham yozasiz)
    body: [
      "Bu maqola namunasi. O'z maqolangizni shu yerga yozing.",
      "Har bir paragraf alohida qator bo'lib, vergul bilan ajraladi.",
      "Maqolalarni o'chirish yoki qo'shish uchun shu massivni tahrirlang.",
    ],
  },
  {
    slug: 'frontend-yangi-boshlovchilar',
    title: "Frontend'ni noldan o'rganish yo'l xaritasi",
    date: '2026-03-28',
    readTime: '7 daqiqa',
    excerpt:
      "Yangi boshlovchilar uchun frontend dasturlashni qayerdan boshlash kerakligi haqida qisqa qo'llanma.",
    tags: ['Frontend', "O'rganish"],
    body: [
      "Ikkinchi maqola namunasi.",
      "HTML, CSS va JavaScript — poydevor. Keyin React'ga o'ting.",
    ],
  },
]

// Sayt nomi (footer va h.k. uchun) — odatda ismingizdan olinadi
export const siteName = profile.name
