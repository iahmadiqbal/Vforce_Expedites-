import heroTransport from "@/assets/hero-transport.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const SmallLoadTransport = () => (
  <ServicePageLayout
    image={heroTransport}
    title="Small Load Transport"
    subtitle="Cost-effective small goods transport"
    description="Our small load transport service offers economical solutions for transporting smaller goods. Quick dispatch and door-to-door service make it hassle-free."
    features={[
      { text: "Small parcel transport" },
      { text: "Economical pricing" },
      { text: "Quick dispatch" },
      { text: "Door-to-door service" },
    ]}
    ctaText="Small Load? Big Service. Call Us"
  />
);

export default SmallLoadTransport;
