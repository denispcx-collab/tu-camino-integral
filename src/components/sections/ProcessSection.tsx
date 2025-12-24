import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ClipboardCheck, Compass, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Conectas conmigo",
    description: "Me escribes a través de la web o WhatsApp para conocer tus necesidades."
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Eliges tu recurso",
    description: "Seleccionas la mentoría o recurso que mejor se adapte a tu situación."
  },
  {
    number: "03",
    icon: Compass,
    title: "Proceso guiado",
    description: "Inicias un proceso acompañado, con pasos claros y apoyo constante."
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Transformación diaria",
    description: "Aplicas lo aprendido y ves los cambios reflejados en tu vida."
  }
];

const ProcessSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-soft/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Proceso
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Tu proceso{" "}
            <span className="text-primary">paso a paso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un camino sencillo hacia la transformación integral
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-rose-deep flex items-center justify-center shadow-card">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-soft text-foreground text-xs font-bold flex items-center justify-center shadow-soft">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-display text-xl mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Dar el primer paso
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
