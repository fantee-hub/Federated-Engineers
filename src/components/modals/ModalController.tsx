"use client";
import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";

import { FormModal } from "./FormModal";
import { CustomSelect } from "../ui/CustomSelect";
import { RootState } from "@/src/lib/redux/store";

const Input = ({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode | string;
}) => (
  <div className="flex flex-col gap-1.5 text-left">
    <label className="text-black">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#7632F9]/20 focus:border-[#7632F9] transition-all placeholder:text-[#5C5C5C]"
    />
  </div>
);

export const ModalController = () => {
  const { view, isOpen } = useSelector((state: RootState) => state.modal);

  const [formData, setFormData] = useState({
    role: "",
    experience: "",
  });

  if (!isOpen) return null;

  return (
    <>
      {view === "join" && (
        <FormModal
          title="Interested in Joining the Engineering Pool?"
          subtitle="Register your interest to join our production-focused engineering pool."
          buttonText="Register Interest"
          footerNote="We're currently collecting interest. Selected engineers will be contacted when applications open."
          formId="join-engineer-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="First Name" placeholder="Enter your first name" />
            <Input label="Last Name" placeholder="Enter your last name" />
            <div className="md:col-span-2">
              <Input
                label="Email Address"
                type="email"
                placeholder="forexample@gmail.com"
              />
            </div>
            <div className="md:col-span-2">
              <CustomSelect
                label="Primary Engineering Role"
                options={[
                  "Data Platform Engineer",
                  "Data Engineer",
                  "Machine Leanring Engineer",
                ]}
                value={formData.role}
                onChange={(val) => setFormData({ ...formData, role: val })}
              />
            </div>
            <div className="md:col-span-2">
              <CustomSelect
                label="Years of Experience"
                options={["1-2 years", "3-5 years", "6-8 years", "8+ years"]}
                value={formData.experience}
                onChange={(val) =>
                  setFormData({ ...formData, experience: val })
                }
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label={
                  <span>
                    LinkedIn or GitHub Profile{" "}
                    <span className="text-[#8A8A8A]">(optional)</span>
                  </span>
                }
                placeholder="Paste in Linkedin or Github link"
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label="Why are you interested in joining the pool?"
                placeholder="Enter your reason"
              />
            </div>
          </div>
        </FormModal>
      )}

      {view === "hire" && (
        <FormModal
          title="Hire Production-Competent Engineers"
          subtitle="Contact us to access production-competent engineering talent."
          buttonText="Contact Federated Engineers"
          footerNote="We'll reach out to understand your needs and discuss next steps."
          formId="hire-engineer-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="First Name" placeholder="Enter your first name" />
            <Input label="Last Name" placeholder="Enter your last name" />
            <div className="md:col-span-2">
              <Input
                label="Work Email"
                type="email"
                placeholder="forexample@company.com"
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label="Company Name"
                placeholder="Enter your company name"
              />
            </div>
            <div className="md:col-span-2">
              <CustomSelect
                label="Engineering Role Needed"
                options={[
                  "Data Platform Engineer",
                  "Data Engineer",
                  "Machine Leanring Engineer",
                ]}
                value={formData.role}
                onChange={(val) => setFormData({ ...formData, role: val })}
              />
            </div>
            <div className="md:col-span-2">
              <CustomSelect
                label="Years of Experience"
                options={["1-2 years", "3-5 years", "6-8 years", "8+ years"]}
                value={formData.experience}
                onChange={(val) =>
                  setFormData({ ...formData, experience: val })
                }
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label="Brief Description of Need"
                placeholder="Enter your reason"
              />
            </div>
          </div>
        </FormModal>
      )}
    </>
  );
};
