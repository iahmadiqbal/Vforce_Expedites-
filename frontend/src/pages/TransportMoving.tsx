import { Link } from "react-router-dom";
import { Home, Sofa, Zap, Package, Building } from "lucide-react";
import { useEffect } from "react";
import heroTransport from "@/assets/hero-transport.jpg";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";

const services = [
  { 
    id: "local-moving",
    title: "Local Moving Services", 
    desc: "House shifting and local relocation services. We handle your belongings with care and ensure safe transport to your new location. Perfect for residential moves within the city.", 
    icon: Home,
    image: heroTransport
  },
  { 
    id: "furniture-shifting",
    title: "Furniture & Item Shifting", 
    desc: "Safe handling and transport of heavy items and furniture. Our team is trained to move large, bulky items without damage. We use proper equipment for secure transport.", 
    icon: Sofa,
    image: heroTransport
  },
  { 
    id: "same-day-delivery",
    title: "Same-Day Delivery", 
    desc: "Fast delivery service for urgent shipments. When time is critical, we ensure your packages reach their destination the same day. Reliable and efficient service.", 
    icon: Zap,
    image: heroTransport
  },
  { 
    id: "small-load-transport",
    title: "Small Load Transport", 
    desc: "Cost-effective transport for small goods. Perfect for moving a few items or small loads. Affordable pricing without compromising on service quality.", 
    icon: Package,
    image: heroTransport
  },
  { 
    id: "business-logistics",
    title: "Business Logistics Support", 
    desc: "Regular transport services and logistics for businesses. We provide consistent, reliable transport solutions for your business needs. Flexible scheduling available.", 
    icon: Building,
    image: heroTransport
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
    <div className="pt-[60px]">
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

      <CTABanner />
    </div>
  );
};

export default TransportMoving;
