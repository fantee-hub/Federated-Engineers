"use client";
import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { FormModal } from "./FormModal";
import { CustomSelect } from "../ui/CustomSelect";
import { RootState } from "@/src/lib/redux/store";
import SuccessModal from "./SuccessModal";
import { useDispatch } from "react-redux";
import { closeModal } from "@/src/lib/redux/slices/modalSlice";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  description: string;
  profileLink: string;
  role: string;
  experience: string;
};

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    description: "",
    profileLink: "",
    role: "",
    experience: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const isFormEmpty = Object.values(formData).every(
    (value) => value.trim() === ""
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (view === "hire" && !formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!formData.experience.trim()) {
      newErrors.experience = "Experience is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitted(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: view,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setErrors({});
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
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitted(false);
    }
  };

  if (!isOpen) return null;

  if (showSuccess) {
    return (
      <SuccessModal
        type={view}
        onClose={() => {
          setShowSuccess(false);
          setIsSubmitted(false);
          setErrors({});
          dispatch(closeModal());
        }}
      />
    );
  }

  return (
    <>
      {view === "join" && (
        <FormModal
          title="Interested in Joining the Engineering Pool?"
          subtitle="Register your interest to join our production-focused engineering pool."
          buttonText="Register Interest"
          footerNote="We're currently collecting interest. Selected engineers will be contacted when applications open."
          formId="join-engineer-form"
          formData={formData}
          setFormData={setFormData}
          submitForm={submitForm}
          isFormEmpty={isFormEmpty}
          isSubmitting={isSubmitted}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                label="First Name"
                onChange={(e) => {
                  handleChange("firstName", e.target.value);
                }}
                value={formData.firstName}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div>
              <Input
                onChange={(e) => handleChange("lastName", e.target.value)}
                label="Last Name"
                placeholder="Enter your last name"
                value={formData.lastName}
              />

              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <Input
                onChange={(e) => handleChange("email", e.target.value)}
                label="Email Address"
                type="email"
                placeholder="forexample@gmail.com"
                value={formData.email}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
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
              {errors.role && (
                <p className="mt-1 text-sm text-red-500">{errors.role}</p>
              )}
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
              {errors.experience && (
                <p className="mt-1 text-sm text-red-500">{errors.experience}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Input
                label={
                  <span>
                    LinkedIn or GitHub Profile{" "}
                    <span className="text-[#8A8A8A]">(optional)</span>
                  </span>
                }
                onChange={(e) => handleChange("profileLink", e.target.value)}
                value={formData.profileLink}
                placeholder="Paste in Linkedin or Github link"
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label="Why are you interested in joining the pool?"
                value={formData.description}
                placeholder="Enter your reason"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description}
                </p>
              )}
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
          formData={formData}
          setFormData={setFormData}
          submitForm={submitForm}
          isFormEmpty={isFormEmpty}
          isSubmitting={isSubmitted}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                onChange={(e) => handleChange("firstName", e.target.value)}
                value={formData.firstName}
                label="First Name"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div>
              <Input
                onChange={(e) => handleChange("lastName", e.target.value)}
                label="Last Name"
                value={formData.lastName}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Input
                label="Work Email"
                type="email"
                placeholder="forexample@company.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Input
                label="Company Name"
                placeholder="Enter your company name"
                onChange={(e) => handleChange("companyName", e.target.value)}
                value={formData.companyName}
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.companyName}
                </p>
              )}
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
              {errors.role && (
                <p className="mt-1 text-sm text-red-500">{errors.role}</p>
              )}
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
              {errors.experience && (
                <p className="mt-1 text-sm text-red-500">{errors.experience}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Input
                label="Brief Description of Need"
                placeholder="Enter your reason"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description}
                </p>
              )}
            </div>
          </div>
        </FormModal>
      )}
    </>
  );
};
