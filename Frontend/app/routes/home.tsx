import IndexHero from "~/components/HomePage/section1";
import type { Route } from "./+types/home";
import Navbar from "~/common/navbar";
import IndexFeatures from "~/components/HomePage/section2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TemuIn | Home" },
    { name: "Home", content: "Welcome to TemuIn!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <IndexHero />
      <IndexFeatures />
    </>
  );
}
