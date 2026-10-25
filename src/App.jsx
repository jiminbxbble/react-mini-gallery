import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RingkasanMemori from './components/RingkasanMemori';
import FormTambahMemori from './components/FormTambahMemori';
import DaftarMemori from './components/DaftarMemori';
import Footer from './components/Footer';

// Pilihan kategori untuk form (dikirim ke FormTambahMemori lewat props)
const KATEGORI = ['Liburan', 'Keluarga', 'Momen Spesial', 'Lainnya'];

// Entitas utama aplikasi ini: "Memori" (foto atau video singkat)
// Data awal (dummy) sebelum nanti disambung ke backend/API di Pekan 11
const memoriAwal = [
  {
    id: 1,
    judul: 'Liburan ke Pantai',
    tanggal: '2026-08-12',
    kategori: 'Liburan',
    jenis: 'Foto',
    gambar: '/images/pantai.jpg',
    alt: 'Foto liburan keluarga di pantai',
    deskripsi: 'Momen liburan bersama keluarga di pantai, menikmati suasana sore dan deburan ombak.',
  },
  {
    id: 2,
    judul: 'Hari Wisuda',
    tanggal: '2026-09-03',
    kategori: 'Momen Spesial',
    jenis: 'Foto',
    gambar: '/images/pantai2.jpg',
    alt: 'Foto wisuda bersama teman kuliah',
    deskripsi: 'Foto bersama teman-teman kuliah di hari wisuda. Akhirnya semua perjuangan terbayar.',
  },
  {
    id: 3,
    judul: 'Ulang Tahun Adik',
    tanggal: '2026-09-20',
    kategori: 'Keluarga',
    jenis: 'Video',
    gambar: '/images/pantai3.jpg',
    alt: 'Video singkat pesta ulang tahun adik',
    deskripsi: 'Video singkat saat adik meniup lilin di pesta ulang tahunnya bersama keluarga.',
  },
];

function App() {
  // State utama: daftar memori disimpan sebagai array di sini
  const [daftarMemori, setDaftarMemori] = useState(memoriAwal);

  // Dipanggil oleh FormTambahMemori saat tombol "Tambah" ditekan
  const tambahMemori = (memoriBaru) => {
    const memori = {
      ...memoriBaru,
      id: Date.now(), // id unik, dipakai sebagai key
      gambar: '/images/pantai.jpg', // sementara pakai gambar contoh (belum ada upload)
      alt: `Gambar contoh untuk memori ${memoriBaru.judul}`,
    };
    setDaftarMemori((sebelumnya) => [memori, ...sebelumnya]);
  };

  // Dipanggil oleh KartuMemori saat tombol "Hapus" ditekan
  const hapusMemori = (id) => {
    setDaftarMemori((sebelumnya) => sebelumnya.filter((m) => m.id !== id));
  };

  // Nilai turunan dari state (tidak perlu state sendiri)
  const jumlahVideo = daftarMemori.filter((m) => m.jenis === 'Video').length;
  const jumlahFoto = daftarMemori.length - jumlahVideo;

  return (
    <div className="app">
      <Header
        judul="Mini Gallery"
        subjudul="Simpan dan nikmati kembali memori berharga kamu"
      />

      <main className="konten">
        <RingkasanMemori
          total={daftarMemori.length}
          jumlahFoto={jumlahFoto}
          jumlahVideo={jumlahVideo}
        />

        <FormTambahMemori daftarKategori={KATEGORI} onTambah={tambahMemori} />

        <h2 className="judul-bagian">Daftar Memori</h2>
        <DaftarMemori daftar={daftarMemori} onHapus={hapusMemori} />
      </main>

      <Footer nama="Mini Gallery" tahun={new Date().getFullYear()} />
    </div>
  );
}

export default App;
