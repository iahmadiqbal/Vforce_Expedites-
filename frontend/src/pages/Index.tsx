import { Link } from "react-router-dom";
import {
  Phone,
  Clock,
  Zap,
  DollarSign,
  Shield,
  Truck,
  Package,
  Wrench,
  MapPin,
  AlertCircle,
  Home,
  TruckIcon,
  PackageCheck,
} from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import heroHome from "@/assets/hero-home.jpg";
import heroEmergency from "@/assets/hero-emergency.jpg";
import heroTransport from "@/assets/hero-transport.jpg";

const services = [
  {
    title: "Emergency Services",
    desc: "Our emergency service is available 24/7 for any roadside problem or unexpected vehicle breakdown. If your car stops working, gets damaged, or you are stuck in an unsafe situation, you can contact us anytime. Once we receive your call, our system immediately locates the nearest available team and sends them to your location without delay. We arrive as quickly as possible, assess the situation, and safely tow your vehicle to your preferred location such as a garage, home, or service center. This service is specially designed to help you in urgent situations where fast response and safety are most important.",
    link: "/emergency-services",
    icon: AlertCircle,
    image: "/images/Emergency Services.jpg",
  },
  {
    title: "Transport & Moving",
    desc: "Our transport and moving service is built for both personal and business needs. Whether you are shifting your house, moving office equipment, or transporting heavy furniture, we handle everything carefully from start to finish. All items are properly packed, loaded, and secured inside the vehicle to prevent any damage during transportation. We also provide support for small businesses that need regular delivery or logistics support. From pickup to final delivery, we make sure everything is handled professionally, safely, and on time.",
    link: "/transport-moving",
    icon: Home,
    image: "/images/Transport & Moving.jpg",
  },
  {
    title: "Roadside Assistance",
    desc: "If your vehicle has a minor issue and does not require towing, our roadside assistance team is ready to help you directly at your location. This includes battery jump-starting when your car won't start, flat tire replacement, vehicle lockout assistance if keys are inside, and minor quick fixes to get your vehicle running again. Our trained technicians arrive with the necessary tools to solve the problem on the spot whenever possible, saving you time and avoiding unnecessary towing costs. This service is ideal for quick roadside problems that need immediate attention.",
    link: "/emergency-services#roadside-assistance",
    icon: Wrench,
    image: "/images/long-shot-couple-repairing-car.jpg",
  },
  {
    title: "Local Delivery",
    desc: "Our local delivery service provides fast, safe, and reliable transportation of packages, parcels, and urgent items within your city or nearby areas. Whether it is a personal delivery or business shipment, we ensure every item is handled carefully and delivered on time. We also offer same-day delivery for urgent requests where speed is important. Each package is properly managed from pickup to drop-off to ensure it reaches its destination safely without damage or delay. This service is perfect for both individuals and businesses needing quick delivery solutions.",
    link: "/transport-moving#same-day-delivery",
    icon: PackageCheck,
    image: "/images/full-shot-delivery-woman-car.jpg",
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Emergencies don't follow a schedule — and neither do we. Our team is available 24 hours a day, 7 days a week, including weekends and holidays, to provide immediate assistance whenever you need it. Whether you're stuck on the road late at night or facing an unexpected issue during the day, we respond quickly and efficiently. With just one call, help is always within reach, ensuring you're never left stranded.",
    image: "/images/247 Availability.jpg",
    animation: "fade-right",
  },
  {
    icon: Zap,
    title: "Fast Response Time",
    desc: "In emergency situations, every minute matters. Our strategically positioned fleet and efficient dispatch system allow us to respond quickly to your location without unnecessary delays. As soon as you contact us, our team takes immediate action to reach you as fast as possible. We focus on minimizing your waiting time and getting you back on track safely and efficiently.",
    image: "/images/FastResponseTime.jpg",
    animation: "fade-left",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "We believe quality service should be affordable for everyone. That's why we offer fair and competitive prices that are easy to understand. There are no hidden charges or surprise costs — you only pay for the service you receive. Before we start, we clearly explain the cost so you know exactly what you are paying for. Our goal is to give you reliable service at a price that fits your budget without any confusion.",
    image: "/images/Affordable Pricing.jpg",
    animation: "fade-right",
  },
  {
    icon: Shield,
    title: "Professional Service",
    desc: "Our team is fully trained, licensed, and insured to provide safe and reliable service. We handle every vehicle with care and follow proper safety procedures in every job. With years of experience and modern equipment, we make sure your vehicle is treated properly from start to finish. You can trust us to deliver professional and secure service every time.",
    image: "/images/Professional Service.jpg",
    animation: "fade-left",
  },
];

const Index = () => (
  <div className="pt-[64px]">
    {/* Hero Slideshow */}
    <HeroSlideshow />

    {/* Why Choose Us */}
    <section className="section-padding bg-light-gray-bg">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Us
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg text-justify">
          We are committed to delivering reliable and efficient towing and transport services with a strong focus on customer satisfaction. Whether it's an emergency or a scheduled service, our team ensures quick response times, professional handling, and complete peace of mind. We understand how stressful roadside situations can be, which is why we prioritize safety, transparency, and care in every job we handle.
        </p>

        <div className="space-y-16">
          {whyUs.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div
                className={`${i % 2 === 1 ? "lg:order-2" : ""} overflow-hidden rounded-lg shadow-xl`}
                data-aos={item.animation}
                data-aos-duration="1000"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] md:h-[400px] object-cover object-center hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div
                className={`${i % 2 === 1 ? "lg:order-1" : ""}`}
                data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="w-20 h-20 rounded-full bg-red-action/10 text-red-action flex items-center justify-center mb-6">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          We provide complete towing, transport, roadside assistance, and delivery solutions designed to handle emergencies and daily needs with speed, safety, and reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card overflow-hidden group hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed text-justify">
                  {s.desc}
                </p>
                <Link to="/contact" className="btn-accent text-sm py-2 px-4">
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="bg-gradient-to-r from-red-action to-orange-cta py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Need Immediate Assistance? We're Available 24/7
        </h2>
        <a
          href="tel:+14034623578"
          className="btn-primary text-lg py-3 px-8 inline-flex items-center gap-2 bg-white text-red-action hover:bg-gray-100"
        >
          <Phone size={20} />
          Immediate Help
        </a>
      </div>
    </section>
  </div>
);

export default Index;
