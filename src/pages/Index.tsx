import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Saptsati - AI Integration Services for Enterprise Productivity</title>
        <meta
          name="description"
          content="Saptsati helps enterprises integrate world-class AI models to transform workflows, boost productivity, and drive innovation. Expert AI consulting and implementation."
        />
        <meta name="keywords" content="AI integration, AI services, enterprise AI, productivity, machine learning, automation" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
