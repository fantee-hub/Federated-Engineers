import { Check } from "lucide-react";
import React from "react";

const MainSection = () => {
  const checklistSections = [
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
      intro: "We may share information:",
      introParagraphs: [
        "We do not sell your personal data.",
        "We may share information:",
      ],
      items: [
        "With trusted service providers who help operate our platform",
        "With companies, only when relevant to hiring or collaboration and with appropriate safeguards",
        "When required by law or to protect our rights and users",
      ],
    },
  ];

  const contentSections = [
    {
      title: "Data Security",
      content:
        "We take reasonable technical and organizational measures to protect your information against unauthorized access, loss, or misuse.",
      titleClass: "text-2xl lg:text-[32px] font-semibold text-[#2F1464] mb-2",
    },
    {
      title: "Your Rights",
      intro: "You may request to:",
      items: [
        "Access, update, or delete your personal information",
        "Withdraw consent for communications at any time",
      ],
      titleClass: "text-2xl lg:text-3xl font-semibold text-[#2F1464] mb-3",
    },
    {
      title: "Cookies",
      content:
        "We use cookies and similar technologies to improve your experience and understand how our site is used. You can manage cookie preferences through your browser settings.",
      titleClass: "text-2xl lg:text-[32px] font-semibold text-[#2F1464] mb-2",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be reflected on this page.",
      titleClass: "text-2xl lg:text-3xl font-semibold text-[#2F1464] mb-3",
    },
  ];

  const SectionTitle = ({
    children,
    className = "text-2xl lg:text-[32px] font-semibold text-[#2F1464] mb-2",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <h2 className={className}>{children}</h2>;

  const TextContent = ({
    children,
    className = "text-[#5C5C5C] text-sm lg:text-base leading-relaxed",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <p className={className}>{children}</p>;

  const CheckItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex gap-4 text-sm items-center lg:text-base text-[#000000] leading-relaxed">
      <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#E8F6ED] flex items-center justify-center">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#16A34A] text-white">
          <Check size={10} strokeWidth={4} />
        </div>
      </div>
      {children}
    </li>
  );

  return (
    <section className=" page px-4 lg:px-0 relative mb-10 lg:mb-20">
      <div className="absolute border-[#E6E6E6] border-t w-full top-20 hidden lg:block"></div>
      <div className="absolute border-[#E6E6E6] border-b w-full bottom-0 hidden lg:block"></div>
      <div className="max-w-300 mx-auto grid grid-cols-1 gap-10 lg:gap-20 border-x border-[#E6E6E6] lg:pt-30 lg:pb-10 pt-10 lg:px-10 pb-10 border-b lg:border-b-0 px-6">
        {checklistSections.map((section, idx) => (
          <div key={idx} className="max-w-159">
            <SectionTitle>{section.title}</SectionTitle>
            {section.introParagraphs ? (
              <>
                {section.introParagraphs.map((para, i) => (
                  <TextContent
                    key={i}
                    className="text-[#5C5C5C] mb-2 text-sm lg:text-base"
                  >
                    {para}
                  </TextContent>
                ))}
                <div className="mb-4"></div>
              </>
            ) : (
              <TextContent className="text-[#5C5C5C] mb-6 text-sm lg:text-base">
                {section.intro}
              </TextContent>
            )}

            <ul className="space-y-4 ">
              {section.items.map((item, i) => (
                <CheckItem key={i}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        ))}

        <div className="max-w-159 lg:space-y-20 space-y-10">
          {contentSections.map((section, idx) => (
            <div key={idx}>
              <SectionTitle className={section.titleClass}>
                {section.title}
              </SectionTitle>
              {section.content ? (
                <TextContent>{section.content}</TextContent>
              ) : section.items ? (
                <>
                  <TextContent className="text-[#5C5C5C] text-sm lg:text-base mb-6">
                    {section.intro}
                  </TextContent>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <CheckItem key={i}>{item}</CheckItem>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          ))}

          <div className="pt-4">
            <SectionTitle className="text-2xl lg:text-3xl font-semibold text-[#2F1464] mb-3">
              Contact Us
            </SectionTitle>
            <TextContent className="text-[#5C5C5C] text-sm lg:text-base mb-2">
              If you have questions about this Privacy Policy, please contact us
              at:
            </TextContent>
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
