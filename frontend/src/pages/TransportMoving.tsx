import { Link } from "react-router-dom";
import { Home, Sofa, Zap, Package, Building } from "lucide-react";
import heroTransport from "@/assets/hero-transport.jpg";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";

const services = [
  { title: "Local Moving Services", desc: "House shifting and local relocation services.", link: "/transport/local-moving", icon: Home },
  { title: "Furniture & Item Shifting", desc: "Safe handling and transport of heavy items and furniture.", link: "/transport/furniture-shifting", icon: Sofa },
  { title: "Same-Day Delivery", desc: "Fast delivery service for urgent shipments.", link: "/transport/same-day-delivery", icon: Zap },
  { title: "Small Load Transport", desc: "Cost-effective transport for small goods.", link: "/transport/small-load-transport", icon: Package },
  { title: "Business Logistics Support", desc: "Regular transport services and logistics for businesses.", link: "/transport/business-logistics", icon: Building },
];

const TransportMoving = () => (
  <div>
    <HeroBanner
      image={heroTransport}
      title="Transport & Moving Services"
      subtitle="Reliable transport solutions for every need"
      compact
    />

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card p-6">
              <div className="feature-icon mb-4">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
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

export default TransportMoving;
