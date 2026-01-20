import ClassesSection from "@/components/ClassesSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClassesSection />
      <Manifesto />
      <TeamSection />
      <GallerySection />
      <PricingSection />
    </>
  );
}
