import type { Route } from "./+types/about-us";
import Navbar from "~/common/navbar";
import Footer from "~/common/footer";
import AboutUs from "~/components/About-Us/section1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TemuIn | About-Us" },
    { name: "About-Us", content: "Welcome to TemuIn!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
}