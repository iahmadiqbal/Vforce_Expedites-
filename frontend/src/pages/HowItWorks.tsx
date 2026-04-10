import { Link } from "react-router-dom";
import { Phone, Truck, CheckCircle, ArrowRight } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "Request a Service",
    desc: "To request our service, you can easily contact us through our online form or by giving us a direct call anytime, 24/7. Simply tell us what type of service you need—whether it is towing, roadside assistance, transport, or delivery—and share your exact location so we can reach you quickly. Once we receive your request, our team immediately reviews the details and dispatches the nearest available vehicle or technician to assist you without delay. Our support team is always available to guide you, answer your questions, and ensure your request is handled smoothly from start to finish. Whether it is an emergency situation or a scheduled service, we are ready to help you at any time with fast and reliable support.",
    image: "/images/Request a Service.jpg"
  },
  {
    num: "2",
    icon: Truck,
    title: "We Assign a Vehicle",
    desc: "Once we receive your request, we immediately assign the nearest available vehicle to ensure the fastest possible response. Our system quickly identifies the closest driver or truck based on your location so help can reach you without unnecessary delay. After assignment, the vehicle is dispatched right away to your location, and our team stays in coordination to ensure smooth and timely service. We use an efficient dispatch system and GPS tracking to reduce waiting time and improve accuracy in reaching you as fast as possible. Our main focus is to provide quick response, reliable assistance, and stress-free support whenever you need help on the road or for transport services.",
    image: "/images/We Assign a Vehicle.jpg"
  },
  {
    num: "3",
    icon: CheckCircle,
    title: "Track & Complete Job",
    desc: "Once your service request is assigned and the vehicle reaches your location, our team carefully tracks the entire process to ensure everything is handled smoothly and without delays. We focus on completing the job quickly, safely, and in a fully professional manner. Our trained staff makes sure your vehicle is handled with proper care at every step, whether it is towing, roadside assistance, or transport. From start to finish, we follow a clear process to ensure the job is done correctly the first time without unnecessary delays or repeated issues. Your satisfaction and safety are our top priorities, and we make sure you are informed and supported until the service is fully completed and your problem is resolved.",
    image: "/images/Track & Complete Job.jpg"
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
                  className="w-full h-[300px] md:h-[450px] object-cover object-center hover:scale-110 transition-transform duration-700"
                  loading="lazy"
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
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 text-justify">
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
