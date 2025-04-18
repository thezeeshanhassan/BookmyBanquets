// layout/homeLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import AlertComponent from "../components/AlertComponent";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <AlertComponent />
      <Outlet />
    </div>
  );
}