import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { RankingProof } from "@/components/RankingProof";
import { SocialProof } from "@/components/SocialProof";
import { Testimonial } from "@/components/Testimonial";
import { Features } from "@/components/Features";
import { Comparison } from "@/components/Comparison";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoTicker />
      <RankingProof />
      <SocialProof />
      <Testimonial />
      <Features />
      <Comparison />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
