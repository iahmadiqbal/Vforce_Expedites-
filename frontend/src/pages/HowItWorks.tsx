import { Link } from "react-router-dom";
import { Phone, Truck, CheckCircle } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "Request a Service",
    desc: "Contact us anytime via our online form or call 24/7. Tell us what you need—towing, roadside help, transport, or delivery—and share your location. We'll immediately dispatch the nearest available vehicle to assist you.",
    image: "/images/Request a Service.jfif"
  },
  {
    num: "2",
    icon: Truck,
    title: "We Assign a Vehicle",
    desc: "Our system instantly assigns the nearest vehicle based on your location for the fastest response. Using GPS tracking and efficient dispatch, we minimize wait times and get help to you quickly.",
    image: "/images/We Assign a Vehicle.jfif"
  },
  {
    num: "3",
    icon: CheckCircle,
    title: "Track & Complete Job",
    desc: "We track the entire process to ensure smooth, safe service. Our trained team handles your vehicle with care from start to finish, keeping you informed until the job is complete.",
    image: "/images/Track & Complete Job.jfif"
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
                className={`${i % 2 === 1 ? 'lg:order-2' : ''} overflow-hidden rounded-lg`}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
              >
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-[300px] md:h-[450px] object-contain"
                  loading="lazy"
                />
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 p-12 bg-gradient-to-r from-red-action to-orange-cta rounded-lg" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Contact us now and experience our fast, professional service.
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
