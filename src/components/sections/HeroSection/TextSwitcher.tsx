"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ROLES: string[] = [
  "Data Engineers",
  "ML Engineers",
  "Platform Engineers",
  "Analytics Engineers",
];

export const TextSwitcher = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className="relative inline-flex lg:h-[1.2em] lg:w-156.5 w-full items-center overflow-hidden my-2 p-2 align-middle text-white"
      style={{
        background: "linear-gradient(90deg, #471E95 60%, #180A32 100%)",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="whitespace-nowrap font-semibold"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
