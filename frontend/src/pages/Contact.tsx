import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import HeroBanner from "@/components/HeroBanner";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-[64px]">
      <HeroBanner image={heroHome} title="Contact Us" subtitle="Get in touch with our team" compact />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                <button type="submit" className="btn-accent w-full justify-center text-lg py-3">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="feature-icon shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Address</h3>
                    <p className="text-muted-foreground">473033 Dufferin Country Road 11, Orangeville, ON</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="feature-icon shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 403-462-3578</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="feature-icon shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@vforceexpedites.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
