import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  showButtons?: boolean;
  compact?: boolean;
}

const HeroBanner = ({ image, title, subtitle, showButtons = false, compact = false }: HeroBannerProps) => (
  <section className={`relative ${compact ? "py-16 md:py-24" : "py-28 md:py-40"} overflow-hidden`}>
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover object-center"
      width={1920}
      height={800}
      loading="lazy"
    />
    <div className="hero-overlay" />
    <div className="container-custom relative z-10 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
      )}
      {showButtons && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+14034623578" className="btn-accent text-lg py-3 px-8">
            <Phone size={20} />
            Immediate Help
          </a>
          <Link to="/contact" className="btn-outline-primary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg py-3 px-8">
            Contact Us
          </Link>
        </div>
      )}
    </div>
  </section>
);

export default HeroBanner;
