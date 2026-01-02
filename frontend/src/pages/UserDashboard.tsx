import { useEffect, useState } from "react";
import api from "../api/axios";
import BiodataForm from "./BiodataForm";
import BiodataView from "./BiodataView";
import Navbar from "../components/Navbar";

export default function UserDashboard() {
  const [loading, setLoading] = useState(true);
  const [biodata, setBiodata] = useState<any>(null);
  const [isEdit, setIsEdit] = useState(false);

  const fetchBiodata = async () => {
    try {
      const res = await api.get("/biodata/me");
      setBiodata(res.data);
    } catch {
      setBiodata(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBiodata();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">User Dashboard</h1>

        {!biodata && <BiodataForm onSuccess={fetchBiodata} />}

        {biodata && !isEdit && (
          <BiodataView biodata={biodata} onEdit={() => setIsEdit(true)} />
        )}

        {biodata && isEdit && (
          <BiodataForm
            initialData={biodata}
            isEdit
            onSuccess={() => {
              setIsEdit(false);
              fetchBiodata();
            }}
          />
        )}
      </div>
    </div>
  );
}
