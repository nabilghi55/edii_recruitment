import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register";
import AdminBiodataDetail from "./pages/AdminBiodataDetail";

export default function App() {
  return (
    <div className="font-lexend">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/biodata/:id" element={<AdminBiodataDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
