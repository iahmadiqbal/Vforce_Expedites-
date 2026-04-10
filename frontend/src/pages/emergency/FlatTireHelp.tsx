import heroEmergency from "@/assets/hero-emergency.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const FlatTireHelp = () => (
  <ServicePageLayout
    image={heroEmergency}
    title="Flat Tire Help"
    subtitle="Quick tire replacement on the spot"
    description="Quick tire replacement on the spot for all vehicle types. Back on the road in no time."
    features={[
      { text: "On-spot tire replacement" },
      { text: "Spare tire installation" },
      { text: "Tire repair assistance" },
      { text: "All vehicle types" },
    ]}
    ctaText="Flat Tire? We'll Fix It Fast"
  />
);

export default FlatTireHelp;
