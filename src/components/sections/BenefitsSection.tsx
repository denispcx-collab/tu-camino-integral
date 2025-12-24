import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Target, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Vivir tu fe de forma práctica",
    description: "Integra tu relación con Dios en cada decisión y momento de tu vida diaria."
  },
  {
    icon: Heart,
    title: "Sanar tu mundo emocional",
    description: "Ordena y sana tus emociones desde la perspectiva amorosa de Dios."
  },
  {
    icon: Target,
    title: "Fortalecer tu identidad",
    description: "Descubre y afirma el propósito único que Dios tiene para tu vida."
  },
  {
    icon: Leaf,
    title: "Hábitos que honran tu cuerpo",
    description: "Desarrolla rutinas que cuidan el templo que Dios te ha dado."
  }
];

const BenefitsSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Beneficios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            ¿Qué puedes lograr con la{" "}
            <span className="text-primary">mentoría integral</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una transformación que abarca todas las áreas de tu vida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" onClick={scrollToContact}>
            Quiero una vida integral
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
