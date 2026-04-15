import { Link } from "react-router-dom";
import { MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div className="flex flex-col items-start">
          <img src="/transparentlogo.png" alt="Vforce Xpedites" className="h-12 md:h-14 mb-3" />
          <p className="text-primary-foreground text-sm leading-relaxed">
            17837348 Canada Corporations<br />operating as Vforce Xpedites
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-primary-foreground">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Emergency Services", path: "/emergency-services" },
              { label: "Transport & Moving", path: "/transport-moving" },
              { label: "How It Works", path: "/how-it-works" },
              { label: "Contact Us", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-primary-foreground hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-primary-foreground">Contact Info</h3>
          <div className="space-y-2 text-sm">
            <a href="mailto:info@vforceexpedites.com" className="flex items-start gap-1 text-primary-foreground hover:text-accent transition-colors">
              <span>📧 info@vforceexpedites.com</span>
            </a>
            <a href="mailto:vforcexpedites@gmail.com" className="flex items-start gap-1 text-primary-foreground hover:text-accent transition-colors">
              <span>📧 vforcexpedites@gmail.com</span>
            </a>
            <a href="tel:+14034623578" className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors">
              <Phone size={14} className="shrink-0" />
              <span>+1 403-462-3578</span>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=21+Piggy+Place+St+John's+NL+A1B+3X2" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-primary-foreground hover:text-accent transition-colors">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>21 Piggy Place, St. John's NL, A1B 3X2</span>
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-primary-foreground">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61573486360865"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors text-primary-foreground"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://x.com/Vforcexpedites"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors text-primary-foreground"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.instagram.com/vforcexpedites/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors text-primary-foreground"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/20">
      <div className="container-custom py-4 text-center text-sm text-primary-foreground">
        <p>© 2025 Vforce Xpedites. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
