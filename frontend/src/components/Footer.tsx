import { Link } from "react-router-dom";
import { MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary-foreground">Vforce Expedites</h3>
          <p className="text-primary-foreground/80 text-base leading-relaxed">
            Your trusted partner for emergency towing and transport. Available 24/7 with fast, reliable service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary-foreground">Quick Links</h3>
          <ul className="space-y-2 text-base">
            {[
              { label: "Emergency Services", path: "/emergency-services" },
              { label: "Transport & Moving", path: "/transport-moving" },
              { label: "How It Works", path: "/how-it-works" },
              { label: "Contact Us", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary-foreground">Contact Info</h3>
          <div className="space-y-3 text-base">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-primary-foreground/80">473033 Dufferin Country Road 11, Orangeville, ON</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-accent" />
              <span className="text-primary-foreground/80">+1 403-462-3578</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary-foreground">Follow Us</h3>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/20">
      <div className="container-custom py-4 text-center text-base text-primary-foreground/60">
        © 2025 Vforce Expedites. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
