"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "What We Do", href: "/#what-we-do" },
    { name: "Engineers", href: "/#engineers" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Businesses", href: "/#businesses" },
    { name: "About Us", href: "/about" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.slice(1);

      const element = document.getElementById(hash);
      if (element) {
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  }, [pathname]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hash = href.includes("#") ? href.split("#")[1] : null;
    if (hash && pathname === "/") {
      e.preventDefault();
      setIsOpen(false);
      const element = document.getElementById(hash);
      if (element) {
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const isActive = (link: { href: string }) => {
    if (link.href.includes("#")) {
      const hash = `#${link.href.split("#")[1]}`;
      return activeSection === hash;
    }
    return pathname === link.href;
  };

  return (
    <nav className="flex h-18 w-full items-stretch bg-white fixed right-0 left-0 page z-50 border-b border-[#E6E6E6]">
      <div className="hidden lg:flex flex-1 items-center justify-center border-r border-gray-100">
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/navbarline1.svg")',
            backgroundSize: "cover",
          }}
        />
      </div>

      <div className="flex flex-1 lg:flex-none items-center gap-3 border-r border-[#E6E6E6] px-4 bg-white z-60">
        <Image src={logo} alt="Logo" width={32} height={32} />
        <span className="whitespace-nowrap text-lg lg:text-xl font-semibold text-[#471E95]">
          Federated Engineers
        </span>
      </div>

      <div className="hidden lg:flex items-center border-r border-gray-100">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className={`flex items-center px-6 whitespace-nowrap transition-colors h-full ${
              isActive(link)
                ? "bg-[#7632F9] text-white"
                : "text-[#2E2E2E] hover:bg-[#7632F9] hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden flex-2 border-r border-gray-100 lg:block">
        <div
          className="h-full w-full bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("/assets/navbarline2.svg")' }}
        />
      </div>

      <div className="hidden lg:flex items-center">
        <Link
          href="/hire"
          className="flex h-full items-center px-6 font-semibold text-[#7632F9] hover:bg-gray-50"
        >
          Hire
        </Link>
        <Link
          href="/join"
          className="flex h-full items-center bg-[#7632F9] px-6 font-semibold text-white transition-colors hover:bg-[#6428D8]"
        >
          Join
        </Link>
      </div>

      <div className="flex lg:hidden items-center px-4 border-l border-[#E6E6E6] bg-white z-60">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#2E2E2E] p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-18 bg-white z-50 flex flex-col"
            style={{
              backgroundImage: 'url("/assets/navbarline1.svg")',
              backgroundSize: "100% auto",
              backgroundRepeat: "repeat-y",
            }}
          >
            <div className="flex flex-col bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setIsOpen(false);
                  }}
                  className="px-8 py-6 text-lg text-[#2E2E2E] border-b border-gray-50 active:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="grow" />

            <div className="flex flex-col border-t border-[#E6E6E6] bg-white">
              <Link
                href="/hire"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-8 py-6 text-[#7632F9] font-semibold border-b border-[#E6E6E6]"
              >
                Hire From The Pool
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-8 py-6 bg-[#7632F9] text-white font-semibold"
              >
                Join The Pool
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
