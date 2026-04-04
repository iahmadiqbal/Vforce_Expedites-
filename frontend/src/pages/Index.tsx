import { Link } from "react-router-dom";
import { Phone, Clock, Zap, DollarSign, Shield, Truck, Package, Wrench, MapPin } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import heroHome from "@/assets/hero-home.jpg";
import heroEmergency from "@/assets/hero-emergency.jpg";
import heroTransport from "@/assets/hero-transport.jpg";

const services = [
  { 
    title: "Emergency Services", 
    desc: "24/7 emergency towing and roadside assistance for any situation. Our professional team is always ready to help you when you're stranded. Fast vehicle pickup and transport to your desired location with care and efficiency.", 
    link: "/emergency-services", 
    icon: Truck,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
  },
  { 
    title: "Transport & Moving", 
    desc: "Reliable transport and moving solutions for residential and commercial needs. We handle your belongings with utmost care, ensuring safe and secure delivery. From furniture to business logistics, we've got you covered.", 
    link: "/transport-moving", 
    icon: Package,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop"
  },
  { 
    title: "Roadside Assistance", 
    desc: "Battery jump starts, flat tires, lockouts and more. Quick help on the spot to get you back on the road. Our experienced technicians carry all necessary tools to handle minor repairs and emergencies efficiently.", 
    link: "/emergency-services#roadside-assistance", 
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop"
  },
  { 
    title: "Local Delivery", 
    desc: "Fast and secure local delivery services for your packages. Same-day delivery available for urgent shipments. We ensure your items reach their destination safely and on time, every time with professional handling.", 
    link: "/transport-moving#same-day-delivery", 
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop"
  },
];

const whyUs = [
  { 
    icon: Clock, 
    title: "24/7 Availability", 
    desc: "We understand that emergencies don't follow a schedule. That's why our team is available round-the-clock, 365 days a year. Whether it's midnight or a holiday, we're just one call away to help you.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop",
    animation: "fade-right"
  },
  { 
    icon: Zap, 
    title: "Fast Response Time", 
    desc: "Time is critical in emergency situations. Our strategically located fleet and efficient dispatch system ensure we reach you quickly. We pride ourselves on being the fastest response team in the region.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    animation: "fade-left"
  },
  { 
    icon: DollarSign, 
    title: "Affordable Pricing", 
    desc: "Quality service doesn't have to break the bank. We offer competitive rates with complete transparency - no hidden fees, no surprises. Get professional service at prices that respect your budget.",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=600&fit=crop",
    animation: "fade-right"
  },
  { 
    icon: Shield, 
    title: "Professional Service", 
    desc: "Our team consists of trained, licensed, and insured professionals who treat your vehicle with care. With years of experience and state-of-the-art equipment, we deliver service you can trust.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
    animation: "fade-left"
  },
];

const Index = () => (
  <div className="pt-[64px]">
    {/* Hero Slideshow */}
    <HeroSlideshow />

    {/* Why Choose Us */}
    <section className="section-padding bg-light-gray-bg">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          We're committed to providing the best towing and transport services with professionalism, reliability, and care
        </p>
        
        <div className="space-y-16">
          {whyUs.map((item, i) => (
            <div 
              key={i} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div 
                className={`${i % 2 === 1 ? 'lg:order-2' : ''} overflow-hidden rounded-lg shadow-xl`}
                data-aos={item.animation}
                data-aos-duration="1000"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-[350px] md:h-[400px] object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div 
                className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}
                data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="w-20 h-20 rounded-full bg-red-action/10 text-red-action flex items-center justify-center mb-6">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Comprehensive towing and transport solutions for all your needs
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
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 rounded-full bg-accent-yellow flex items-center justify-center">
                    <s.icon size={28} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
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
        <a href="tel:+14034623578" className="btn-primary text-lg py-3 px-8 inline-flex items-center gap-2 bg-white text-red-action hover:bg-gray-100">
          <Phone size={20} />
          Immediate Help
        </a>
      </div>
    </section>
  </div>
);

export default Index;
