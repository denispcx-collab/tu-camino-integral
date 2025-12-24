import { motion } from "framer-motion";
import { Check } from "lucide-react";
import decorativeBotanical from "@/assets/decorative-botanical.png";

const targetAudience = [
  "Crees en Dios pero sientes desconexión interior",
  "Deseas crecer espiritualmente sin descuidar tu bienestar emocional",
  "Buscas guía cristiana clara y práctica",
  "Quieres integrar tu fe en todas las áreas de tu vida",
  "Anhelas una transformación profunda y duradera"
];

const TargetSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20 relative overflow-hidden">
      {/* Decorative botanical elements */}
      <motion.img
        src={decorativeBotanical}
        alt=""
        aria-hidden="true"
        className="absolute top-10 right-0 w-48 opacity-30 md:opacity-50"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.img
        src={decorativeBotanical}
        alt=""
        aria-hidden="true"
        className="absolute bottom-10 left-0 w-48 opacity-30 md:opacity-50 transform rotate-180"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            ¿Es para ti?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Este espacio es{" "}
            <span className="text-primary">para ti</span> si...
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Si te identificas con alguna de estas situaciones, estás en el lugar correcto
          </p>

          <div className="grid gap-4 text-left max-w-xl mx-auto">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/30 shadow-soft"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetSection;
