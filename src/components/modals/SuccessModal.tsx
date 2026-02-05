"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const SuccessModal = ({
  type,
  onClose,
}: {
  type: string | null;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-2xl p-10 flex flex-col items-center max-w-md text-center shadow-2xl mx-4"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <div>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 0C11.664 0 0 11.664 0 26C0 40.336 11.664 52 26 52C40.336 52 52 40.336 52 26C52 11.664 40.336 0 26 0ZM39.5307 17.2853L22.7307 37.2853C22.5468 37.5051 22.3178 37.6827 22.0592 37.806C21.8006 37.9293 21.5185 37.9955 21.232 38H21.1973C20.9172 37.9999 20.6403 37.941 20.3844 37.8271C20.1286 37.7132 19.8995 37.5468 19.712 37.3387L12.512 29.3387C12.1935 28.9961 12.0049 28.5528 11.979 28.0857C11.9531 27.6187 12.0915 27.1573 12.3703 26.7816C12.649 26.4059 13.0505 26.1397 13.505 26.0291C13.9596 25.9184 14.4385 25.9704 14.8587 26.176C15.0987 26.296 15.312 26.4613 15.4827 26.6613L21.144 32.9547L36.4693 14.7147C36.8164 14.3298 37.2992 14.0947 37.8162 14.0588C38.3332 14.023 38.8439 14.1892 39.2408 14.5224C39.6376 14.8557 39.8896 15.3299 39.9437 15.8453C39.9978 16.3607 39.8497 16.877 39.5307 17.2853Z"
              fill="#16A34A"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-[#2F1464] mb-2">
        {type === "join" ? "You’re on the list!" : "Thanks for reaching out."}
      </h2>

      <p className="text-[#2E2E2E] mb-6 leading-6">
        {type === "join"
          ? "We’ll contact you when we’re ready to onboard new engineers."
          : "We’ve received your request and will contact you shortly to discuss your needs."}
      </p>

      <button
        onClick={onClose}
        className="w-full bg-[#7632F9] text-white py-4 rounded-lg font-semibold cursor-pointer hover:bg-[#6428D8] transition-all"
      >
        Okay
      </button>
    </motion.div>
  </div>
);

export default SuccessModal;
