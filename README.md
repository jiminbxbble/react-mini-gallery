# Mini Gallery - Frontend (React)

## Deskripsi Proyek
Mini Gallery adalah website bertema hiburan yang memungkinkan pengguna menyimpan dan menikmati kembali memori berharga mereka dalam bentuk foto dan video singkat, layaknya galeri pribadi yang bisa diakses kapan saja.

Repository ini adalah **kerangka frontend (React + Vite)** dari aplikasi fullstack Mini Gallery. Data saat ini masih dummy di dalam state; pada Pekan 11 frontend ini akan disambungkan ke backend/API.

## Topik & Entitas Data
- **Topik aplikasi:** Galeri memori (foto dan video singkat)
- **Entitas utama:** `Memori`

| Atribut | Tipe | Keterangan |
|---------|------|------------|
| `id` | number | ID unik (dipakai sebagai `key`) |
| `judul` | string | Judul memori |
| `tanggal` | string | Tanggal kejadian (format `YYYY-MM-DD`) |
| `kategori` | string | Liburan, Keluarga, Momen Spesial, Lainnya |
| `jenis` | string | `Foto` atau `Video` |
| `gambar` | string | Lokasi gambar (`/images/...`) |
| `alt` | string | Teks alternatif gambar |
| `deskripsi` | string | Cerita singkat tentang memori |

## Teknologi
React + Vite (JavaScript), CSS biasa.

## Struktur Component (`src/components/`)
| Component | Props | Fungsi |
|-----------|-------|--------|
| `Header` | `judul`, `subjudul` | Judul dan tagline aplikasi |
| `RingkasanMemori` | `total`, `jumlahFoto`, `jumlahVideo` | Ringkasan jumlah data |
| `FormTambahMemori` | `daftarKategori`, `onTambah` | Form input (controlled component) + tombol Tambah |
| `DaftarMemori` | `daftar`, `onHapus` | Render list dengan `.map()`; menampilkan "Belum ada data Memori" jika kosong |
| `KartuMemori` | `memori`, `onHapus` | Kartu untuk satu memori |
| `Footer` | `nama`, `tahun` | Footer halaman |

## Fitur
- State daftar memori (array) disimpan di `App.jsx` dengan `useState`
- Render list dengan `.map()` dan `key` unik
- Form input controlled component + validasi field kosong
- Conditional rendering: pesan "Belum ada data Memori" saat daftar kosong, badge "Video" hanya untuk memori berjenis video, pesan error form
- Hapus memori dari daftar

## Cara Menjalankan
```bash
npm install
npm run dev
```
Buka http://localhost:5173

## Screenshot

| Tahapan | Screenshot |
|---------|------------|
| `npm run dev` berjalan di localhost:5173 (tampilan awal setelah instalasi) | ![npm run dev](docs/screenshots/01-npm-run-dev.png) |
| Tampilan awal aplikasi | ![Tampilan awal](docs/screenshots/02-tampilan-awal.png) |
| Validasi form kosong | ![Form error](docs/screenshots/03-form-error.png) |
| Setelah menambah memori | ![Setelah tambah](docs/screenshots/04-setelah-tambah.png) |
| Daftar kosong ("Belum ada data Memori") | ![Daftar kosong](docs/screenshots/05-daftar-kosong.png) |
| Tampilan mobile | ![Mobile](docs/screenshots/06-mobile.png) |

## Rencana Pengembangan
- Pekan 11: menyambungkan frontend ke backend/API
- Pekan 14: aplikasi fullstack lengkap
