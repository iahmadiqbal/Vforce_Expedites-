import { Phone } from "lucide-react";

interface CTABannerProps {
  text?: string;
  bgColor?: "primary" | "accent";
}

const CTABanner = ({
  text = "Need Immediate Assistance? We're Available 24/7",
  bgColor = "accent",
}: CTABannerProps) => (
  <section className={`${bgColor === "accent" ? "bg-accent" : "bg-primary"} section-padding`}>
    <div className="container-custom text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">{text}</h2>
      <a
        href="tel:+14034623578"
        className={`${bgColor === "accent" ? "btn-primary" : "btn-accent"} text-lg py-3 px-8`}
      >
        <Phone size={20} />
        Immediate Help
      </a>
    </div>
  </section>
);

export default CTABanner;
