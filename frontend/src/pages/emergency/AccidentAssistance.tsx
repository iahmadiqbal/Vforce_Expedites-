import heroEmergency from "@/assets/hero-emergency.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const AccidentAssistance = () => (
  <ServicePageLayout
    image={heroEmergency}
    title="Accident Assistance"
    subtitle="Immediate help during accidents"
    description="Immediate help at accident scenes. Safe vehicle removal with coordination and safety protocols followed."
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
