import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";
import api from "../api/axios";
import Navbar from "../components/Navbar";

interface Biodata {
  id: number;
  nama: string;
  email: string;
  posisi_dilamar: string;
}

export default function AdminDashboard() {
  const [data, setData] = useState<Biodata[]>([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await api.get("/admin/biodata");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    const ok = confirm("Yakin ingin menghapus data pendaftar ini?");
    if (!ok) return;

    try {
      await api.delete(`/admin/biodata/${id}`);
      alert("Data berhasil dihapus");
      fetchData();
    } catch {
      alert("Gagal menghapus data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Nama</th>
                <th className="p-3">Email</th>
                <th className="p-3">Posisi</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {data.map((d) => (
                <tr key={d.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{d.nama}</td>
                  <td className="p-3">{d.email}</td>
                  <td className="p-3">{d.posisi_dilamar}</td>

                  <td className="p-3 text-center">
                    <div className="flex justify-center gap-3">
                      {/* DETAIL */}
                      <button
                        onClick={() => navigate(`/admin/biodata/${d.id}`)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Lihat detail"
                      >
                        LIHAT
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => handleDelete(d.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Hapus"
                      >
                        HAPUS
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {data.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-500">
                    Tidak ada data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
