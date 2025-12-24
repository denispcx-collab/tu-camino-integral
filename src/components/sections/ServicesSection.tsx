import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, User, BookOpen, PlayCircle } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Mentorías Grupales",
    description: "Crece en comunidad con otras mujeres que comparten tu deseo de vivir una fe integral.",
    highlight: "Comunidad"
  },
  {
    icon: User,
    title: "Mentoría 1:1",
    description: "Acompañamiento personalizado y profundo según tus necesidades específicas.",
    highlight: "Personalizado"
  },
  {
    icon: BookOpen,
    title: "Talleres Temáticos",
    description: "Formaciones específicas sobre temas clave para tu crecimiento espiritual y emocional.",
    highlight: "Formación"
  },
  {
    icon: PlayCircle,
    title: "Cursos y Recursos",
    description: "Contenido digital, membresías y recursos para tu proceso de transformación.",
    highlight: "A tu ritmo"
  }
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Formas de trabajar{" "}
            <span className="text-primary">juntas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diferentes opciones adaptadas a tus necesidades y disponibilidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-gold-soft/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl text-foreground">
                        {service.title}
                      </h3>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {service.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
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
          <Button variant="default" size="lg" onClick={scrollToContact}>
            Ver opciones disponibles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
