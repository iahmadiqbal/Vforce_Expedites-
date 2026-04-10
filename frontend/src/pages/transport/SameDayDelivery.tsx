import heroTransport from "@/assets/hero-transport.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const SameDayDelivery = () => (
  <ServicePageLayout
    image={heroTransport}
    title="Same-Day Delivery"
    subtitle="Fast delivery for urgent shipments"
    description="Same-day delivery for urgent packages. Quick pickup with secure handling and real-time tracking."
    features={[
      { text: "Same-day pickup and delivery" },
      { text: "Real-time tracking" },
      { text: "Secure handling" },
      { text: "City-wide coverage" },
    ]}
    ctaText="Need It Today? We Deliver Fast"
  />
);

export default SameDayDelivery;
