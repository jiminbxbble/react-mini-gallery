// Props: foto (object dari API Lorem Picsum: id, author, width, height, url, download_url)
function KartuFoto({ foto }) {
  return (
    <article className="kartu">
      <img
        className="kartu-gambar"
        src={`https://picsum.photos/id/${foto.id}/400/300`}
        alt={`Foto karya ${foto.author}`}
        loading="lazy"
      />
      <div className="kartu-isi">
        <h3>Foto oleh {foto.author}</h3>
        <p className="kartu-tanggal">
          Ukuran asli {foto.width} x {foto.height} px
        </p>
        <a className="link-sumber" href={foto.url} target="_blank" rel="noreferrer">
          Lihat sumber foto
        </a>
      </div>
    </article>
  );
}

export default KartuFoto;
