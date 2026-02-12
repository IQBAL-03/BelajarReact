import { useState } from "react";
import "./index.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [murid, setMurid] = useState([
    { nama: "Rei", nisn: "00", kelas: "XI PPLG 2" },
    { nama: "Iqbl", nisn: "22", kelas: "XI PPLG 2" },
    { nama: "Ibm", nisn: "03", kelas: "XI PPLG 3" },
  ]);
  const [form, setForm] = useState({
    nama: "",
    nisn: "",
    kelas: "",
  });

  console.log(form);

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
              onChange={(x) => setForm({ ...form, nama: x.target.value })}
            />
            {/*
              1. onChange={}
              2. onChange={()=>setForm({})}
              3. onChange={(x)=>setForm({...form, nama:x.target.value})}*/}
            <input
              type="text"
              name="nisn"
              placeholder="Masukkan NISN......"
              onChange={(x) => setForm({ ...form, nisn: x.target.value })}
            />
            <select
              name="kelas"
              onChange={(x) => setForm({ ...form, kelas: x.target.value })}
            >
              <option value="">Pilih Kelas</option>
              <option value="XI PPLG 1">XI PPLG 1</option>
              <option value="XI PPLG 2">XI PPLG 2</option>
              <option value="XI PPLG 3">XI PPLG 3</option>
            </select>
          </form>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => setShowModal(false)}
          >
            Batal
          </button>
          <button type="submit" className="btn-simpan">
            Simpan
          </button>
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
        <button className="btn-tambah" onClick={onTambahClick}>
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
        <span>Kelas: </span>
        {props.kelas}
      </p>
      <button className="btn-edit">Edit</button>
      <button className="btn-hapus">Hapus</button>
    </div>
  );
}

export default App;
