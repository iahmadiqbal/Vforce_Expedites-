import heroEmergency from "@/assets/hero-emergency.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const TowingServices = () => (
  <ServicePageLayout
    image={heroEmergency}
    title="24/7 Towing Services"
    subtitle="Emergency towing anytime, anywhere"
    description="Round-the-clock emergency towing for all vehicle types. Fast response to safely tow your vehicle wherever you need it."
    features={[
      { text: "Available 24 hours, 7 days a week" },
      { text: "Fast response within minutes" },
      { text: "All vehicle types supported" },
      { text: "Safe and secure towing" },
    ]}
    ctaText="Need a Tow? Call Us Now"
  />
);

export default TowingServices;
