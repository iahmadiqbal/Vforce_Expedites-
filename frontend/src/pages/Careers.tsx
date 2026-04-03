import { Link } from "react-router-dom";
import { Truck, Headphones, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";

const positions = [
  {
    icon: Truck,
    title: "Driver / Operator",
    desc: "Operate tow trucks and transport vehicles. Must have valid commercial driver's license and experience with towing equipment.",
  },
  {
    icon: Headphones,
    title: "Customer Support Executive",
    desc: "Handle incoming calls, coordinate dispatches, and provide excellent customer service. Strong communication skills required.",
  },
  {
    icon: Users,
    title: "Fleet Coordinator",
    desc: "Manage fleet operations, schedule maintenance, and coordinate logistics. Experience in fleet management preferred.",
  },
];

const Careers = () => (
  <div className="pt-[60px]">
    <HeroBanner image={heroHome} title="Careers" subtitle="Join our team and make a difference" compact />

    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">Join Our Team</h2>
        <p className="text-center text-muted-foreground mb-12">
          We're always looking for talented and dedicated individuals to join Vforce Expedites.
        </p>

        <div className="space-y-6">
          {positions.map((pos, i) => (
            <div key={i} className="service-card p-6 flex flex-col sm:flex-row items-start gap-4">
              <div className="feature-icon shrink-0">
                <pos.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{pos.title}</h3>
                <p className="text-muted-foreground mb-4">{pos.desc}</p>
                <Link to="/contact" className="btn-accent text-sm py-2 px-4">
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
