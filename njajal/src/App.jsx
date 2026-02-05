import { useState } from 'react'
//import { use, useState } from "react";
import "./index.css";

function App() {
  const [murid, setMurid] = useState([
    { nama: "Rei", nisn: "00", kelas: "XI PPLG 2" },
    { nama: "Iqbl", nisn: "22", kelas: "XI PPLG 2" },
    { nama: "Ibm", nisn: "03", kelas: "XI PPLG 3" },
  ]);
  return (
    <>
      <Header />
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
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="header">
        <h1>Data Siswa</h1>
        <button className="btn-tambah">+ Tambah</button>
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
        <span>Kelas</span>
        {props.kelas}
      </p>
      <button className="btn-edit">Edit</button>
      <button className="btn-hapus">Hapus</button>
    </div>
  );
}

export default App;
