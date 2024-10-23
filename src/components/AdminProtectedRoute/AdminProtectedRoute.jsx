import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  if (!token) {
    return <Navigate to="/login" />;
  }
  if (role !== "admin") {
    return <Navigate to="/home" />;
  }

  return children;
}
