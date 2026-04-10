import { Link } from "react-router-dom";
import { Truck, Headphones, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";

const positions = [
  {
    icon: Truck,
    title: "Driver Operator",
    desc: "Skilled drivers needed to safely operate tow trucks and transport vehicles. Must have a valid commercial license with clean record and towing experience. Ensure safe vehicle handling and professional customer service.",
    image: "/images/DriverOperator.jpg"
  },
  {
    icon: Headphones,
    title: "Customer Support Executive",
    desc: "Handle emergency calls and coordinate dispatches. Be the first point of contact for customers in need. Strong communication and multitasking skills required to manage schedules and ensure timely response.",
    image: "/images/Customer Support Executive.jpg"
  },
  {
    icon: Users,
    title: "Fleet Coordinator",
    desc: "Manage fleet operations and keep all vehicles road-ready. Schedule maintenance, coordinate logistics, and oversee assignments. Fleet management experience preferred. Optimize routes for maximum efficiency.",
    image: "/images/Fleet Coordinator.jpg"
  },
];

const Careers = () => (
  <div className="pt-[64px]">
    <HeroBanner image={heroHome} title="Careers" subtitle="Join our team and make a difference" compact />

    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-4">Join Our Team</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Looking for motivated individuals to join our growing team. If you're passionate about helping people and delivering reliable service, we want you. We value teamwork and professionalism, offering a supportive environment to grow your career in transport and roadside assistance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((pos, i) => (
            <div 
              key={i} 
              className="service-card overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img 
                  src={pos.image} 
                  alt={pos.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{pos.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed flex-grow">{pos.desc}</p>
                <Link to="/contact" className="btn-accent text-sm py-2 px-4 w-full justify-center mt-auto">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Careers;
