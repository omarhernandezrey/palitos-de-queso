import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { WhyUs } from "@/components/sections/WhyUs";
import { Preparation } from "@/components/sections/Preparation";
import { Conservation } from "@/components/sections/Conservation";
import { Gallery } from "@/components/sections/Gallery";
import { Videos } from "@/components/sections/Videos";
import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Coverage } from "@/components/sections/Coverage";
import { Story } from "@/components/sections/Story";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <WhyUs />
        <Preparation />
        <Conservation />
        <Gallery />
        <Videos />
        <UseCases />
        <Testimonials />
        <FAQ />
        <Coverage />
        <Story />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton variant="sticky" label="Quiero mis palitos" />
    </>
  );
}
