import heroEmergency from "@/assets/hero-emergency.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const BreakdownRecovery = () => (
  <ServicePageLayout
    image={heroEmergency}
    title="Breakdown Recovery"
    subtitle="Complete vehicle recovery support"
    description="Complete recovery when your vehicle breaks down. Safe transport to your preferred garage with zero damage."
    features={[
      { text: "Full vehicle recovery" },
      { text: "Safe and damage-free transport" },
      { text: "Heavy and light vehicle support" },
      { text: "Insurance-friendly service" },
    ]}
    ctaText="Vehicle Broken Down? We'll Recover It"
  />
);

export default BreakdownRecovery;
