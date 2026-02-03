"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ROLES: string[] = [
  "Data Platform Engineers",
  "Data Engineers",
  "Machine Learning Engineers",
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
      className="relative inline-flex w-full max-w-full items-center overflow-hidden
               my-2 p-3 align-middle text-white
               min-h-[1.4em]"
      style={{
        background: "linear-gradient(90deg, #471E95 60%, #180A32 100%)",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="font-semibold whitespace-nowrap  leading-tight"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
