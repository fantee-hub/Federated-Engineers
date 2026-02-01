import { Check } from "lucide-react";

const MainSection = () => {
  const checklistSections = [
    {
      title: "Applications and Participation",
      items: [
        "Applying to Federated Engineers does not guarantee acceptance",
        "Participation may be reviewed, limited, or revoked if standards are not met",
        "Companies are responsible for their own hiring decisions",
      ],
    },
  ];

  const contentSections = [
    {
      title: "No Employment Guarantee",
      content:
        "Federated Engineers does not guarantee employment, job placement, or specific outcomes. We provide experience, exposure, and access to opportunities, not promises.",
    },
    {
      title: "Intellectual Property",
      content:
        "All platform content, branding, and materials belong to Federated Engineers unless otherwise stated. You may not copy, distribute, or reuse content without permission.",
    },
    {
      title: "User Content",
      content:
        "You retain ownership of work you create, but grant Federated Engineers the right to use it for platform operations, reviews, and promotional purposes where appropriate.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Federated Engineers is provided on an as-is basis. We are not liable for indirect damages, lost opportunities, or business outcomes resulting from platform use.",
    },
    {
      title: "Termination",
      content:
        "We reserve the right to suspend or terminate access if these terms are violated or if use harms the platform or its users.",
    },
    {
      title: "Changes to Terms",
      content:
        "These terms may be updated periodically. Continued use of the platform indicates acceptance of the updated terms.",
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

  const TextContent = ({ children }: { children: React.ReactNode }) => (
    <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
      {children}
    </p>
  );

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
        <div className="max-w-159">
          <SectionTitle>Use of the Platform</SectionTitle>
          <div className="space-y-4">
            <TextContent>
              Federated Engineers provides a platform for aspiring data
              engineers to gain real world experience and for companies to
              access vetted talent.
            </TextContent>
            <TextContent>
              You agree to use the platform responsibly and for lawful purposes
              only.
            </TextContent>
          </div>
        </div>

        {checklistSections.map((section, idx) => (
          <div key={idx} className="max-w-159">
            <SectionTitle>{section.title}</SectionTitle>
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
              <TextContent>{section.content}</TextContent>
            </div>
          ))}

          <div className="pt-4">
            <SectionTitle className="text-2xl lg:text-3xl font-semibold text-[#2F1464] mb-3">
              Contact Us
            </SectionTitle>
            <TextContent>
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
