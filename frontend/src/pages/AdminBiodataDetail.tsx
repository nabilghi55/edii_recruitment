import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";

export default function AdminBiodataDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchDetail = async () => {
    try {
      const res = await api.get(`/admin/biodata/${id}`);
      setData(res.data);
    } catch {
      alert("Data tidak ditemukan");
      navigate("/admin");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Yakin ingin menghapus data pendaftar ini?")) return;

    await api.delete(`/admin/biodata/${id}`);
    alert("Data berhasil dihapus");
    navigate("/admin");
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <button
          onClick={() => navigate("/admin")}
          className="mb-4 text-sm text-blue-600 hover:underline"
        >
          ← Kembali ke Admin Dashboard
        </button>

        <div className="bg-white rounded-2xl shadow p-8">
          <h1 className="text-2xl font-bold mb-6">Detail Pendaftar</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <Item label="Nama Lengkap" value={data.nama} />
            <Item label="Email" value={data.email} />
            <Item label="Posisi Dilamar" value={data.posisi_dilamar} />
            <Item label="No KTP" value={data.no_ktp} />
            <Item label="Tempat Lahir" value={data.tempat_lahir} />
            <Item label="Tanggal Lahir" value={data.tanggal_lahir} />
            <Item label="Jenis Kelamin" value={data.jenis_kelamin} />
            <Item label="Agama" value={data.agama} />
            <Item label="Golongan Darah" value={data.golongan_darah} />
            <Item label="Status Pernikahan" value={data.status} />
            <Item label="No Telepon" value={data.no_telp} />
            <Item label="Kontak Darurat" value={data.kontak_darurat} />
            <Item label="Gaji Diharapkan" value={data.gaji_diharapkan} />
            <Item
              label="Bersedia Ditempatkan"
              value={data.bersedia_ditempatkan ? "Ya" : "Tidak"}
            />
          </div>

          <Section title="Alamat KTP" value={data.alamat_ktp} />
          <Section title="Alamat Tinggal" value={data.alamat_tinggal} />
          <Section title="Skill" value={data.skill} />

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
            >
              Hapus Pendaftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== Helper Components ===== */

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium">{value || "-"}</p>
    </div>
  );
}

function Section({ title, value }: { title: string; value: string }) {
  return (
    <div className="mt-4">
      <p className="font-semibold">{title}</p>
      <p className="text-gray-700 whitespace-pre-line">{value || "-"}</p>
    </div>
  );
}
