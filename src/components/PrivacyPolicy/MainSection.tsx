import { Check } from "lucide-react";
import React from "react";

const MainSection = () => {
  const sections = [
    {
      title: "Information We Collect",
      intro: "We may collect the following types of information:",
      items: [
        "Personal details such as your name, email address, and professional background when you apply or contact us",
        "Usage data such as pages visited, device information, and interactions with the site",
        "Any information you voluntarily provide through forms or communications",
      ],
    },
    {
      title: "How We Use Your Information",
      intro: "We use your information to:",
      items: [
        "Provide and improve our platform and services",
        "Review applications and manage participation on the platform",
        "Connect companies with vetted data engineers",
        "Communicate updates, opportunities, and important information",
        "Maintain platform security and prevent misuse",
      ],
    },
    {
      title: "Sharing of Information",
      intro: "We do not sell your personal data. We may share information:",
      items: [
        "With trusted service providers who help operate our platform",
        "With companies, only when relevant to hiring or collaboration and with appropriate safeguards",
        "When required by law or to protect our rights and users",
      ],
    },
  ];
  return (
    <section className=" page px-4 lg:px-0 relative mb-10 lg:mb-20">
      <div className="absolute border-[#E6E6E6] border-t w-full top-20 hidden lg:block"></div>
      <div className="absolute border-[#E6E6E6] border-b w-full bottom-0 hidden lg:block"></div>
      <div className="max-w-300 mx-auto grid grid-cols-1 gap-10 lg:gap-20 border-x border-[#E6E6E6] lg:pt-30 lg:pb-10 pt-10 lg:px-10 pb-10 border-b lg:border-b-0 px-6">
        {sections.map((section, idx) => (
          <div key={idx} className="max-w-159">
            <h2 className="text-2xl lg:text-[32px] font-semibold text-[#2F1464] mb-2">
              {section.title}
            </h2>
            {section.intro?.includes("We may share information") ? (
              <>
                <p className="text-[#5C5C5C] mb-2 text-sm lg:text-base">
                  We do not sell your personal data.
                </p>
                <p className="text-[#5C5C5C] mb-6 text-sm lg:text-base">
                  We may share information:
                </p>
              </>
            ) : (
              <p className="text-[#5C5C5C] mb-6 text-sm lg:text-base">
                {section.intro}
              </p>
            )}

            <ul className="space-y-4 ">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-sm items-center lg:text-base text-[#000000] leading-relaxed"
                >
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#E8F6ED] flex items-center justify-center">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#16A34A] text-white">
                      <Check size={10} strokeWidth={4} />
                    </div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="max-w-159 lg:space-y-20 space-y-10">
          <div>
            <h2 className="text-2xl lg:text-[32px] font-semibold text-[#2F1464] mb-2">
              Data Security
            </h2>
            <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
              We take reasonable technical and organizational measures to
              protect your information against unauthorized access, loss, or
              misuse.
            </p>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#2F1464] mb-3">
              Your Rights
            </h2>
            <p className="text-[#5C5C5C] text-sm lg:text-base mb-6">
              You may request to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-sm lg:text-base text-[#000000]">
                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#E8F6ED] flex items-center justify-center">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#16A34A] text-white">
                    <Check size={10} strokeWidth={4} />
                  </div>
                </div>
                Access, update, or delete your personal information
              </li>
              <li className="flex items-center gap-4 text-sm lg:text-base text-[#000000]">
                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#E8F6ED] flex items-center justify-center">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#16A34A] text-white">
                    <Check size={10} strokeWidth={4} />
                  </div>
                </div>
                Withdraw consent for communications at any time
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl lg:text-[32px] font-semibold text-[#2F1464] mb-2">
              Cookies
            </h2>
            <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
              We use cookies and similar technologies to improve your experience
              and understand how our site is used. You can manage cookie
              preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#2F1464] mb-3">
              Changes to This Policy
            </h2>
            <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#2F1464] mb-3">
              Contact Us
            </h2>
            <p className="text-[#5C5C5C] text-sm lg:text-base mb-2">
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <a
              href="mailto:hello@federatedengineers.com"
              className="text-[#7632F9] font-semibold hover:underline"
            >
              hello@federatedengineers.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
