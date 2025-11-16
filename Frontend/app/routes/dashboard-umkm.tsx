import type { Route } from "./+types/dashboard-user";
import ProtectedRoute from "~/components/auth/ProtectedRoute";
import UMKMOwnerDashboard from "~/components/Dashboard/umkm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TemuIn | Dashboard" },
    { name: "Dashboard-Umkm", content: "Welcome to TemuIn!" },
  ];
}

export default function Home() {
  return (
    <>
      <ProtectedRoute>
      <UMKMOwnerDashboard />
      </ProtectedRoute>
    </>
  );
}