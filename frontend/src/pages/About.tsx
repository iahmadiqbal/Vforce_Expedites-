import { Target, Eye, Clock, Zap, DollarSign, Shield } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";

const whyUs = [
  { 
    icon: Clock, 
    title: "24/7 Availability", 
    desc: "Emergencies don't follow a schedule — and neither do we. Our team is available 24 hours a day, 7 days a week, including weekends and holidays, to provide immediate assistance whenever you need it. Whether you're stuck on the road late at night or facing an unexpected issue during the day, we respond quickly and efficiently. With just one call, help is always within reach, ensuring you're never left stranded.",
    image: "/images/24  available.jpg",
    animation: "fade-right"
  },
  { 
    icon: Zap, 
    title: "Fast Response Time", 
    desc: "In emergency situations, every minute matters. Our strategically positioned fleet and efficient dispatch system allow us to respond quickly to your location without unnecessary delays. As soon as you contact us, our team takes immediate action to reach you as fast as possible. We focus on minimizing your waiting time and getting you back on track safely and efficiently.",
    image: "/images/Fast Response Time.jpg",
    animation: "fade-left"
  },
  { 
    icon: DollarSign, 
    title: "Affordable Pricing", 
    desc: "We believe quality service should be affordable for everyone. That's why we offer fair and competitive prices that are easy to understand. There are no hidden charges or surprise costs — you only pay for the service you receive. Before we start, we clearly explain the cost so you know exactly what you are paying for. Our goal is to give you reliable service at a price that fits your budget without any confusion.",
    image: "/images/Affordable Pricing.jpg",
    animation: "fade-right"
  },
  { 
    icon: Shield, 
    title: "Professional Service", 
    desc: "Our team is fully trained, licensed, and insured to provide safe and reliable service. We handle every vehicle with care and follow proper safety procedures in every job. With years of experience and modern equipment, we make sure your vehicle is treated properly from start to finish. You can trust us to deliver professional and secure service every time.",
    image: "/images/Professional Service.jpg",
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
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4 text-justify">
              We are a professional emergency towing and transport service provider based in Orangeville, Ontario, dedicated to helping people in roadside emergencies and transport needs. With years of experience in the industry, we have built a strong reputation for delivering fast, reliable, and professional services that people can trust in urgent situations. Our team is made up of trained and skilled professionals who are available 24/7 to assist you anytime, whether it is day or night, weekday or holiday. We combine modern towing equipment, advanced tools, and efficient service methods with hands-on experience to ensure every job is handled safely and correctly. From emergency towing and roadside assistance to transport and recovery services, our focus is always on providing quick response, safe handling, and complete customer satisfaction in every situation.
            </p>
          </div>
          <div data-aos="fade-left">
            <img 
              src="/images/Who We Are.jpg" 
              alt="Who We Are"
              className="w-full h-[300px] md:h-[400px] object-cover object-center rounded-lg shadow-xl"
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
              <p className="text-muted-foreground leading-relaxed text-justify">
                Our mission is to provide fast, reliable, and professional emergency towing and transport services that people can depend on in any situation. We are committed to being available whenever you need help the most, especially during roadside emergencies, breakdowns, or urgent transport needs. Our goal is to respond quickly, reach your location without unnecessary delays, and provide safe and efficient service from start to finish. We focus on delivering high-quality service at fair and affordable prices while maintaining complete transparency, so you always know what to expect without hidden charges or confusion. Integrity, honesty, and customer satisfaction are at the core of everything we do, and we continuously work to improve our response time, service quality, and overall customer experience to make sure you always receive dependable support when it matters most.
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
              <p className="text-muted-foreground leading-relaxed text-justify">
                Our vision is to become the most trusted and dependable towing and transport service provider in Ontario, known for delivering consistent, high-quality, and reliable assistance in every situation. We aim to build long-term trust with our customers by always providing professional service, quick response times, and safe handling of every vehicle and transport job. Our goal is to set a new standard in the industry by focusing on excellence, transparency, and customer satisfaction at every step of the service process. We continuously work to improve our systems, training, and equipment so that we can offer the most efficient and stress-free experience possible. Ultimately, we want to be the first name people think of when they need emergency towing, roadside assistance, or transport services they can truly rely on.
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
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg text-justify">
          We are committed to delivering reliable and efficient towing and transport services with a strong focus on customer satisfaction. Whether it's an emergency or a scheduled service, our team ensures quick response times, professional handling, and complete peace of mind. We understand how stressful roadside situations can be, which is why we prioritize safety, transparency, and care in every job we handle.
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
                  className="w-full h-[300px] md:h-[400px] object-cover object-center hover:scale-110 transition-transform duration-700"
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
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
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
