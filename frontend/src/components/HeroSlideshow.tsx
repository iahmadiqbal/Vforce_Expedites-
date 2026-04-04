import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import heroEmergency from "@/assets/hero-emergency.jpg";
import heroTransport from "@/assets/hero-transport.jpg";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides Container */}
      <div 
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="hero-overlay"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container-custom text-center text-primary-foreground px-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white">
                  {slide.subtitle}
                </p>
                <div className="flex flex-row gap-3 justify-center items-stretch max-w-md mx-auto">
                  <a href="tel:+14034623578" className="btn-accent text-sm md:text-base py-3 px-4 flex-1 inline-flex items-center justify-center gap-2">
                    <Phone size={16} className="md:w-5 md:h-5" />
                    Immediate Help
                  </a>
                  <Link to="/contact" className="text-sm md:text-base py-3 px-4 bg-transparent backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary flex-1 rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center gap-2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
