import heroTransport from "@/assets/hero-transport.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const FurnitureShifting = () => (
  <ServicePageLayout
    image={heroTransport}
    title="Furniture & Item Shifting"
    subtitle="Safe handling of heavy items"
    description="We specialize in safe handling and transport of heavy items and furniture. Our team uses protective wrapping and professional equipment to ensure your belongings arrive in perfect condition."
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
