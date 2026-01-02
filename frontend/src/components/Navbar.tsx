import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    if (confirm("Yakin ingin logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/");
    }
  };

  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-gray-800">EDI Recruitment</h1>

      <button
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
      >
        Logout
      </button>
    </nav>
  );
}
