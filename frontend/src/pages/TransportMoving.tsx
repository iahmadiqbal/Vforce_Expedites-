import { Link } from "react-router-dom";
import { Home, Sofa, Zap, Package, Building, Phone } from "lucide-react";
import { useEffect } from "react";
import heroTransport from "@/assets/hero-transport.jpg";

const services = [
  { 
    id: "local-moving-services",
    title: "Local Moving Services", 
    subtitle: "House shifting • Local relocation",
    desc: "Our local moving service is designed to make your house shifting and local relocation completely easy, safe, and stress-free. Whether you are moving to a new house within the same city or relocating to a nearby area, our experienced team carefully handles the entire moving process from start to finish. We begin by properly packing your household items using safe packing methods to protect them from any damage during transport. After packing, all items including furniture, appliances, boxes, and personal belongings are carefully loaded into our vehicles using proper equipment to ensure everything stays secure during the journey. Once everything is safely transported, we unload and place your items at your new location with care and attention. Our goal is to make your move smooth, organized, and completely hassle-free so you can focus on settling into your new home without any stress or difficulty.", 
    icon: Home,
    image: "/images/Local Moving Services.jpg"
  },
  { 
    id: "furniture-item-shifting",
    title: "Furniture & Item Shifting", 
    subtitle: "Heavy item moving • Safe handling",
    desc: "Our furniture and item shifting service is focused on safely moving all types of household and office belongings without any damage. Whether you are relocating a single heavy item or an entire set of furniture, our trained team handles everything with care and responsibility. We use proper lifting techniques, protective packing materials, and secure loading methods to ensure your items stay safe throughout the entire moving process. Large furniture such as beds, sofas, wardrobes, tables, and appliances are carefully disassembled if needed, then safely transported and reassembled at your destination. We also take extra care of delicate and valuable items by properly wrapping and securing them to avoid scratches, breakage, or any kind of damage. Our goal is to provide a smooth, safe, and stress-free moving experience where every item reaches its destination exactly as it was picked up.", 
    icon: Sofa,
    image: "/images/Furniture & Item Shifting.jpg"
  },
  { 
    id: "same-day-delivery",
    title: "Same-Day Delivery", 
    subtitle: "Fast delivery • Urgent shipments",
    desc: "Our same-day delivery service is designed for urgent situations where your items need to reach their destination as quickly as possible without delay. When you request this service, we immediately arrange pickup from your location and ensure your parcel is delivered on the same day, within local city limits or nearby areas where fast transport is possible. This service is ideal for important documents, business packages, personal parcels, or any time-sensitive items that cannot wait until the next day. Once we collect your item, our team carefully handles it throughout the entire process to ensure it remains safe and secure until delivery. We assign the nearest available driver to reduce travel time and ensure fast dispatch. Our goal is to provide you with a reliable, fast, and hassle-free delivery experience so your urgent items always reach the right place on time.", 
    icon: Zap,
    image: "/images/Same-Day Delivery.jpg"
  },
  { 
    id: "small-load-transport",
    title: "Small Load Transport", 
    subtitle: "Small goods transport • Budget-friendly solution",
    desc: "Our small load transport service is designed for situations where you only need to move a few items or a small quantity of goods without hiring a full truck. This service is ideal for individuals or businesses who want a simple, affordable, and reliable transport solution for limited loads such as small furniture, boxes, appliances, personal items, or light commercial goods. Once you book the service, we arrange a suitable vehicle based on the size of your load and ensure everything is safely loaded and properly secured for transport. Even though it is a small load service, we still follow professional handling standards to make sure your items are protected throughout the journey and reach their destination safely. This option is budget-friendly because you only pay for the space and service you actually need, making it a cost-effective solution for short-distance or small quantity transport needs. Our goal is to provide you with a fast, safe, and affordable way to move small loads without any hassle or extra cost.", 
    icon: Package,
    image: "/images/Small Load Transport.jpg"
  },
  { 
    id: "business-logistics-support",
    title: "Business Logistics Support", 
    subtitle: "Business transport • Regular logistics service",
    desc: "Our business logistics support service is designed to help companies manage their daily transport and delivery needs in a smooth and reliable way. We provide complete support for moving business goods such as inventory, stock, equipment, and commercial supplies from one location to another. Whether you need one-time transport or regular scheduled deliveries, we ensure your business operations continue without delays or interruptions. Once you partner with us, we organize pickups and deliveries based on your business requirements and timelines, making sure everything is handled on time and in proper condition. We focus on safe handling, timely delivery, and consistent service so your supply chain stays efficient and well-organized. This service is especially useful for businesses that need ongoing logistics support without managing their own transport system. Our goal is to provide you with a dependable transport solution that helps your business run smoothly and grow without logistical stress.", 
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
                <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed text-justify">{service.desc}</p>
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
