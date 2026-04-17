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
    desc: "Professional towing available anytime, anywhere. We dispatch the nearest vehicle quickly to safely transport your car, SUV, motorcycle, or light truck. Fast response, careful handling, and reliable service you can trust.", 
    icon: Truck,
    image: "/images/Availiby.jpeg"
  },
  { 
    id: "roadside-assistance",
    title: "Roadside Assistance", 
    desc: "Stuck on the road? We provide on-the-spot help including battery jump starts, fuel delivery, lockout assistance, and minor repairs. Our technicians arrive with the right tools to get you moving quickly.", 
    icon: Wrench,
    image: "/images/Road_Assistance.jpeg"
  },
  { 
    id: "breakdown-recovery",
    title: "Breakdown Recovery", 
    desc: "Vehicle won't start? We respond quickly to safely recover and tow your vehicle to your preferred repair shop, garage, or home. Professional handling with proper equipment to prevent further damage.", 
    icon: Car,
    image: "/images/Fast_Response_Time.jpeg"
  },
  { 
    id: "accident-assistance",
    title: "Accident Assistance", 
    desc: "Immediate help after an accident. We safely remove your vehicle from the scene and transport it to your chosen location. Professional recovery with documentation support for insurance claims.", 
    icon: AlertTriangle,
    image: "/images/Emergency_Services.jpeg"
  },
  { 
    id: "flat-tire-help",
    title: "Flat Tire Help", 
    desc: "Flat tire? We'll come to you and replace it with your spare on the spot. No spare? We'll tow you to the nearest tire shop. Fast, safe service to get you back on the road.", 
    icon: CircleDot,
    image: "/images/Professional_Service.jpeg"
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
    <div className="pt-[64px]">
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
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} overflow-hidden rounded-lg`}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-[300px] md:h-[500px] object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="feature-icon mb-4">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/contact" className="btn-primary inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Emergency Call Banner - Bottom */}
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

export default EmergencyServices;
