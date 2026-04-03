import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Index from "./pages/Index";
import EmergencyServices from "./pages/EmergencyServices";
import TowingServices from "./pages/emergency/TowingServices";
import RoadsideAssistance from "./pages/emergency/RoadsideAssistance";
import BreakdownRecovery from "./pages/emergency/BreakdownRecovery";
import AccidentAssistance from "./pages/emergency/AccidentAssistance";
import FlatTireHelp from "./pages/emergency/FlatTireHelp";
import TransportMoving from "./pages/TransportMoving";
import LocalMoving from "./pages/transport/LocalMoving";
import FurnitureShifting from "./pages/transport/FurnitureShifting";
import SameDayDelivery from "./pages/transport/SameDayDelivery";
import SmallLoadTransport from "./pages/transport/SmallLoadTransport";
import BusinessLogistics from "./pages/transport/BusinessLogistics";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/emergency-services" element={<EmergencyServices />} />
            <Route path="/emergency/towing-services" element={<TowingServices />} />
            <Route path="/emergency/roadside-assistance" element={<RoadsideAssistance />} />
            <Route path="/emergency/breakdown-recovery" element={<BreakdownRecovery />} />
            <Route path="/emergency/accident-assistance" element={<AccidentAssistance />} />
            <Route path="/emergency/flat-tire-help" element={<FlatTireHelp />} />
            <Route path="/transport-moving" element={<TransportMoving />} />
            <Route path="/transport/local-moving" element={<LocalMoving />} />
            <Route path="/transport/furniture-shifting" element={<FurnitureShifting />} />
            <Route path="/transport/same-day-delivery" element={<SameDayDelivery />} />
            <Route path="/transport/small-load-transport" element={<SmallLoadTransport />} />
            <Route path="/transport/business-logistics" element={<BusinessLogistics />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
