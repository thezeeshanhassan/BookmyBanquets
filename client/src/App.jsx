import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomeLayout from "./layout/homeLayout";
import Home from "./pages/Venues";
import HomeNew from "./pages/HomeNew";
import HallProfile from "./pages/HallProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./pages/ForgotPassword";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeNew />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/venues",
        element: <Home />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      }
    ],
  },
  {
    path: "/hall/:id",
    element: <HallProfile />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
