import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5001/api";

function AdminProtectedRoute() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let active = true;

    const checkAuth = async () => {
      try {
        const response = await axios.get(`${API_URL}/auth/me`, {
          withCredentials: true,
        });

        if (active) {
          // Adjust this if your API returns { user: ... } instead of { ...user }
          const currentUser = response.data.user ?? response.data;
          setUser(currentUser);
          setAuthenticated(true);
        }
      } catch (error) {
        if (active) {
          setUser(null);
          setAuthenticated(false);
        }

        if (error.response?.status !== 401 && error.response?.status !== 403) {
          console.error("Failed to check authentication:", error);
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    checkAuth();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <div>Checking permissions...</div>;
  }

  if (!authenticated || !user) {
    return <Navigate to="admin/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default AdminProtectedRoute;
