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
    desc: "24/7 roadside help for breakdowns and accidents. We locate the nearest team and reach you fast to safely tow your vehicle wherever you need.",
    link: "/emergency-services",
    icon: AlertCircle,
    image: "/images/Emergency Services.jpg",
  },
  {
    title: "Transport & Moving",
    desc: "Safe transport for home or business moves. We handle packing, loading, and delivery with care—perfect for furniture, equipment, and regular logistics needs.",
    link: "/transport-moving",
    icon: Home,
    image: "/images/Transport & Moving.jpg",
  },
  {
    title: "Roadside Assistance",
    desc: "Quick on-site help for battery jumps, flat tires, lockouts, and minor fixes. Our technicians solve problems fast so you avoid towing costs.",
    link: "/emergency-services#roadside-assistance",
    icon: Wrench,
    image: "/images/long-shot-couple-repairing-car.jpg",
  },
  {
    title: "Local Delivery",
    desc: "Fast and reliable delivery for packages and urgent items. Same-day service available. Every item handled with care from pickup to drop-off.",
    link: "/transport-moving#same-day-delivery",
    icon: PackageCheck,
    image: "/images/full-shot-delivery-woman-car.jpg",
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Emergencies happen anytime. We're available 24/7, including weekends and holidays. One call and help is on the way—you're never left stranded.",
    image: "/images/247 Availability.jpg",
    animation: "fade-right",
  },
  {
    icon: Zap,
    title: "Fast Response Time",
    desc: "Every minute counts. Our strategically positioned fleet and efficient dispatch get us to you quickly, minimizing your wait time.",
    image: "/images/FastResponseTime.jpg",
    animation: "fade-left",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Quality service at fair prices. No hidden charges—we explain costs upfront so you know exactly what you're paying for.",
    image: "/images/Affordable Pricing.jpg",
    animation: "fade-right",
  },
  {
    icon: Shield,
    title: "Professional Service",
    desc: "Fully trained, licensed, and insured team. We handle every vehicle with care using modern equipment and proper safety procedures.",
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
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Reliable towing and transport with quick response times and professional care. We prioritize your safety and peace of mind in every job.
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
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
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
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Complete towing, transport, roadside assistance, and delivery solutions for emergencies and daily needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card overflow-hidden group hover:shadow-2xl transition-all duration-300 grid grid-rows-[250px_auto_auto_auto]"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 pb-2">
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              </div>
              <div className="px-6 pb-4">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="px-6 pb-6">
                <Link to="/contact" className="btn-accent text-sm py-2 px-4 inline-block">
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
