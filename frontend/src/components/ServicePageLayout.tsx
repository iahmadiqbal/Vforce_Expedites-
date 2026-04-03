import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import HeroBanner from "./HeroBanner";
import CTABanner from "./CTABanner";

interface ServicePageLayoutProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  features: { icon?: LucideIcon; text: string }[];
  ctaText?: string;
}

const ServicePageLayout = ({
  image,
  title,
  subtitle,
  description,
  features,
  ctaText = "Need Help? Call Us Now",
}: ServicePageLayoutProps) => (
  <div>
    <HeroBanner image={image} title={title} subtitle={subtitle} compact />

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+14034623578" className="btn-accent">
                <Phone size={18} />
                Immediate Help
              </a>
              <Link to="/contact" className="btn-outline-primary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                <CheckCircle size={20} className="text-accent mt-0.5 shrink-0" />
                <span className="text-foreground">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <CTABanner text={ctaText} />
  </div>
);

export default ServicePageLayout;
