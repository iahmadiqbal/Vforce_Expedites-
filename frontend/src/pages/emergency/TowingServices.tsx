import heroEmergency from "@/assets/hero-emergency.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const TowingServices = () => (
  <ServicePageLayout
    image={heroEmergency}
    title="24/7 Towing Services"
    subtitle="Emergency towing anytime, anywhere"
    description="We provide round-the-clock emergency towing services for all vehicle types. Whether you're stranded on the highway or in a parking lot, our professional team will be there fast to safely tow your vehicle to your desired destination."
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
