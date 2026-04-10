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
    desc: "Our professional towing service is available 24 hours a day, 7 days a week to assist you whenever your vehicle breaks down or you face any roadside emergency. Whether you are stranded on the highway, stuck in a parking lot, outside the city, or dealing with an unexpected breakdown, our team is always ready to respond quickly. As soon as you contact us, we dispatch the nearest available towing vehicle to your location to ensure fast assistance and reduce your waiting time. Our experienced drivers carefully handle every situation using proper equipment to safely load and transport your vehicle without any damage. We provide towing for all types of vehicles including cars, SUVs, motorcycles, and light trucks, whether it is for emergencies, accident recovery, or planned transport. Our main goal is to give you fast, safe, and reliable service so you can feel stress-free knowing your vehicle is in professional hands.", 
    icon: Truck,
    image: "/images/247 Towing Services.jpg"
  },
  { 
    id: "roadside-assistance",
    title: "Roadside Assistance", 
    desc: "When your vehicle suddenly stops working or you get stuck on the road, our roadside assistance service is available to help you immediately. You just need to make a call, and our team will reach your location as quickly as possible to get you back on the road without needing a tow in most cases. We provide essential on-the-spot services such as battery jump starts if your car won't start, fuel delivery if you run out of petrol or diesel, lockout assistance if your keys are locked inside the vehicle, and minor mechanical repairs to fix small issues right away. Our trained technicians arrive with all necessary tools and equipment to handle common roadside problems efficiently and safely. This service is designed to save your time, reduce stress, and help you continue your journey as quickly as possible without unnecessary delays or costs.", 
    icon: Wrench,
    image: "/images/Roadside Assistance.jpg"
  },
  { 
    id: "breakdown-recovery",
    title: "Breakdown Recovery", 
    desc: "When your vehicle suddenly breaks down and cannot be driven, our breakdown recovery service is here to help you at any time. We understand that breakdowns can happen unexpectedly and in stressful situations, so our team responds quickly to ensure your safety and reduce your inconvenience. Once you contact us, we arrive at your location, carefully inspect the situation, and safely secure your vehicle for transport. We then recover and tow your vehicle to your preferred destination such as a repair workshop, garage, or home, depending on your choice. Whether your vehicle is facing a minor mechanical issue or a major engine failure, we handle every situation with care, proper equipment, and professional attention to ensure your vehicle is transported safely without any further damage. Our goal is to provide you with a smooth, stress-free recovery process from start to finish.", 
    icon: Car,
    image: "/images/Breakdown Recovery.jpg"
  },
  { 
    id: "accident-assistance",
    title: "Accident Assistance", 
    desc: "In the unfortunate event of a road accident, our team provides immediate and reliable assistance to help you in a stressful situation. As soon as you contact us, we quickly reach the accident location to ensure your safety and remove the vehicle from the scene in a careful and controlled manner. We then securely transport your vehicle to your preferred destination such as a repair workshop, garage, or safe storage location, depending on your requirement. Our trained drivers handle accident recovery with full professionalism, care, and sensitivity to avoid any further damage to the vehicle. We also assist with basic documentation support and work with insurance-related requirements to make the process smoother and less stressful for you. Our main goal is to ensure fast response, safe recovery, and complete support during such difficult situations.", 
    icon: AlertTriangle,
    image: "/images/Accident Assistance.jpg"
  },
  { 
    id: "flat-tire-help",
    title: "Flat Tire Help", 
    desc: "A flat tire can happen anytime and can stop your journey unexpectedly, but our flat tire help service is designed to get you moving again as quickly and safely as possible. When you contact us, our team immediately comes to your location and first checks your situation to decide the best solution. If you have a usable spare tire, our technicians quickly replace the flat tire on the spot using professional tools, ensuring the job is done safely and correctly so you can continue your journey without delay. If the tire is badly damaged or there is no spare available, we can also tow your vehicle to the nearest tire shop or repair center of your choice. Before leaving, we also make sure your spare tire (if used or available) is safe and properly fitted for driving. Our goal is to provide fast, reliable, and stress-free assistance so you are never stuck for long because of a flat tire.", 
    icon: CircleDot,
    image: "/images/Flat Tire Help.jpg"
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
                  className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-lg"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="feature-icon mb-4">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed text-justify">{service.desc}</p>
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
