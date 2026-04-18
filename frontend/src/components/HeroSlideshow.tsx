import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, X } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import heroEmergency from "@/assets/hero-emergency.jpg";
import heroTransport from "@/assets/hero-transport.jpg";

const PHONE_NUMBER = "+14034623578";
const PHONE_DISPLAY = "+1 403-462-3578";

const slides = [
  {
    image: heroHome,
    title: "24/7 Emergency Towing &\nTransport Services",
    subtitle: "Fast, Reliable, and Always Ready When You Need Us",
  },
  {
    image: heroEmergency,
    title: "Emergency Roadside\nAssistance",
    subtitle: "Professional Help Available Anytime, Anywhere",
  },
  {
    image: heroTransport,
    title: "Reliable Transport &\nMoving Solutions",
    subtitle: "Safe and Secure Transport for All Your Needs",
  },
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleHelpClick = (e: React.MouseEvent) => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      setShowDialog(true);
    }
  };

  return (
    <>
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="hero-overlay"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container-custom text-center text-primary-foreground px-4">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-row gap-3 justify-center items-stretch max-w-md mx-auto">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      onClick={handleHelpClick}
                      className="btn-accent text-sm md:text-base py-3 px-4 flex-1 inline-flex items-center justify-center gap-2"
                    >
                      <Phone size={16} className="md:w-5 md:h-5" />
                      Immediate Help
                    </a>
                    <Link
                      to="/contact"
                      className="text-sm md:text-base py-3 px-4 bg-transparent backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary flex-1 rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center gap-2"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Dialog — outside slides, single instance */}
      {showDialog && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowDialog(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDialog(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={28} className="text-red-600" />
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">Need Immediate Help?</h2>
            <p className="text-gray-500 mb-6 text-sm">Call us now — we're available 24/7</p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="block text-2xl font-bold text-red-600 hover:text-red-700 transition-colors mb-6 tracking-wide"
            >
              {PHONE_DISPLAY}
            </a>

            <button
              onClick={() => setShowDialog(false)}
              className="w-full py-2 px-4 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSlideshow;
