import { Target, Eye, Clock, Zap, DollarSign, Shield } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";

const whyUs = [
  { 
    icon: Clock, 
    title: "24/7 Availability", 
    desc: "Emergencies happen anytime. We're available 24/7, including weekends and holidays. One call and help is on the way—you're never left stranded.",
    image: "/images/Emergency_Services.jpeg",
    animation: "fade-right"
  },
  { 
    icon: Zap, 
    title: "Fast Response Time", 
    desc: "Every minute counts. Our strategically positioned fleet and efficient dispatch get us to you quickly, minimizing your wait time.",
    image: "/images/Fast_Response_Time.jpeg",
    animation: "fade-left"
  },
  { 
    icon: DollarSign, 
    title: "Affordable Pricing", 
    desc: "Quality service at fair prices. No hidden charges—we explain costs upfront so you know exactly what you're paying for.",
    image: "/images/affordable_price.jpeg",
    animation: "fade-right"
  },
  { 
    icon: Shield, 
    title: "Professional Service", 
    desc: "Fully trained, licensed, and insured team. We handle every vehicle with care using modern equipment and proper safety procedures.",
    image: "/images/Professional_Service.jpeg",
    animation: "fade-left"
  },
];

const About = () => (
  <div className="pt-[64px]">
    <HeroBanner image={heroHome} title="About Us" subtitle="Learn more about Vforce Xpedites" compact />

    {/* Who We Are */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              We're a professional emergency towing and transport service in Canada. With years of experience, we've built a reputation for fast, reliable service you can trust. Our trained team is available 24/7 with modern equipment to handle any roadside emergency or transport need safely and efficiently.
            </p>
          </div>
          <div data-aos="fade-left">
            <img 
              src="/images/Who We Are.jfif" 
              alt="Who We Are"
              className="w-full h-[300px] md:h-[400px] object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-light-gray-bg">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="relative p-10 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            data-aos="fade-up"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-action/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-action/10 text-red-action flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                To provide fast, reliable emergency towing and transport services you can depend on. We're available 24/7 with quick response times and safe, efficient service at fair prices. Integrity and customer satisfaction drive everything we do.
              </p>
            </div>
          </div>
          
          <div 
            className="relative p-10 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-yellow/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                To become Canada's most trusted towing and transport provider, known for consistent quality and reliability. We aim to set new industry standards through excellence, transparency, and customer satisfaction—becoming the first name people think of when they need help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Reliable towing and transport with quick response times and professional care. We prioritize your safety and peace of mind in every job.
        </p>
        
        <div className="space-y-16">
          {whyUs.map((item, i) => (
            <div 
              key={i} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div 
                className={`${i % 2 === 1 ? 'lg:order-2' : ''} overflow-hidden rounded-lg`}
                data-aos={item.animation}
                data-aos-duration="1000"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-[300px] md:h-[400px] object-contain"
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
                <div className="w-20 h-20 rounded-full bg-red-action/10 text-red-action flex items-center justify-center mb-6">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
