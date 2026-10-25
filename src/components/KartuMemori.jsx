// Mengubah '2026-08-12' menjadi '12 Agustus 2026'
function formatTanggal(iso) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

// Props: memori (object: id, judul, tanggal, kategori, jenis, gambar, alt, deskripsi),
//        onHapus (function)
function KartuMemori({ memori, onHapus }) {
  return (
    <article className="kartu">
      <img className="kartu-gambar" src={memori.gambar} alt={memori.alt} />
      <div className="kartu-isi">
        <h3>{memori.judul}</h3>
        <p className="kartu-tanggal">{formatTanggal(memori.tanggal)}</p>
        <p className="kartu-label">
          <span className="badge">{memori.kategori}</span>
          {memori.jenis === 'Video' && <span className="badge badge-video">Video</span>}
        </p>
        <p className="kartu-deskripsi">{memori.deskripsi}</p>
        <button
          type="button"
          className="btn btn-hapus"
          onClick={() => onHapus(memori.id)}
          aria-label={`Hapus memori ${memori.judul}`}
        >
          Hapus
        </button>
      </div>
    </article>
  );
}

export default KartuMemori;
