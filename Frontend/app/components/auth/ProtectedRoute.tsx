import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login?unauthorized=1", { replace: true });
      return;
    }
    fetch("http://localhost:3000/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("role");
          navigate("/login?unauthorized=1", { replace: true });
          return;
        }
        setChecking(false);
      })
      .catch(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("role");
        navigate("/login?unauthorized=1", { replace: true });
      });
  }, [navigate]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-4 rounded-lg border bg-white shadow">
          Memeriksa otentikasi...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
