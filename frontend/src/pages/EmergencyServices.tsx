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
    desc: "Our professional towing services are available around the clock to assist you whenever you need help. Whether you're stranded on the highway, stuck in a parking lot, or need a vehicle transported across town, our experienced drivers and modern fleet are ready to respond. We handle all types of vehicles including cars, SUVs, motorcycles, and light trucks with the utmost care and professionalism.", 
    icon: Truck,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=800&fit=crop"
  },
  { 
    id: "roadside-assistance",
    title: "Roadside Assistance", 
    desc: "When you're stuck on the side of the road, our comprehensive roadside assistance services are just a phone call away. We provide battery jump starts, fuel delivery, lockout services, and minor mechanical repairs to get you back on the road quickly. Our technicians carry all the necessary tools and equipment to handle most roadside emergencies efficiently, minimizing your wait time and getting you safely to your destination.", 
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&h=800&fit=crop"
  },
  { 
    id: "breakdown-recovery",
    title: "Breakdown Recovery", 
    desc: "Vehicle breakdowns can happen at the most inconvenient times. Our breakdown recovery service ensures your vehicle is safely transported to your preferred repair facility or garage. We understand the stress of a breakdown, which is why our team works quickly and professionally to secure your vehicle and get it to where it needs to be. We handle everything from minor mechanical failures to major engine problems with equal care and attention.", 
    icon: Car,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop"
  },
  { 
    id: "accident-assistance",
    title: "Accident Assistance", 
    desc: "In the unfortunate event of an accident, our team provides immediate assistance to help you through this stressful situation. We safely remove your vehicle from the accident scene and transport it to your chosen repair facility or storage location. Our drivers are trained to handle accident recovery with sensitivity and professionalism, and we work directly with insurance companies to streamline the claims process and documentation.", 
    icon: AlertTriangle,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop"
  },
  { 
    id: "flat-tire-help",
    title: "Flat Tire Help", 
    desc: "A flat tire doesn't have to ruin your day. Our flat tire assistance service provides quick on-the-spot tire changes using your spare tire, or we can tow your vehicle to the nearest tire shop if needed. Our technicians are equipped with professional-grade tools to safely change your tire and get you back on the road in no time. We also inspect your spare tire to ensure it's safe for continued travel.", 
    icon: CircleDot,
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200&h=800&fit=crop"
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
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
