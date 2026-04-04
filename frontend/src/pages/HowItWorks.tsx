import { Link } from "react-router-dom";
import { Phone, Truck, CheckCircle, ArrowRight } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "Request a Service",
    desc: "Contact us via our online form or give us a call. Tell us what you need and where you are. Our friendly team is ready to assist you 24/7 with any emergency or scheduled service.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=600&fit=crop"
  },
  {
    num: "2",
    icon: Truck,
    title: "We Assign a Vehicle",
    desc: "The nearest available truck is assigned immediately and dispatched to your location. Our advanced GPS tracking system ensures the fastest possible response time to get you help when you need it most.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop"
  },
  {
    num: "3",
    icon: CheckCircle,
    title: "Track & Complete Job",
    desc: "Service is completed quickly and efficiently. Your satisfaction is our priority. Our professional team ensures your vehicle is handled with care and the job is done right the first time.",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&h=600&fit=crop"
  },
];

const HowItWorks = () => (
  <div className="pt-[64px]">
    <HeroBanner
      image={heroHome}
      title="How It Works"
      subtitle="Simple, fast, and reliable — getting help has never been easier"
      compact
    />

    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="space-y-20">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div 
                className={`${i % 2 === 1 ? 'lg:order-2' : ''} relative overflow-hidden rounded-lg shadow-xl`}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
              >
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-[400px] md:h-[450px] object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-red-action text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  {step.num}
                </div>
              </div>
              
              {/* Content */}
              <div 
                className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}
                data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="w-20 h-20 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center mb-6">
                  <step.icon size={40} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="flex items-center gap-2 text-red-action font-semibold">
                    <span>Next Step</span>
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 p-12 bg-gradient-to-r from-red-action to-orange-cta rounded-lg" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Don't wait in an emergency. Contact us now and experience our fast, professional service.
          </p>
          <Link to="/contact" className="btn-primary text-lg py-3 px-8 bg-white text-red-action hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default HowItWorks;
