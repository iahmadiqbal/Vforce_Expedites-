import { Link } from "react-router-dom";
import { Phone, Truck, CheckCircle } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "Request a Service",
    desc: "Contact us via our online form or give us a call. Tell us what you need and where you are.",
  },
  {
    num: "2",
    icon: Truck,
    title: "We Assign a Vehicle",
    desc: "The nearest available truck is assigned immediately and dispatched to your location.",
  },
  {
    num: "3",
    icon: CheckCircle,
    title: "Track & Complete Job",
    desc: "Service is completed quickly and efficiently. Your satisfaction is our priority.",
  },
];

const HowItWorks = () => (
  <div className="pt-[60px]">
    <HeroBanner
      image={heroHome}
      title="How It Works"
      subtitle="Simple, fast, and reliable — getting help has never been easier"
      compact
    />

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {step.num}
              </div>
              <step.icon size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <Link to="/contact" className="btn-accent text-lg py-3 px-8">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default HowItWorks;
