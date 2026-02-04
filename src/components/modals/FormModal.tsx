"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/lib/redux/store";
import { closeModal } from "@/src/lib/redux/slices/modalSlice";
import { FormData } from "./ModalController";

interface FormModalProps {
  title: string;
  subtitle: string;
  buttonText: string;
  children: React.ReactNode;
  footerNote: string;
  formId: string;
  formData: Record<string, any>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  submitForm: (e: React.FormEvent) => void;
  isFormEmpty: boolean;
}

export const FormModal = ({
  title,
  subtitle,
  buttonText,
  children,
  footerNote,
  formId,
  formData,
  setFormData,
  submitForm,
  isFormEmpty,
}: FormModalProps) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    dispatch(closeModal());

    setFormData &&
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        description: "",
        profileLink: "",
        role: "",
        experience: "",
      });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 z-100 flex items-center justify-center lg:p-4 bg-black/50 backdrop-blur-sm cursor-pointer"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white lg:rounded-2xl lg:shadow-2xl relative cursor-default flex flex-col overflow-hidden lg:w-150 lg:h-219 lg:max-h-[95vh] w-full h-full"
        >
          <div
            className="h-18 bg-[#FDFDFF] border-b border-gray-100 flex shrink-0 justify-end items-center px-6"
            style={{
              backgroundImage: 'url("/assets/form-lines.svg")',
              backgroundSize: "cover",
            }}
          >
            <button
              onClick={handleClose}
              className=" hover:bg-gray-50 bg-white h-full w-14 flex items-center justify-center cursor-pointer"
            >
              <X size={24} className="text-[#2E2E2E]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
            <h2 className="text-2xl font-semibold text-[#2A0E5D] mb-2">
              {title}
            </h2>
            <p className="text-[#5C5C5C] mb-6">{subtitle}</p>

            <form id={formId} onSubmit={submitForm}>
              <div className="space-y-6">
                {children}
                <div className="mt-6 p-4 bg-[#F6F5FF] border-l-3 border-[#7632F9] text-[#7632F9] text-sm font-semibold leading-relaxed">
                  {footerNote}
                </div>
              </div>
            </form>
          </div>

          <div
            className="h-18 flex justify-end"
            style={{
              backgroundImage: 'url("/assets/form-lines.svg")',
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <div>
              <button
                type="submit"
                form={formId}
                disabled={isFormEmpty}
                className={` text-white h-full px-10 py-3.5  font-bold  transition-all cursor-pointer
                ${
                  isFormEmpty
                    ? "bg-[#E6E6E6] text-white cursor-not-allowed"
                    : "bg-[#7632F9] hover:bg-[#6428D8]"
                }
                `}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
