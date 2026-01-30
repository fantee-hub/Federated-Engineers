"use client";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className="w-full bg-[#180A32] py-20 page">
      <div className="mx-auto max-w-300 px-6">
        <div className="flex flex-col overflow-hidden rounded-2xl md:flex-row">
          <div className="flex-1 bg-[#7632F9] lg:p-10 border-r-4 border-white relative">
            <h2 className="mb-4 text-[40px] font-semibold leading-12 text-white">
              Take the Next Step With the Pool
            </h2>
            <p className="mb-6 max-w-104 text-lg text-[#E6E6E6]">
              Join the pool as an engineer or hire vetted talent for your data
              and AI work.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg bg-white w-44 h-15 flex items-center justify-center font-semibold text-lg text-[#7632F9] cursor-pointer ease-in-out transition-transform hover:scale-105">
                Join the Pool
              </button>
              <button className="rounded-lg border-2 border-white w-39.25 h-15 font-semibold text-white text-lg cursor-pointer transition-all ease-in-out hover:scale-105 hover:bg-white/10">
                Hire Talent
              </button>
            </div>
            <div>
              <img
                src="/assets/bars.svg"
                alt="Footer Illustration"
                className="absolute bottom-0 right-0 hidden h-34.5 w-auto lg:block"
              />
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden bg-[#2F1464] lg:pt-10 lg:pb-0 lg:px-10">
            <div className="relative z-10 grid grid-cols-1 gap-8">
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
                  <a
                    href="#"
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
                  </a>
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
