"use client";
import { motion } from "framer-motion";

interface CloudProps {
  src: string;
  className: string;
  delay?: number;
}

export const FloatingCloud: React.FC<CloudProps> = ({
  src,
  className,
  delay = 0,
}) => (
  <motion.img
    src={src}
    className={`absolute pointer-events-none ${className}`}
    initial={{ x: -2 }}
    animate={{ x: 8 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay,
    }}
  />
);
