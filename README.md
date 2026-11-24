# Zeynep Sena Şahin — Kişisel Website

React + TypeScript + Vite, animasyonlar için Framer Motion, yumuşak kaydırma için Lenis.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ klasörüne üretim çıktısı
```

## İçeriği düzenleme

Tüm metinler (TR/EN), projeler, yetkinlikler ve linkler tek dosyada: `src/content.ts`.

- **Profil fotoğrafı:** `public/profile.jpg`
- **CV:** `public/Zeynep_Sena_Sahin_CV.pdf` (İngilizce CV eklersen `content.ts` içindeki `cv.en` yolunu değiştir)
- **Proje ekran görüntüsü:** dosyayı `public/projects/` içine koy, ilgili projeye `image: '/projects/dosya.png'` ekle
- **Renkler:** `src/index.css` en üstteki `:root` (açık tema) ve `[data-theme='dark']` (koyu tema)

## Yayınlama (Vercel)

Site Vercel üzerinde yayında. `main` dalına her `git push` yapıldığında Vercel siteyi otomatik olarak yeniden derleyip yayınlar.

```bash
git add .
git commit -m "Güncelleme"
git push
```

Kendi alan adı bağlamak için: Vercel → proje → Settings → Domains.
