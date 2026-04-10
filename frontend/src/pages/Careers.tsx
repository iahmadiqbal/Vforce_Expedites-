import { Link } from "react-router-dom";
import { Truck, Headphones, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";

const positions = [
  {
    icon: Truck,
    title: "Driver Operator",
    desc: "We are looking for skilled Driver Operator professionals who can safely operate tow trucks and transport vehicles in emergency situations. You will respond to service calls, drive to customer locations, and safely recover or transport vehicles to their required destination. Candidates must have a valid commercial driver's license with a clean driving record and hands-on experience with towing equipment. Your main responsibility is to ensure every vehicle is handled safely and every customer receives reliable and professional service.",
    image: "/images/DriverOperator.jpg"
  },
  {
    icon: Headphones,
    title: "Customer Support Executive",
    desc: "We are seeking a Customer Support Executive to handle incoming emergency calls and coordinate dispatches with our drivers. You will be the first point of contact for customers in need, providing excellent service during stressful situations. Strong communication and multitasking skills are required to manage schedules and track service requests. Your role is critical in maintaining customer satisfaction and ensuring smooth operations between customers and our field team for timely response.",
    image: "/images/Customer Support Executive.jpg"
  },
  {
    icon: Users,
    title: "Fleet Coordinator",
    desc: "We are looking for a Fleet Coordinator to manage our fleet operations and ensure all vehicles are road-ready at all times. You will schedule regular maintenance, coordinate logistics, and oversee vehicle assignments throughout the day. Experience in fleet management is preferred for this position. You will also manage inventory of equipment and optimize routes for maximum efficiency. Your goal is to keep our fleet running smoothly and ensure our team can respond to customer needs quickly.",
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
          We are always looking for motivated, responsible, and skilled individuals to join our team and become part of a fast-growing towing and transport service provider. If you are passionate about helping people, working in real-world emergency situations, and delivering reliable service, then this is the right place for you. We value teamwork, professionalism, and dedication, and we provide a supportive work environment where you can grow your skills and build your career in the transport and roadside assistance industry. Whether you have experience as a driver, technician, or customer support representative, we welcome individuals who are ready to learn, improve, and contribute to providing fast and reliable service to our customers every day.
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
