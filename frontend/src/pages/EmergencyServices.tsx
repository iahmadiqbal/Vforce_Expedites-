import { Link } from "react-router-dom";
import { Truck, Wrench, Car, AlertTriangle, CircleDot, Phone } from "lucide-react";
import { useEffect } from "react";
import heroEmergency from "@/assets/hero-emergency.jpg";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";

const services = [
  { 
    id: "towing-services",
    title: "24/7 Towing Services", 
    desc: "Emergency towing anytime, anywhere. Fast vehicle pickup and transport to your desired location. Our professional drivers are available round the clock to assist you.", 
    icon: Truck,
    image: heroEmergency
  },
  { 
    id: "roadside-assistance",
    title: "Roadside Assistance", 
    desc: "Battery jump starts, minor mechanical issues, locked out assistance. We help you get back on the road quickly with our comprehensive roadside support services.", 
    icon: Wrench,
    image: heroEmergency
  },
  { 
    id: "breakdown-recovery",
    title: "Breakdown Recovery", 
    desc: "Complete vehicle recovery support. Safe transport to the nearest garage or your preferred mechanic. We handle all types of vehicle breakdowns with care.", 
    icon: Car,
    image: heroEmergency
  },
  { 
    id: "accident-assistance",
    title: "Accident Assistance", 
    desc: "Immediate help during accidents. Safe towing from accident scenes to repair facilities. We work with insurance companies to make the process smooth.", 
    icon: AlertTriangle,
    image: heroEmergency
  },
  { 
    id: "flat-tire-help",
    title: "Flat Tire Help", 
    desc: "Quick tire replacement and on-the-spot tire support. We carry the tools needed to get you moving again or tow you to a tire shop if needed.", 
    icon: CircleDot,
    image: heroEmergency
  },
];

const EmergencyServices = () => {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="pt-[60px]">
      <HeroBanner
        image={heroEmergency}
        title="Emergency Services"
        subtitle="Professional emergency towing and roadside assistance available 24/7"
        compact
      />

      {/* Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-card' : 'bg-muted'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="feature-icon mb-4">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/contact" className="btn-accent">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Emergency Call Banner - Bottom */}
      <section className="bg-accent py-8">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-accent-foreground">Call Now for Immediate Assistance</h2>
          <a href="tel:+14034623578" className="btn-primary py-3 px-8 text-lg">
            <Phone size={20} />
            +1 403-462-3578
          </a>
        </div>
      </section>

      <CTABanner bgColor="primary" />
    </div>
  );
};

export default EmergencyServices;
