import heroEmergency from "@/assets/hero-emergency.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const AccidentAssistance = () => (
  <ServicePageLayout
    image={heroEmergency}
    title="Accident Assistance"
    subtitle="Immediate help during accidents"
    description="We provide immediate assistance at accident scenes. Our team safely removes and tows vehicles, coordinates with authorities, and ensures all safety protocols are followed."
    features={[
      { text: "Rapid accident response" },
      { text: "Safe vehicle removal" },
      { text: "Coordination with authorities" },
      { text: "Damage assessment support" },
    ]}
    ctaText="In an Accident? Call Us Now"
  />
);

export default AccidentAssistance;
