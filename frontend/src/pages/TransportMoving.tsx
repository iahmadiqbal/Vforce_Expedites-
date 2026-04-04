import { Link } from "react-router-dom";
import { Home, Sofa, Zap, Package, Building, Phone } from "lucide-react";
import { useEffect } from "react";
import heroTransport from "@/assets/hero-transport.jpg";
import HeroBanner from "@/components/HeroBanner";

const services = [
  { 
    id: "local-moving",
    title: "Local Moving Services", 
    subtitle: "House shifting",
    desc: "We handle your residential moves with care and professionalism. Our experienced team ensures all your belongings are safely packed, transported, and delivered to your new home. We make house shifting stress-free and efficient.", 
    icon: Home,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop"
  },
  { 
    id: "local-relocation",
    title: "Local Moving Services", 
    subtitle: "Local relocation",
    desc: "Our local relocation services cover moves within the city and surrounding areas. We provide quick and reliable transport for your belongings, ensuring they reach your new location safely and on time.", 
    icon: Home,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&h=800&fit=crop"
  },
  { 
    id: "furniture-shifting",
    title: "Furniture & Item Shifting", 
    subtitle: "Safe handling",
    desc: "We specialize in the safe handling of your valuable furniture and items. Our team uses protective materials and proper techniques to ensure nothing gets damaged during the move. Your belongings are in safe hands.", 
    icon: Sofa,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=800&fit=crop"
  },
  { 
    id: "heavy-item-transport",
    title: "Furniture & Item Shifting", 
    subtitle: "Heavy item transport",
    desc: "Our heavy item transport service handles large and bulky furniture pieces with expertise. We have the right equipment and trained personnel to move heavy items safely, whether it's a piano, refrigerator, or large furniture.", 
    icon: Sofa,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=800&fit=crop"
  },
  { 
    id: "same-day-delivery",
    title: "Same-Day Delivery", 
    subtitle: "Fast delivery service",
    desc: "When you need something delivered quickly, our fast delivery service is here to help. We prioritize speed and efficiency to ensure your items reach their destination the same day you need them.", 
    icon: Zap,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop"
  },
  { 
    id: "urgent-shipments",
    title: "Same-Day Delivery", 
    subtitle: "Urgent shipments",
    desc: "Our urgent shipment service handles time-sensitive deliveries with the highest priority. Whether it's important documents or critical packages, we ensure they arrive on time, every time.", 
    icon: Zap,
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437c7?w=1200&h=800&fit=crop"
  },
  { 
    id: "small-load-transport",
    title: "Small Load Transport", 
    subtitle: "Small goods transport",
    desc: "Perfect for transporting a few items or smaller loads. Our small goods transport service is ideal when you don't need a full truck but still want professional, reliable service for your belongings.", 
    icon: Package,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop"
  },
  { 
    id: "cost-effective",
    title: "Small Load Transport", 
    subtitle: "Cost-effective solution",
    desc: "We offer affordable rates for small load transport without compromising on quality. Our cost-effective solution ensures you get professional service at prices that fit your budget.", 
    icon: Package,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&h=800&fit=crop"
  },
  { 
    id: "business-logistics",
    title: "Business Logistics Support", 
    subtitle: "Support for businesses",
    desc: "We provide comprehensive logistics support tailored to your business needs. From inventory transport to supply chain management, we help keep your business operations running smoothly.", 
    icon: Building,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop"
  },
  { 
    id: "regular-transport",
    title: "Business Logistics Support", 
    subtitle: "Regular transport services",
    desc: "Our regular transport services offer scheduled pickups and deliveries for your business. We provide consistent, reliable service that you can count on for your ongoing logistics needs.", 
    icon: Building,
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200&h=800&fit=crop"
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
      <HeroBanner
        image={heroTransport}
        title="Transport & Moving Services"
        subtitle="Reliable transport solutions for residential and commercial needs"
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
                  className="w-full h-[350px] md:h-[300px] object-cover rounded-lg shadow-lg"
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
                <a href="tel:+14034623578" className="btn-accent inline-flex items-center gap-2">
                  <Phone size={20} />
                  Call Now for Immediate Assistance
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Immediate Assistance Section */}
      <section className="bg-gradient-to-r from-red-action to-orange-cta py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Need Immediate Assistance? We're Available 24/7
          </h2>
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
