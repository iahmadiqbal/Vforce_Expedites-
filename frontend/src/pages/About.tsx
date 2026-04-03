import { Target, Eye, Clock, Zap, DollarSign, Shield } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";

const About = () => (
  <div>
    <HeroBanner image={heroHome} title="About Us" subtitle="Learn more about Vforce Expedites" compact />

    {/* Who We Are */}
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">Who We Are</h2>
        <p className="text-muted-foreground text-center leading-relaxed text-lg">
          Vforce Expedites is a leading emergency towing and transport service provider based in Orangeville, Ontario. 
          With years of experience in the industry, we've built a reputation for fast, reliable, and professional service. 
          Our team of trained professionals is available 24/7 to help you whenever you need us.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-lg bg-background border border-border text-center">
            <div className="feature-icon mx-auto mb-4">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide fast, reliable emergency towing and transport services that our customers can count on. 
              We aim to be there when you need us most, delivering professional service at affordable prices.
            </p>
          </div>
          <div className="p-8 rounded-lg bg-background border border-border text-center">
            <div className="feature-icon mx-auto mb-4">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the most trusted towing and transport service in Ontario, known for our reliability, 
              professionalism, and commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Clock, title: "24/7 Availability", desc: "We never close. Day or night, we're here for you." },
            { icon: Zap, title: "Fast Response", desc: "Quick dispatch with the fastest response times." },
            { icon: DollarSign, title: "Affordable Pricing", desc: "Transparent pricing with no hidden fees." },
            { icon: Shield, title: "Professional Team", desc: "Trained, licensed, and insured professionals." },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 border border-border rounded-lg">
              <div className="feature-icon mx-auto mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner bgColor="primary" />
  </div>
);

export default About;
