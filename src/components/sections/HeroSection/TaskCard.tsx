"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface MarqueeItem {
  text: string;
  name?: string;
  icon?: string;
}

interface MarqueeRowProps {
  items: MarqueeItem[];
  direction: "left" | "right";
  activeTab?: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction,
  activeTab,
}) => {
  const xTranslation = direction === "left" ? [0, -1000] : [-1000, 0];

  return (
    <div className="flex overflow-hidden py-1">
      <motion.div
        className="flex gap-4 pr-4"
        animate={{ x: xTranslation }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 whitespace-nowrap rounded-full bg-[#FAFAFA] px-4 py-2 lg:text-[13px] text-xs font-medium text-gray-600"
          >
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center overflow-hidden
            ${activeTab === 2 ? "bg-none" : "bg-white"}
            `}
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.text}
                  className="h-6 w-6 object-contain"
                />
              )}
            </div>
            <div className="flex flex-col">
              <div>
                {item.name && (
                  <span className="block text-sm font-semibold text-gray-800">
                    {item.name}
                  </span>
                )}
              </div>
              <div>{item.text}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TaskCard = () => {
  const [activeTab, setActiveTab] = useState<1 | 2>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 1 ? 2 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    1: {
      title: "Engineers do tasks like",
      row1: [
        { text: "Build & train ML models", icon: "/assets/tenorflow.svg" },
        { text: "Deploy model services", icon: "/assets/deply.svg" },
        { text: "Build insights dashboards", icon: "/assets/insights.svg" },
      ],
      row2: [
        {
          text: "Build ingestion + processing pipelines",
          icon: "/assets/build ingestion.svg",
        },
        { text: "Build & train ML models", icon: "/assets/tenorflow.svg" },
        { text: "Deploy model services", icon: "/assets/deply.svg" },
      ],
    },
    2: {
      title: "Businesses hire from our pool",
      row1: [
        {
          text: "Data Engineer",
          icon: "/assets/business-avatar1.svg",
          name: "Jessica Bones",
        },
        {
          text: "Data Engineer",
          icon: "/assets/business-avatar1.svg",
          name: "Jessica Bones",
        },
        {
          text: "Machine Learning Engineer",
          icon: "/assets/business-avatar2.svg",
          name: "Alex John",
        },
      ],
      row2: [
        {
          text: "Data Engineers",
          icon: "/assets/business-avatar2.svg",
          name: "Jessica Bones",
        },
        {
          text: "Machine Learning Engineer",
          icon: "/assets/business-avatar2.svg",
          name: "Alex John",
        },
        {
          text: "Data Engineer",
          icon: "/assets/business-avatar1.svg",
          name: "Jessica Bones",
        },
      ],
    },
  };

  return (
    <div className="absolute lg:left-[60%] lg:-translate-x-[60%] lg:-top-32 z-20 lg:w-123.5 max-w-77.5 lg:max-w-full mx-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/4 lg:translate-y-0">
      <div className="rounded-2xl p-2 bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
        <div className="rounded-lg bg-white p-4 shadow-inner relative overflow-hidden">
          <div className="mb-4 flex items-center justify-between">
            <div className="overflow-hidden ">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="inline-block rounded-full bg-[#F6F5FF] px-4 py-2 lg:text-sm text-xs font-semibold text-[#7632F9]"
                >
                  {data[activeTab].title}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#F6F5FF]">
              <div className="flex items-center gap-1">
                <motion.div
                  animate={{
                    height: activeTab === 1 ? 12 : 4,
                    width: activeTab === 1 ? 4 : 6,
                    backgroundColor: activeTab === 1 ? "#7632F9" : "#E4D6FE",
                  }}
                  className="rounded-full"
                />

                <motion.div
                  animate={{
                    height: activeTab === 2 ? 12 : 4,
                    width: activeTab === 2 ? 4 : 6,
                    backgroundColor: activeTab === 2 ? "#7632F9" : "#E4D6FE",
                  }}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <MarqueeRow
                  items={data[activeTab].row1}
                  direction="left"
                  activeTab={activeTab}
                />
                <MarqueeRow
                  items={data[activeTab].row2}
                  direction="right"
                  activeTab={activeTab}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
