import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader"; // Ensure the path is correct

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  // 🕒 Wait for auth to load before rendering
  if (loading) return <Loader message="Checking authentication..." />;
  console.log(user);
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" replace />;

  return children;
};

export default ProtectedRoute;
