import heroEmergency from "@/assets/hero-emergency.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const BreakdownRecovery = () => (
  <ServicePageLayout
    image={heroEmergency}
    title="Breakdown Recovery"
    subtitle="Complete vehicle recovery support"
    description="When your vehicle breaks down, we provide complete recovery support. We safely transport your vehicle to the nearest garage or your preferred destination with zero damage guaranteed."
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
