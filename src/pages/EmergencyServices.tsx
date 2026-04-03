import { Link } from "react-router-dom";
import { Truck, Wrench, Car, AlertTriangle, CircleDot, Phone } from "lucide-react";
import heroEmergency from "@/assets/hero-emergency.jpg";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";

const services = [
  { title: "24/7 Towing Services", desc: "Emergency towing anytime, anywhere. Fast vehicle pickup and transport.", link: "/emergency/towing-services", icon: Truck },
  { title: "Roadside Assistance", desc: "Battery jump starts, minor mechanical issues, locked out assistance.", link: "/emergency/roadside-assistance", icon: Wrench },
  { title: "Breakdown Recovery", desc: "Complete vehicle recovery support. Safe transport to nearest garage.", link: "/emergency/breakdown-recovery", icon: Car },
  { title: "Accident Assistance", desc: "Immediate help during accidents. Safe towing from accident scenes.", link: "/emergency/accident-assistance", icon: AlertTriangle },
  { title: "Flat Tire Help", desc: "Quick tire replacement and on-the-spot tire support.", link: "/emergency/flat-tire-help", icon: CircleDot },
];

const EmergencyServices = () => (
  <div>
    <HeroBanner
      image={heroEmergency}
      title="Emergency Services"
      subtitle="Professional emergency towing and roadside assistance"
      compact
    />

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card p-6">
              <div className="feature-icon mb-4">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <Link to={s.link} className="btn-accent text-sm py-2 px-4">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Emergency Banner */}
    <section className="bg-accent py-6">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-accent-foreground">Call Now for Immediate Assistance</h2>
        <a href="tel:+14034623578" className="btn-primary py-2 px-6">
          <Phone size={18} />
          Immediate Help
        </a>
      </div>
    </section>

    <CTABanner bgColor="primary" />
  </div>
);

export default EmergencyServices;
