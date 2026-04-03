import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const emergencyLinks = [
  { label: "24/7 Towing Services", path: "/emergency/towing-services" },
  { label: "Roadside Assistance", path: "/emergency/roadside-assistance" },
  { label: "Breakdown Recovery", path: "/emergency/breakdown-recovery" },
  { label: "Accident Assistance", path: "/emergency/accident-assistance" },
  { label: "Flat Tire Help", path: "/emergency/flat-tire-help" },
];

const transportLinks = [
  { label: "Local Moving Services", path: "/transport/local-moving" },
  { label: "Furniture & Item Shifting", path: "/transport/furniture-shifting" },
  { label: "Same-Day Delivery", path: "/transport/same-day-delivery" },
  { label: "Small Load Transport", path: "/transport/small-load-transport" },
  { label: "Business Logistics Support", path: "/transport/business-logistics" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary">
        <div className="container-custom flex items-center justify-between py-2">
          <Link to="/" className="text-primary-foreground font-bold text-xl md:text-2xl tracking-tight">
            Vforce Expedites
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-primary-foreground text-sm">+1 403-462-3578</span>
            <a href="tel:+14034623578" className="btn-accent text-sm py-2 px-4">
              <Phone size={16} />
              Immediate Help
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-card shadow-md">
        <div className="container-custom flex items-center justify-between py-0">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0">
            <NavItem to="/" label="Home" active={isActive("/")} />
            <DropdownNav
              label="Emergency Services"
              mainPath="/emergency-services"
              links={emergencyLinks}
              active={location.pathname.startsWith("/emergency")}
            />
            <DropdownNav
              label="Transport & Moving"
              mainPath="/transport-moving"
              links={transportLinks}
              active={location.pathname.startsWith("/transport")}
            />
            <NavItem to="/how-it-works" label="How It Works" active={isActive("/how-it-works")} />
            <NavItem to="/about" label="About Us" active={isActive("/about")} />
            <NavItem to="/contact" label="Contact Us" active={isActive("/contact")} />
            <NavItem to="/careers" label="Careers" active={isActive("/careers")} />
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="container-custom py-4 space-y-1">
              <MobileLink to="/" label="Home" onClick={() => setMobileOpen(false)} />
              
              <div>
                <button
                  onClick={() => setEmergencyOpen(!emergencyOpen)}
                  className="w-full flex items-center justify-between py-2 px-3 text-foreground hover:bg-muted rounded"
                >
                  Emergency Services <ChevronDown size={16} className={emergencyOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
                {emergencyOpen && (
                  <div className="pl-4 space-y-1">
                    <MobileLink to="/emergency-services" label="All Emergency Services" onClick={() => setMobileOpen(false)} />
                    {emergencyLinks.map(l => (
                      <MobileLink key={l.path} to={l.path} label={l.label} onClick={() => setMobileOpen(false)} />
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setTransportOpen(!transportOpen)}
                  className="w-full flex items-center justify-between py-2 px-3 text-foreground hover:bg-muted rounded"
                >
                  Transport & Moving <ChevronDown size={16} className={transportOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
                {transportOpen && (
                  <div className="pl-4 space-y-1">
                    <MobileLink to="/transport-moving" label="All Transport Services" onClick={() => setMobileOpen(false)} />
                    {transportLinks.map(l => (
                      <MobileLink key={l.path} to={l.path} label={l.label} onClick={() => setMobileOpen(false)} />
                    ))}
                  </div>
                )}
              </div>

              <MobileLink to="/how-it-works" label="How It Works" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/about" label="About Us" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/contact" label="Contact Us" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/careers" label="Careers" onClick={() => setMobileOpen(false)} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavItem = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <li>
    <Link
      to={to}
      className={`block px-4 py-4 text-sm font-medium transition-colors hover:text-accent ${active ? "text-accent border-b-2 border-accent" : "text-foreground"}`}
    >
      {label}
    </Link>
  </li>
);

const DropdownNav = ({
  label,
  mainPath,
  links,
  active,
}: {
  label: string;
  mainPath: string;
  links: { label: string; path: string }[];
  active: boolean;
}) => (
  <li className="relative group">
    <Link
      to={mainPath}
      className={`flex items-center gap-1 px-4 py-4 text-sm font-medium transition-colors hover:text-accent ${active ? "text-accent border-b-2 border-accent" : "text-foreground"}`}
    >
      {label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
    </Link>
    <div className="absolute top-full left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bg-card shadow-lg rounded-b-md min-w-[240px] border border-border z-50">
      {links.map((l) => (
        <Link
          key={l.path}
          to={l.path}
          className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
        >
          {l.label}
        </Link>
      ))}
    </div>
  </li>
);

const MobileLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-2 px-3 text-foreground hover:bg-muted rounded text-sm"
  >
    {label}
  </Link>
);

export default Header;
