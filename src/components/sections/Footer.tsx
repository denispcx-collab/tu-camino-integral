import { Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/40 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl text-foreground mb-2">
              Mentora Integral
            </h3>
            <p className="text-muted-foreground">
              Acompañamiento cristiano para mujeres
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="mailto:keylaortizmentora@hotmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>keylaortizmentora@hotmail.com</span>
            </a>
            <a 
              href="https://wa.me/593990888451"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+593 990 888 451</span>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-1">
                © {currentYear} Keyla Ortiz Montiel. Hecho con{" "}
                <Heart className="w-4 h-4 text-primary fill-primary/30" />
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  Aviso Legal
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
