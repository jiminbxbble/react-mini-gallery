// Props: total (number), jumlahFoto (number), jumlahVideo (number)
function RingkasanMemori({ total, jumlahFoto, jumlahVideo }) {
  return (
    <section className="ringkasan" aria-label="Ringkasan memori">
      <div className="ringkasan-item">
        <strong>{total}</strong>
        <span>Total Memori</span>
      </div>
      <div className="ringkasan-item">
        <strong>{jumlahFoto}</strong>
        <span>Foto</span>
      </div>
      <div className="ringkasan-item">
        <strong>{jumlahVideo}</strong>
        <span>Video Singkat</span>
      </div>
    </section>
  );
}

export default RingkasanMemori;
