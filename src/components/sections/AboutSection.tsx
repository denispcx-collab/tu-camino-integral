import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import keylaPortrait from "@/assets/keyla-portrait.jpg";

const AboutSection = () => {
  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-gold-soft/20 to-transparent rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-gold-soft/40 rounded-2xl" />
              
              <img
                src={keylaPortrait}
                alt="Keyla Ortiz - Mentora integral cristiana"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elevated object-cover aspect-square"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-primary fill-primary/30" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Quién soy</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Soy Keyla Ortiz,{" "}
              <span className="text-primary">mentora integral</span>
            </h2>

            <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Acompaño a mujeres que desean una relación más profunda con Dios y una vida alineada con Su propósito.
              </p>
              <p>
                Mi enfoque es <strong className="text-foreground">integral</strong> porque creo que Dios nos creó como un todo: <em className="text-primary">espíritu, alma y cuerpo</em>.
              </p>
              <p>
                A diferencia de otros enfoques parciales, mi acompañamiento no se centra solo en lo espiritual o lo emocional, sino en la transformación completa de tu persona desde una perspectiva cristiana.
              </p>
            </div>

            <Button 
              variant="default" 
              size="lg" 
              className="mt-8"
              onClick={scrollToServices}
            >
              Conoce cómo puedo ayudarte
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
