import heroEmergency from "@/assets/hero-emergency.jpg";
import ServicePageLayout from "@/components/ServicePageLayout";

const RoadsideAssistance = () => (
  <ServicePageLayout
    image={heroEmergency}
    title="Roadside Assistance"
    subtitle="Help when you need it most"
    description="Battery jump starts, lockout help, fuel delivery, and minor repairs. We get you back on the road quickly."
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
