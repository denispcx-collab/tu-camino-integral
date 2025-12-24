import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Las mentorías son solo para mujeres?",
    answer: "Sí, mi enfoque está especialmente diseñado para acompañar a mujeres en su proceso de crecimiento integral. Sin embargo, algunos recursos digitales pueden ser útiles para cualquier persona que busque crecer en su fe."
  },
  {
    question: "¿Todo el acompañamiento es online?",
    answer: "Sí, todas las mentorías, talleres y recursos se ofrecen 100% online. Esto te permite acceder desde cualquier lugar del mundo y en horarios flexibles que se adapten a tu vida."
  },
  {
    question: "¿Necesito experiencia previa en procesos de fe?",
    answer: "No necesitas experiencia previa. Lo único que necesitas es un deseo genuino de crecer en tu relación con Dios y en tu bienestar integral. Te acompaño paso a paso en el proceso."
  },
  {
    question: "¿Cuánto dura un proceso de mentoría?",
    answer: "La duración depende del tipo de acompañamiento que elijas. Las mentorías grupales suelen tener ciclos de varias semanas, mientras que la mentoría 1:1 se adapta a tus necesidades específicas."
  },
  {
    question: "¿Cómo sé qué opción es mejor para mí?",
    answer: "Puedes escribirme por WhatsApp y conversamos sobre tu situación actual. Te ayudaré a identificar qué tipo de acompañamiento es el más adecuado para ti en este momento."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Preguntas{" "}
            <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resuelvo tus dudas más comunes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-soft data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
