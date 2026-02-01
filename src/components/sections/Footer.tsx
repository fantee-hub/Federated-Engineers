"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className="w-full bg-[#180A32] lg:py-20 py-10 page">
      <div className="mx-auto max-w-300 lg:px-6 px-4">
        <div className="flex flex-col overflow-hidden rounded-2xl lg:flex-row">
          <div className="flex-1  bg-[#7632F9] lg:p-10 lg:border-r-4 lg:border-b-0 border-b-4 pt-6 border-white relative ">
            <h2 className="mb-4 lg:text-[40px] text-[28px] font-semibold lg:leading-12 leading-8 text-white px-6 lg:px-0">
              Take the Next Step With the Pool
            </h2>
            <p className="mb-6 lg:max-w-104 lg:text-lg text-[#E6E6E6] px-6 lg:px-0">
              Join the pool as an engineer or hire vetted talent for your data
              and AI work.
            </p>
            <div className="flex flex-wrap gap-4 px-6 lg:px-0">
              <button className="rounded-lg bg-white lg:w-44 w-full h-15 flex items-center justify-center font-semibold text-lg text-[#7632F9] cursor-pointer ease-in-out transition-transform hover:scale-105">
                Join the Pool
              </button>
              <button className="rounded-lg border-2 border-white lg:w-39.25 w-full h-15 font-semibold text-white text-lg cursor-pointer transition-all ease-in-out hover:scale-105 hover:bg-white/10">
                Hire Talent
              </button>
            </div>
            <div className="flex justify-end mt-20 lg:mt-0">
              <img
                src="/assets/bars.svg"
                alt="Footer Illustration"
                className="lg:absolute bottom-0 right-0 h-34.5 lg:w-auto w-46 lg:block "
              />
            </div>
          </div>

          <div className="relative flex-1 h-89.5 lg:h-auto overflow-hidden bg-[#2F1464] lg:pt-10 lg:pb-0 lg:px-10 ">
            <div className="relative z-10 grid grid-cols-1 gap-8 p-6 lg:p-0">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Contact</h4>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@federatedengineers.com"
                    className="group flex items-center gap-3 text-white transition-opacity hover:opacity-60"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#471E95] transition-colors ">
                      <img
                        src="/assets/icons/mail.svg"
                        alt="Email Icon"
                        className="h-4 w-4"
                      />
                    </div>
                    <span>hello@federatedengineers.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-white transition-opacity hover:opacity-60">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#471E95] transition-colors ">
                      <img
                        src="/assets/icons/location.svg"
                        alt="Location Icon"
                        className="h-4 w-4"
                      />
                    </div>
                    <span>Germany</span>
                  </div>
                </div>
              </div>

              {/* Socials Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Socials</h4>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-white transition-opacity hover:opacity-60"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#471E95] transition-colors ">
                      <img
                        src="/assets/icons/linkedin.svg"
                        alt="LinkedIn Icon"
                        className="h-4 w-4"
                      />
                    </div>
                    <span>Linkedin</span>
                  </a>
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-white transition-opacity hover:opacity-60"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#471E95] transition-colors ">
                      <img
                        src="/assets/icons/x.svg"
                        alt="Twitter Icon"
                        className="h-4 w-4"
                      />
                    </div>
                    <span>X (Former Twitter)</span>
                  </a>
                </div>
              </div>

              {/* Legal Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Legal</h4>
                <div className="space-y-4">
                  <Link
                    href="/privacy-policy"
                    className="group flex items-center gap-3 text-white transition-opacity hover:opacity-60"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#471E95] transition-colors  ">
                      <img
                        src="/assets/icons/document.svg"
                        alt="Privacy Icon"
                        className="h-4 w-4"
                      />
                    </div>
                    <span>Privacy Policy</span>
                  </Link>
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-white transition-opacity hover:opacity-60"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#471E95] transition-colors ">
                      <img
                        src="/assets/icons/document.svg"
                        alt="Terms Icon"
                        className="h-4 w-4"
                      />
                    </div>
                    <span>Terms of Service</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="pointer-events-none w-full overflow-hidden select-none">
              <Marquee speed={80}>
                <div className="flex whitespace-nowrap text-[112px] font-semibold text-[#471E95]">
                  {[...Array(1)].map((_, i) => (
                    <div key={i} className="flex items-center pr-8">
                      <img
                        src="/assets/icons/footer-logo.svg"
                        alt=""
                        className="h-[1em] w-auto"
                      />
                      <span>Federated Engineers</span>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
