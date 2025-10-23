import type { Route } from "./+types/home";
import Navbar from "~/common/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TemuIn | Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Navbar />;
}
