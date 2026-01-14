"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({ 
  href, 
  children, 
  isExternal = false,
  variant = "primary",
}: Props) {
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-transparent border border-white/20 text-white hover:bg-white/5",
  };

  const baseClasses = `
    inline-flex items-center justify-center
    px-8 py-3 text-sm font-medium
    transition-all duration-300
    ${variants[variant]}
  `;

  if (isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Link href={href}>
      <motion.div
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}