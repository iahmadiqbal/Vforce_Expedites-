import heroTransport from "@/assets/hero-transport.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const LocalMoving = () => (
  <ServicePageLayout
    image={heroTransport}
    title="Local Moving Services"
    subtitle="House shifting and local relocation"
    description="Comprehensive local moving including house shifting and office relocation. Professional team handles everything with care."
    features={[
      { text: "Residential moving" },
      { text: "Office relocation" },
      { text: "Packing support" },
      { text: "Affordable rates" },
    ]}
    ctaText="Ready to Move? Contact Us Today"
  />
);

export default LocalMoving;
