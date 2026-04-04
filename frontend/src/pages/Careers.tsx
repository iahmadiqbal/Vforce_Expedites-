import { Link } from "react-router-dom";
import { Truck, Headphones, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";

const positions = [
  {
    icon: Truck,
    title: "Driver / Operator",
    desc: "Operate tow trucks and transport vehicles safely and efficiently. Must have valid commercial driver's license (CDL) with clean driving record and hands-on experience with towing equipment. Responsibilities include vehicle recovery, roadside assistance, and ensuring customer satisfaction during emergency situations.",
    image: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?w=800&h=500&fit=crop"
  },
  {
    icon: Headphones,
    title: "Customer Support Executive",
    desc: "Handle incoming emergency calls, coordinate dispatches with drivers, and provide excellent customer service during stressful situations. Strong communication and multitasking skills required. You'll be the first point of contact for customers in need, managing schedules and ensuring timely response to all service requests.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop"
  },
  {
    icon: Users,
    title: "Fleet Coordinator",
    desc: "Manage fleet operations, schedule regular maintenance, coordinate logistics, and ensure all vehicles are road-ready. Experience in fleet management preferred. You'll oversee vehicle assignments, track maintenance schedules, manage inventory of equipment, and optimize routes for maximum efficiency and cost-effectiveness.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop"
  },
];

const Careers = () => (
  <div className="pt-[64px]">
    <HeroBanner image={heroHome} title="Careers" subtitle="Join our team and make a difference" compact />

    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-4">Join Our Team</h2>
        <p className="text-center text-muted-foreground mb-12">
          We're always looking for talented and dedicated individuals to join Vforce Expedites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((pos, i) => (
            <div 
              key={i} 
              className="service-card overflow-hidden group hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <img 
                  src={pos.image} 
                  alt={pos.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-12 h-12 rounded-full bg-accent-yellow flex items-center justify-center shadow-lg">
                    <pos.icon size={22} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{pos.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{pos.desc}</p>
                <Link to="/contact" className="btn-accent text-sm py-2 px-4 w-full justify-center">
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
