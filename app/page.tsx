import { CTA } from "@/components/CTA";
import { Featured } from "@/components/Featured";
import Hero from "@/components/Hero";
import { Skills } from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Featured Work Section */}
      <Featured />
      {/* Skills section */}
      <Skills />
      {/* CTA section */}
      <CTA />
    </div>
  );
}
