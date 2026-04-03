import heroTransport from "@/assets/hero-transport.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const BusinessLogistics = () => (
  <ServicePageLayout
    image={heroTransport}
    title="Business Logistics Support"
    subtitle="Logistics solutions for businesses"
    description="We provide regular transport services and logistics support for businesses of all sizes. From scheduled pickups to dedicated fleet availability, we keep your business moving."
    features={[
      { text: "Scheduled pickups" },
      { text: "Business contracts" },
      { text: "Fleet availability" },
      { text: "Dedicated support" },
    ]}
    ctaText="Business Needs? We've Got You Covered"
  />
);

export default BusinessLogistics;
