import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import KartuFoto from './KartuFoto';

// Endpoint API publik Lorem Picsum: daftar 6 foto
// (gratis, tanpa API key, dan mendukung CORS sehingga bisa dipanggil dari browser)
const URL_API = 'https://picsum.photos/v2/list?page=1&limit=6';

function InspirasiFoto() {
  // Tiga state untuk pola loading / success / error
  const [daftarFoto, setDaftarFoto] = useState([]); // [] agar .map() aman sebelum data tiba
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi utama pengambilan data dari API
  const muatInspirasi = useCallback(async () => {
    setLoading(true); // 1. mulai: tampilkan indikator loading
    setError(null); //    sekaligus hapus pesan error lama (penting untuk "Coba Lagi")

    try {
      const response = await axios.get(URL_API, { timeout: 10000 });
      setDaftarFoto(response.data); // 2. berhasil: simpan data dari response.data
    } catch (err) {
      if (err.response) {
        // Server menjawab, tetapi dengan status error (misalnya 404 atau 500)
        setError(
          `Server menjawab dengan error (kode ${err.response.status}). Silakan coba lagi nanti.`
        );
      } else {
        // Tidak ada jawaban sama sekali: internet putus, server tidak terjangkau, atau timeout
        setError('Tidak dapat terhubung ke server. Periksa koneksi internet kamu lalu coba lagi.');
      }
    } finally {
      setLoading(false); // 3. selesai, berhasil ataupun gagal: sembunyikan loading
    }
  }, []);

  // Ambil data satu kali saat komponen pertama kali tampil
  useEffect(() => {
    muatInspirasi();
  }, [muatInspirasi]);

  return (
    <section className="inspirasi" aria-labelledby="judul-inspirasi">
      <h2 id="judul-inspirasi" className="judul-bagian">
        Inspirasi Foto
      </h2>
      <p className="inspirasi-deskripsi">
        Foto pilihan dari Lorem Picsum sebagai ide momen yang bisa kamu abadikan.
      </p>

      {/* Kondisi 1: LOADING */}
      {loading && (
        <div className="status status-loading" role="status">
          <span className="spinner" aria-hidden="true"></span>
          Memuat inspirasi foto...
        </div>
      )}

      {/* Kondisi 2: ERROR (tombol Coba Lagi hanya muncul di sini) */}
      {!loading && error && (
        <div className="status status-error" role="alert">
          <p>{error}</p>
          <button type="button" className="btn btn-coba-lagi" onClick={muatInspirasi}>
            Coba Lagi
          </button>
        </div>
      )}

      {/* Kondisi 3: SUCCESS -> render list dengan .map() dan key unik */}
      {!loading && !error && daftarFoto.length > 0 && (
        <div className="daftar">
          {daftarFoto.map((foto) => (
            <KartuFoto key={foto.id} foto={foto} />
          ))}
        </div>
      )}

      {!loading && !error && daftarFoto.length === 0 && (
        <p className="inspirasi-deskripsi">Belum ada data foto.</p>
      )}
    </section>
  );
}

export default InspirasiFoto;
