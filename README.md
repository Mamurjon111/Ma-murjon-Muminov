# Ma'murjon Muminov — Portfolio sayti

Shaxsiy portfolio va blog sayti. **React + Vite** asosida qurilgan, to'liq o'zbek tilida, qorong'i (dark) zamonaviy dizayn.

## Boshlash

```bash
# 1. Kutubxonalarni o'rnatish (faqat bir marta)
npm install

# 2. Saytni ishga tushirish (tahrirlash uchun)
npm run dev
# Brauzerda ochiladi: http://localhost:5173

# 3. Saytni "tayyor" holatga yig'ish (joylashtirishdan oldin)
npm run build
# Natija "dist/" papkasida bo'ladi

# 4. Yig'ilgan saytni tekshirish
npm run preview
```

## ✏️ Ma'lumotlaringizni qanday o'zgartirasiz?

**Eng muhim fayl bitta:** [`src/data.js`](src/data.js)

Saytdagi BARCHA matn shu yerda. Boshqa fayllarga tegmasangiz ham bo'ladi.
Fayl ichida har bir bo'lim o'zbekcha izohlangan:

| Bo'lim | Nimani o'zgartirasiz |
|--------|----------------------|
| `profile` | Ism, lavozim(lar), qisqa tanishtiruv, joylashuv, holat |
| `contact` | Email, telefon, ijtimoiy tarmoqlar (GitHub, Telegram, ...) |
| `about` | "Men haqimda" matni va statistikalar (3+ yil, 20+ loyiha ...) |
| `skills` | Ko'nikmalar (texnologiyalar) — kategoriyalarga bo'lingan |
| `projects` | Loyihalar — nom, tavsif, teglar, havolalar, rasm |
| `experience` | Ish tajribasi (vaqt chizig'i) |
| `education` | Ta'lim va sertifikatlar |
| `posts` | Blog maqolalari (to'liq matn bilan) |

### Rasm qo'shish
1. Rasmni `public/` papkasiga tashlang (masalan `public/avatar.jpg`).
2. `data.js` da yo'lini yozing: `avatar: '/avatar.jpg'`.
   - Loyiha rasmi uchun: `image: '/projects/loyiha1.jpg'`.
3. Rasm bo'lmasa — sayt o'zi chiroyli gradient yoki bosh harf ko'rsatadi.

### Ijtimoiy tarmoqni o'chirish / qo'shish
`data.js` dagi `contact.socials` ro'yxatidan kerakmasini o'chiring.
Mavjud ikonkalar: `github`, `telegram`, `linkedin`, `instagram`.

## 📁 Tuzilma

```
portfolio/
├── public/              # Rasmlar, favicon (statik fayllar)
├── src/
│   ├── data.js          # ⭐ SIZNING MA'LUMOTLARINGIZ — shu yerni tahrirlang
│   ├── index.css        # Dizayn tizimi (ranglar, shriftlar) — kerak bo'lsa
│   ├── App.jsx          # Asosiy router
│   ├── components/      # Navbar, Footer, ikonkalar, animatsiya yordamchisi
│   ├── sections/        # Bo'limlar: Hero, About, Skills, Projects, ...
│   └── pages/           # Sahifalar: Home, BlogPost, NotFound
└── index.html
```

## 🎨 Dizayn

- **Uslub:** Motion-Driven + Dark Mode (OLED)
- **Ranglar:** Emerald (#34D399) + ko'k urg'u, chuqur qora fon
- **Shriftlar:** Space Grotesk (sarlavha), Inter (matn), JetBrains Mono (teglar)

Ranglarni o'zgartirmoqchi bo'lsangiz: `src/index.css` faylining yuqorisidagi `:root` ichidagi `--accent` qiymatini almashtiring.

## 🚀 Joylashtirish (Internetga chiqarish)

`npm run build` dan keyin `dist/` papkasini istalgan statik hosting'ga yuklang:
**Vercel**, **Netlify** yoki **GitHub Pages**. Eng oson yo'l — loyihani GitHub'ga
qo'yib, Vercel'ga ulash (avtomatik build qiladi).
