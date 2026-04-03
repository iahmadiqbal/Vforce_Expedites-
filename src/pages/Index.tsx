import { Link } from "react-router-dom";
import { Phone, Clock, Zap, DollarSign, Shield, Truck, Package, Wrench, MapPin } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";

const services = [
  { title: "Emergency Services", desc: "24/7 emergency towing and roadside assistance for any situation.", link: "/emergency-services", icon: Truck },
  { title: "Transport & Moving", desc: "Reliable transport and moving solutions for residential and commercial needs.", link: "/transport-moving", icon: Package },
  { title: "Roadside Assistance", desc: "Battery jump starts, flat tires, lockouts and more.", link: "/emergency/roadside-assistance", icon: Wrench },
  { title: "Local Delivery", desc: "Fast and secure local delivery services for your packages.", link: "/contact", icon: MapPin },
];

const whyUs = [
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock service, any day of the year." },
  { icon: Zap, title: "Fast Response Time", desc: "We arrive quickly when you need us most." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates with no hidden charges." },
  { icon: Shield, title: "Professional Service", desc: "Trained professionals you can trust." },
];

const Index = () => (
  <div>
    <HeroBanner
      image={heroHome}
      title="24/7 Emergency Towing & Transport Services"
      subtitle="Fast, Reliable, and Always Ready When You Need Us"
      showButtons
    />

    {/* Why Choose Us */}
    <section className="section-padding bg-card">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <div key={i} className="text-center p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-shadow">
              <div className="feature-icon mx-auto mb-4">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card p-6 text-center">
              <div className="feature-icon mx-auto mb-4">
                <s.icon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <Link to={s.link} className="btn-accent text-sm py-2 px-4">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
  </div>
);

export default Index;
