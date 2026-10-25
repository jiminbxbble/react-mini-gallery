import { useState } from 'react';

// Props: daftarKategori (array of string), onTambah (function)
function FormTambahMemori({ daftarKategori, onTambah }) {
  // Controlled component: nilai tiap input disimpan di state
  const [judul, setJudul] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [kategori, setKategori] = useState('');
  const [jenis, setJenis] = useState('Foto');
  const [deskripsi, setDeskripsi] = useState('');
  const [pesanError, setPesanError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // cegah halaman reload

    // Validasi sederhana: field wajib tidak boleh kosong
    if (judul.trim() === '' || tanggal === '' || kategori === '' || deskripsi.trim() === '') {
      setPesanError('Judul, tanggal, kategori, dan deskripsi wajib diisi.');
      return;
    }

    onTambah({
      judul: judul.trim(),
      tanggal,
      kategori,
      jenis,
      deskripsi: deskripsi.trim(),
    });

    // Kosongkan form setelah berhasil
    setJudul('');
    setTanggal('');
    setKategori('');
    setJenis('Foto');
    setDeskripsi('');
    setPesanError('');
  };

  return (
    <form className="form-tambah" onSubmit={handleSubmit} noValidate>
      <h2>Tambah Memori Baru</h2>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="judul">Judul Memori</label>
          <input
            id="judul"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Contoh: Makan Malam Keluarga"
          />
        </div>

        <div className="form-field">
          <label htmlFor="tanggal">Tanggal</label>
          <input
            id="tanggal"
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="kategori">Kategori</label>
          <select
            id="kategori"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="">-- Pilih kategori --</option>
            {daftarKategori.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="jenis">Jenis</label>
          <select id="jenis" value={jenis} onChange={(e) => setJenis(e.target.value)}>
            <option value="Foto">Foto</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="form-field form-field-penuh">
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea
            id="deskripsi"
            rows="3"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Ceritakan momen ini..."
          />
        </div>
      </div>

      {pesanError && (
        <p className="pesan-error" role="alert">
          {pesanError}
        </p>
      )}

      <button type="submit" className="btn btn-tambah">
        Tambah
      </button>
    </form>
  );
}

export default FormTambahMemori;
