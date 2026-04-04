import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const emergencyLinks = [
  { label: "24/7 Towing Services", path: "/emergency-services", hash: "#towing-services" },
  { label: "Roadside Assistance", path: "/emergency-services", hash: "#roadside-assistance" },
  { label: "Breakdown Recovery", path: "/emergency-services", hash: "#breakdown-recovery" },
  { label: "Accident Assistance", path: "/emergency-services", hash: "#accident-assistance" },
  { label: "Flat Tire Help", path: "/emergency-services", hash: "#flat-tire-help" },
];

const transportLinks = [
  { label: "Local Moving Services", path: "/transport-moving", hash: "#local-moving-services" },
  { label: "Furniture & Item Shifting", path: "/transport-moving", hash: "#furniture-item-shifting" },
  { label: "Same-Day Delivery", path: "/transport-moving", hash: "#same-day-delivery" },
  { label: "Small Load Transport", path: "/transport-moving", hash: "#small-load-transport" },
  { label: "Business Logistics Support", path: "/transport-moving", hash: "#business-logistics-support" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleSectionClick = (e: React.MouseEvent, path: string, hash: string) => {
    e.preventDefault();
    
    if (location.pathname === path) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(path + hash);
    }
    
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card">
      <nav className="container-custom">
        <div className="flex items-center justify-between py-5">
          {/* Left Side - Logo */}
          <Link to="/" className="text-foreground font-bold text-base md:text-lg tracking-tight font-poppins whitespace-nowrap">
            Vforce Expedites
          </Link>

          {/* Center - Menu Items (Desktop) */}
          <ul className="hidden lg:flex items-center gap-1 flex-shrink justify-center mx-2">
            <NavItem to="/" label="Home" active={isActive("/")} />
            <DropdownNav
              label="Emergency Services"
              mainPath="/emergency-services"
              links={emergencyLinks}
              active={location.pathname.startsWith("/emergency")}
              onSectionClick={handleSectionClick}
            />
            <DropdownNav
              label="Transport & Moving"
              mainPath="/transport-moving"
              links={transportLinks}
              active={location.pathname.startsWith("/transport")}
              onSectionClick={handleSectionClick}
            />
            <NavItem to="/how-it-works" label="How It Works" active={isActive("/how-it-works")} />
            <NavItem to="/about" label="About Us" active={isActive("/about")} />
            <NavItem to="/careers" label="Careers" active={isActive("/careers")} />
            <NavItem to="/contact" label="Contact Us" active={isActive("/contact")} />
          </ul>

          {/* Right Side - Phone + Button */}
          <div className="hidden lg:flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            <span className="text-foreground text-sm font-medium">+1 403-462-3578</span>
            <a href="tel:+14034623578" className="btn-accent text-sm py-2 px-3">
              <Phone size={16} />
              Immediate Help
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border pb-4">
            <div className="py-4 space-y-1">
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
                      <button
                        key={l.hash}
                        onClick={(e) => handleSectionClick(e, l.path, l.hash)}
                        className="block w-full text-left py-2 px-3 text-foreground hover:bg-muted rounded text-sm"
                      >
                        {l.label}
                      </button>
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
                      <button
                        key={l.hash}
                        onClick={(e) => handleSectionClick(e, l.path, l.hash)}
                        className="block w-full text-left py-2 px-3 text-foreground hover:bg-muted rounded text-sm"
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <MobileLink to="/how-it-works" label="How It Works" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/about" label="About Us" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/careers" label="Careers" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/contact" label="Contact Us" onClick={() => setMobileOpen(false)} />

              {/* Mobile Phone + Button */}
              <div className="pt-4 px-3 space-y-3">
                <div className="text-foreground text-sm font-medium">+1 403-462-3578</div>
                <a href="tel:+14034623578" className="btn-accent text-sm py-2 px-4 w-full justify-center">
                  <Phone size={16} />
                  Immediate Help
                </a>
              </div>
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
      className={`block px-2 py-2 text-sm font-medium transition-colors hover:text-accent rounded whitespace-nowrap ${active ? "text-accent bg-muted" : "text-foreground"}`}
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
  onSectionClick,
}: {
  label: string;
  mainPath: string;
  links: { label: string; path: string; hash: string }[];
  active: boolean;
  onSectionClick: (e: React.MouseEvent, path: string, hash: string) => void;
}) => (
  <li className="relative group">
    <Link
      to={mainPath}
      className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors hover:text-accent rounded whitespace-nowrap ${active ? "text-accent bg-muted" : "text-foreground"}`}
    >
      {label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
    </Link>
    <div className="absolute top-full left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bg-card shadow-lg rounded-md min-w-[240px] border border-border z-50 mt-1">
      {links.map((l) => (
        <a
          key={l.hash}
          href={l.path + l.hash}
          onClick={(e) => onSectionClick(e, l.path, l.hash)}
          className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors first:rounded-t-md last:rounded-b-md"
        >
          {l.label}
        </a>
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
