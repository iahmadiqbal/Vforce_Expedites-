import { Link } from "react-router-dom";
import { Home, Sofa, Zap, Package, Building, Phone } from "lucide-react";
import { useEffect } from "react";
import heroTransport from "@/assets/hero-transport.jpg";

const services = [
  { 
    id: "local-moving-services",
    title: "Local Moving Services", 
    subtitle: "House shifting • Local relocation",
    desc: "We handle your residential moves with care and professionalism. Our experienced team ensures all your belongings are safely packed, transported, and delivered to your new home. Whether you're moving across town or to a nearby area, we make house shifting stress-free and efficient with our reliable local relocation services.", 
    icon: Home,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop"
  },
  { 
    id: "furniture-item-shifting",
    title: "Furniture & Item Shifting", 
    subtitle: "Heavy item moving • Safe handling",
    desc: "We specialize in the safe handling of your valuable furniture and items. Our team uses protective materials and proper techniques to ensure nothing gets damaged during the move. From large furniture pieces to delicate items, we have the right equipment and trained personnel to move everything safely and securely.", 
    icon: Sofa,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=800&fit=crop"
  },
  { 
    id: "same-day-delivery",
    title: "Same-Day Delivery", 
    subtitle: "Fast delivery • Urgent shipments",
    desc: "When you need something delivered quickly, our same-day delivery service is here to help. We prioritize speed and efficiency to ensure your items reach their destination the same day you need them. Whether it's important documents or critical packages, we handle time-sensitive deliveries with the highest priority.", 
    icon: Zap,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop"
  },
  { 
    id: "small-load-transport",
    title: "Small Load Transport", 
    subtitle: "Small goods transport • Budget-friendly solution",
    desc: "Perfect for transporting a few items or smaller loads. Our small goods transport service is ideal when you don't need a full truck but still want professional, reliable service for your belongings. We offer affordable rates without compromising on quality, ensuring you get professional service at prices that fit your budget.", 
    icon: Package,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop"
  },
  { 
    id: "business-logistics-support",
    title: "Business Logistics Support", 
    subtitle: "Business transport • Regular logistics service",
    desc: "We provide comprehensive logistics support tailored to your business needs. From inventory transport to supply chain management, we help keep your business operations running smoothly. Our regular transport services offer scheduled pickups and deliveries, providing consistent, reliable service that you can count on for your ongoing logistics needs.", 
    icon: Building,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop"
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
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={heroTransport} 
            alt="Transport & Moving Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Reliable Transport & Moving Services
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Safe, Fast & Affordable Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg py-3 px-8 bg-white text-red-action hover:bg-gray-100">
              Contact Us
            </Link>
            <a href="tel:+14034623578" className="btn-accent text-lg py-3 px-8 inline-flex items-center justify-center gap-2">
              <Phone size={20} />
              Immediate Help
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
                  className="w-full h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="feature-icon mb-4">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
                {service.subtitle && <h3 className="text-xl md:text-2xl font-semibold text-red-action mb-4">{service.subtitle}</h3>}
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.desc}</p>
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
