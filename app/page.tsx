import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import HeroTitle from "@/components/HeroTitle";
import HeroDetails from "@/components/HeroDetails";
import FooterInfo from "@/components/FooterInfo";
import ManifestSection from "@/components/ManifestSection";
import ExcursionSection from "@/components/ExcursionSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import CoreValuesCarousel from "@/components/CoreValuesCarousel";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      <Header />
      <SideNav />

      <div className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-32">
        <HeroTitle />
        <HeroDetails />
      </div>

      <ManifestSection />
      
      <ExcursionSection />

      <IntelligenceSection />

      <CoreValuesCarousel />

      <FooterInfo />
    </main>
  );
}
