import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "593990888451";
  const whatsappMessage = encodeURIComponent("Hola Keyla, me interesa conocer más sobre tu mentoría integral cristiana.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-gold-soft/10 to-secondary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-gold-deep" />
            <span className="text-sm font-medium text-foreground">Da el primer paso hoy</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Empieza hoy tu camino de{" "}
            <span className="text-primary">transformación integral</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Estoy aquí para acompañarte en este proceso. Escríbeme y conversemos sobre cómo puedo ayudarte a vivir tu fe de manera integral.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="whatsapp" 
              size="xl" 
              asChild
              className="group"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contáctame por WhatsApp
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Respondo personalmente en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
