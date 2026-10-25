import KartuMemori from './KartuMemori';

// Props: daftar (array of memori), onHapus (function)
function DaftarMemori({ daftar, onHapus }) {
  // Conditional rendering: tampilkan pesan jika daftar masih kosong
  if (daftar.length === 0) {
    return (
      <div className="kosong">
        <p>Belum ada data Memori</p>
        <p className="kosong-petunjuk">Tambahkan memori pertama kamu lewat form di atas.</p>
      </div>
    );
  }

  // Render list dengan .map(), key unik = id tiap memori
  return (
    <section className="daftar" aria-label="Daftar memori">
      {daftar.map((memori) => (
        <KartuMemori key={memori.id} memori={memori} onHapus={onHapus} />
      ))}
    </section>
  );
}

export default DaftarMemori;
