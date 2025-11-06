import RegisterPage from "~/components/auth/register";
import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TemuIn | Login" },
    { name: "Login", content: "Welcome to TemuIn!" },
  ];
}

export default function Home() {
  return (
    <>
      <RegisterPage />
    </>
  );
}