import { Link } from "react-router-dom";
import { Home, Sofa, Zap, Package, Building, Phone } from "lucide-react";
import { useEffect } from "react";
import heroTransport from "@/assets/hero-transport.jpg";

const services = [
  { 
    id: "local-moving-services",
    title: "Local Moving Services", 
    subtitle: "House shifting • Local relocation",
    desc: "Easy, safe house shifting and local relocation. We pack, load, transport, and unload your items with care. Professional handling from start to finish for a stress-free move.", 
    icon: Home,
    image: "/images/Local Moving Services.jpg"
  },
  { 
    id: "furniture-item-shifting",
    title: "Furniture & Item Shifting", 
    subtitle: "Heavy item moving • Safe handling",
    desc: "Safe moving for all furniture and household items. We use proper lifting, protective packing, and secure loading. Large items are disassembled, transported, and reassembled at your destination.", 
    icon: Sofa,
    image: "/images/Furniture & Item Shifting.jpg"
  },
  { 
    id: "same-day-delivery",
    title: "Same-Day Delivery", 
    subtitle: "Fast delivery • Urgent shipments",
    desc: "Urgent delivery within the same day. Immediate pickup with fast dispatch to your destination. Perfect for important documents, business packages, or time-sensitive items.", 
    icon: Zap,
    image: "/images/Same-Day Delivery.jpg"
  },
  { 
    id: "small-load-transport",
    title: "Small Load Transport", 
    subtitle: "Small goods transport • Budget-friendly solution",
    desc: "Affordable transport for small loads. Perfect for a few items, boxes, or light goods. Pay only for the space you need—budget-friendly and reliable.", 
    icon: Package,
    image: "/images/Small Load Transport.jpg"
  },
  { 
    id: "business-logistics-support",
    title: "Business Logistics Support", 
    subtitle: "Business transport • Regular logistics service",
    desc: "Complete logistics support for businesses. Regular or one-time transport for inventory, equipment, and supplies. Timely delivery to keep your operations running smoothly.", 
    icon: Building,
    image: "/images/Business Logistics Support.jpg"
  },
];

const TransportMoving = () => {
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
    <div className="pt-[64px]">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroTransport} 
            alt="Transport & Moving Services" 
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white">
            Reliable Transport &<br />Moving Services
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8">
            Safe, Fast & Affordable Solutions
          </p>
          <div className="flex flex-row gap-3 md:gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-sm md:text-lg py-2 md:py-3 px-4 md:px-8 bg-white text-red-action hover:bg-gray-100">
              Contact Us
            </Link>
            <a href="tel:+14034623578" className="btn-accent text-sm md:text-lg py-2 md:py-3 px-4 md:px-8 inline-flex items-center justify-center gap-2">
              <Phone size={18} className="md:w-5 md:h-5" />
              <span className="hidden sm:inline">Immediate Help</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </section>

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
                  className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-lg"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="feature-icon mb-4">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
                {service.subtitle && <h3 className="text-xl md:text-2xl font-semibold text-red-action mb-4">{service.subtitle}</h3>}
                <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/contact" className="btn-primary inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-red-action to-orange-cta py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need help with moving or transport?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Available 24/7 for fast service
          </p>
          <a href="tel:+14034623578" className="btn-primary text-lg py-3 px-8 inline-flex items-center gap-2 bg-white text-red-action hover:bg-gray-100">
            <Phone size={20} />
            Immediate Help
          </a>
        </div>
      </section>
    </div>
  );
};

export default TransportMoving;
