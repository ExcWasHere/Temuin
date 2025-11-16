import UserDashboard from "~/components/Dashboard/user";
import type { Route } from "./+types/dashboard-user";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TemuIn | Dashboard" },
    { name: "Dashboard-User", content: "Welcome to TemuIn!" },
  ];
}

export default function Home() {
  return (
    <>
      <UserDashboard />
    </>
  );
}