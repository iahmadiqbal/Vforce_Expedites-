import heroTransport from "@/assets/hero-transport.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const FurnitureShifting = () => (
  <ServicePageLayout
    image={heroTransport}
    title="Furniture & Item Shifting"
    subtitle="Safe handling of heavy items"
    description="Safe handling and transport of heavy items and furniture. Protective wrapping and professional equipment ensure perfect condition delivery."
    features={[
      { text: "Professional handling" },
      { text: "Heavy item transport" },
      { text: "Protective wrapping" },
      { text: "Timely delivery" },
    ]}
    ctaText="Need Furniture Moved? Let Us Help"
  />
);

export default FurnitureShifting;
