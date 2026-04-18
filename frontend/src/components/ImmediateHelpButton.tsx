import { useState } from "react";
import { Phone, X } from "lucide-react";

interface ImmediateHelpButtonProps {
  className?: string;
  iconSize?: number;
  children?: React.ReactNode;
}

const PHONE_NUMBER = "+14034623578";
const PHONE_DISPLAY = "+1 403-462-3578";

const ImmediateHelpButton = ({ className = "", iconSize = 18, children }: ImmediateHelpButtonProps) => {
  const [showDialog, setShowDialog] = useState(false);

  const isMobile = () => /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handleClick = (e: React.MouseEvent) => {
    if (!isMobile()) {
      e.preventDefault();
      setShowDialog(true);
    }
    // mobile pe href="tel:" naturally kaam karega
  };

  return (
    <>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className={className}
        onClick={handleClick}
      >
        <Phone size={iconSize} />
        {children ?? "Immediate Help"}
      </a>

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

export default ImmediateHelpButton;
