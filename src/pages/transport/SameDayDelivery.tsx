import heroTransport from "@/assets/hero-transport.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const SameDayDelivery = () => (
  <ServicePageLayout
    image={heroTransport}
    title="Same-Day Delivery"
    subtitle="Fast delivery for urgent shipments"
    description="Need something delivered today? Our same-day delivery service ensures your packages reach their destination quickly and securely with real-time tracking."
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
