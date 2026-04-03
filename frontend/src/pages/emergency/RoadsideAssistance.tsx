import heroEmergency from "@/assets/hero-emergency.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const RoadsideAssistance = () => (
  <ServicePageLayout
    image={heroEmergency}
    title="Roadside Assistance"
    subtitle="Help when you need it most"
    description="Our roadside assistance covers battery jump starts, minor mechanical issues, locked out assistance, and fuel delivery. We ensure you get back on the road as quickly as possible."
    features={[
      { text: "Battery jump start service" },
      { text: "Locked out / key assistance" },
      { text: "Minor breakdown support" },
      { text: "Fuel delivery" },
    ]}
    ctaText="Stuck on the Road? We're Here to Help"
  />
);

export default RoadsideAssistance;
