import UserDashboard from "~/components/Dashboard/user";
import type { Route } from "./+types/dashboard-user";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TemuIn | Login" },
    { name: "Login", content: "Welcome to TemuIn!" },
  ];
}

export default function Home() {
  return (
    <>
      <UserDashboard />
    </>
  );
}