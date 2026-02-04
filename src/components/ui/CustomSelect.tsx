import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

export const CustomSelect = ({
  label,
  options,
  value,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full text-left">
      <label className="block text-black mb-1.5">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 border border-[#E6E6E6] rounded-lg bg-white focus:ring-2 focus:ring-[#7632F9] outline-none cursor-pointer"
      >
        <span className={value ? "text-black font-semibold" : "text-[#5C5C5C]"}>
          {value || "Select an option"}
        </span>
        <ChevronDown
          size={20}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`flex items-center justify-between px-4 py-3 hover:bg-[#FAFAFA] cursor-pointer  last:border-none ${
                value === opt ? "bg-[#FAFAFA]" : ""
              }`}
            >
              <span className="text-black">{opt}</span>
              <div
                className={`w-3.75 h-3.75 rounded-full border-[1.25px] flex items-center justify-center ${
                  value === opt ? "border-[#7632F9]" : "border-gray-300"
                }`}
              >
                {value === opt && (
                  <div className="w-[11.25px] h-[11.25px] bg-[#7632F9] rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
