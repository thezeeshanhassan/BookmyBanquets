// layout/homeLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import AlertComponent from "../components/AlertComponent";
import Navbar from "../components/HeaderNew";

export default function AuthLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <div>
      {!hideNavbar && <Navbar isScrolled={true} />}
      <AlertComponent />
      <Outlet />
    </div>
  );
}
