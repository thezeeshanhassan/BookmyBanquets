import { Outlet } from "react-router-dom";
import AlertComponent from "../components/AlertComponent";
export default function HomeLayout() {
  return (
    <div>
      <AlertComponent></AlertComponent>
      <Outlet></Outlet>
    </div>
  );
}
