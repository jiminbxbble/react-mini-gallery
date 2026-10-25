// Props: nama (string), tahun (number)
function Footer({ nama, tahun }) {
  return (
    <footer className="footer">
      <small>
        &copy; {tahun} {nama}. Dibuat untuk menyimpan memori berharga kamu.
      </small>
    </footer>
  );
}

export default Footer;
