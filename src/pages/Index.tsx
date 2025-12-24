import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TargetSection from "@/components/sections/TargetSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mentora Integral - Keyla Ortiz",
    "description": "Mentoría cristiana online para mujeres que desean vivir a Dios en espíritu, alma y cuerpo. Cursos, mentorías y recursos integrales.",
    "provider": {
      "@type": "Person",
      "name": "Keyla Ortiz Montiel",
      "jobTitle": "Mentora Integral Cristiana"
    },
    "serviceType": "Mentoría cristiana integral",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Online"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "keylaortizmentora@hotmail.com",
      "telephone": "+593990888451",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <Helmet>
        <title>Mentoría Integral Cristiana para Mujeres | Keyla Ortiz</title>
        <meta 
          name="description" 
          content="Mentoría cristiana online para mujeres que desean vivir a Dios en espíritu, alma y cuerpo. Cursos, mentorías y recursos integrales para tu transformación."
        />
        <meta 
          name="keywords" 
          content="mentoría cristiana para mujeres, mentoría integral cristiana, coaching cristiano online, crecimiento espiritual femenino, fe y bienestar emocional"
        />
        <meta property="og:title" content="Mentoría Integral Cristiana para Mujeres | Keyla Ortiz" />
        <meta property="og:description" content="Acompañamiento cristiano para transformar tu vida en espíritu, alma y cuerpo." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <BenefitsSection />
          <ServicesSection />
          <ProcessSection />
          <TargetSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
