import { useState } from "react";
import "./index.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const murid = [
    { nama: "Rei", nisn: "00", kelas: "XI PPLG 2" },
    { nama: "Iqbl", nisn: "22", kelas: "XI PPLG 2" },
    { nama: "Ibm", nisn: "03", kelas: "XI PPLG 3" },
  ];
  return (
    <>
      <Header onTambahClick={() => setShowModal(true)} />
      <div className="card">
        {murid.map((murid, idx) => (
          <Biodata
            key={idx}
            nama={murid.nama}
            nisn={murid.nisn}
            kelas={murid.kelas}
          />
        ))}
      </div>

      {showModal && (
        <div className="form">
          <h2>Form Tambah</h2>
          <form>
            <input
              type="text"
              name="nama"
              placeholder="Masukkan Nama Siswa....."
            ></input>
            <input
              type="text"
              name="nisn"
              placeholder="Masukkan NISN......"
            ></input>
            <select>
              <option value="XI PPLG 1">XI PPLG 1</option>
              <option value="XI PPLG 2">XI PPLG 2</option>
              <option value="XI PPLG 3">XI PPLG 3</option>
            </select>
          </form>
          <button className="btn-simpan">Simpan</button>
        </div>
      )}
    </>
  );
}

function Header({ onTambahClick }) {
  return (
    <header>
      <div className="header">
        <h1>Data Siswa</h1>
        <button onClick={onTambahClick} className="btn-tambah">
          + Tambah
        </button>
      </div>
    </header>
  );
}

function Biodata(props) {
  return (
    <div className="card-container">
      <h3>{props.nama}</h3>
      <p>
        <span>NISN: </span>
        {props.nisn}
      </p>
      <p>
        <span>KELAS: </span>
        {props.kelas}
      </p>
      <button className="btn-edit">Edit</button>
      <button className="btn-hapus">Hapus</button>
    </div>
  );
}

export default App;
