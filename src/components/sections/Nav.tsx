import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.svg";

const Nav = () => {
  const navLinks = [
    { name: "What We Do", href: "#" },
    { name: "Engineers", href: "#" },
    { name: "How it Works", href: "#" },
    { name: "Businesses", href: "#" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="flex h-18 w-full items-stretch bg-white fixed right-0 left-0 page z-50">
      <div className="flex-1 items-center justify-center border-r border-gray-100 ">
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/navbarline1.svg")',
            backgroundSize: "cover",
          }}
        />
      </div>

      <div className="flex items-center gap-3 border-r border-[#E6E6E6] px-4">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="lg:whitespace-nowrap text-xl font-semibold text-[#471E95]">
          Federated Engineers
        </span>
      </div>

      <div className="flex items-center gap-8 border-r border-gray-100 px-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="whitespace-nowrap text text-[#2E2E2E] transition-colors hover:text-[#7632F9] last:pr-4"
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

      <div className="flex items-center">
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

      <div className="hidden flex-1 border-r border-gray-100 lg:block">
        <div
          className="h-full w-full bg-no-repeat"
          style={{ backgroundImage: 'url("/assets/navbarline2.svg")' }}
        />
      </div>
    </nav>
  );
};

export default Nav;
