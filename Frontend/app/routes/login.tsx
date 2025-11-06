import type { Route } from "./+types/login";
import LoginPage from "~/components/auth/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TemuIn | Login" },
    { name: "Login", content: "Welcome to TemuIn!" },
  ];
}

export default function Home() {
  return (
    <>
      <LoginPage />
    </>
  );
}