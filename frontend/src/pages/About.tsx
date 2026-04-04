import { Target, Eye, Clock, Zap, DollarSign, Shield } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";

const whyUs = [
  { 
    icon: Clock, 
    title: "24/7 Availability", 
    desc: "We understand that emergencies don't follow a schedule. That's why our team is available round-the-clock, 365 days a year. Whether it's midnight or a holiday, we're just one call away to help you.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop",
    animation: "fade-right"
  },
  { 
    icon: Zap, 
    title: "Fast Response Time", 
    desc: "Time is critical in emergency situations. Our strategically located fleet and efficient dispatch system ensure we reach you quickly. We pride ourselves on being the fastest response team in the region.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    animation: "fade-left"
  },
  { 
    icon: DollarSign, 
    title: "Affordable Pricing", 
    desc: "Quality service doesn't have to break the bank. We offer competitive rates with complete transparency - no hidden fees, no surprises. Get professional service at prices that respect your budget.",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=600&fit=crop",
    animation: "fade-right"
  },
  { 
    icon: Shield, 
    title: "Professional Service", 
    desc: "Our team consists of trained, licensed, and insured professionals who treat your vehicle with care. With years of experience and state-of-the-art equipment, we deliver service you can trust.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
    animation: "fade-left"
  },
];

const About = () => (
  <div className="pt-[64px]">
    <HeroBanner image={heroHome} title="About Us" subtitle="Learn more about Vforce Expedites" compact />

    {/* Who We Are */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              Vforce Expedites is a leading emergency towing and transport service provider based in Orangeville, Ontario. 
              With years of experience in the industry, we've built a reputation for fast, reliable, and professional service.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Our team of trained professionals is available 24/7 to help you whenever you need us. We combine cutting-edge 
              equipment with experienced personnel to deliver exceptional service every time.
            </p>
          </div>
          <div data-aos="fade-left">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop" 
              alt="Who We Are"
              className="w-full h-[350px] md:h-[400px] object-cover rounded-lg shadow-xl"
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
              <p className="text-muted-foreground leading-relaxed">
                To provide fast, reliable emergency towing and transport services that our customers can count on. 
                We aim to be there when you need us most, delivering professional service at affordable prices with 
                complete transparency and integrity.
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
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted towing and transport service in Ontario, known for our reliability, 
                professionalism, and unwavering commitment to customer satisfaction. We strive to set the industry 
                standard for excellence.
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
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          We're committed to providing the best towing and transport services with professionalism, reliability, and care
        </p>
        
        <div className="space-y-16">
          {whyUs.map((item, i) => (
            <div 
              key={i} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div 
                className={`${i % 2 === 1 ? 'lg:order-2' : ''} overflow-hidden rounded-lg shadow-xl`}
                data-aos={item.animation}
                data-aos-duration="1000"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-[350px] md:h-[400px] object-cover hover:scale-110 transition-transform duration-700"
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
