import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5001/api";

function AdminProtectedRoute() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function checkAuth() {
      try {
        const response = await axios.get(`${API_URL}/auth/me`, {
          withCredentials: true,
        });

        const currentUser = response.data?.user ?? response.data;

        if (active) {
          setUser(currentUser);
        }
      } catch (error) {
        console.error("Auth check failed:", {
          status: error.response?.status,
          data: error.response?.data,
        });

        if (active) {
          setUser(null);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    checkAuth();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <div>Checking permissions...</div>;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default AdminProtectedRoute;
