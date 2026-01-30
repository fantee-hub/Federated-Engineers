"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const ForBusinesses = () => {
  return (
    <section className="w-full bg-white border-y border-[#E6E6E6]  page mt-20">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className="flex flex-col items-center px-10 py-20 text-center">
          <span className="mb-2 rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
            For Businesses
          </span>
          <h2 className="max-w-4xl text-[48px] font-semibold leading-14 text-[#2F1464]">
            Need Production Competent <br /> Engineers?
          </h2>
          <p className="max-w-124 pt-2 text-[#5C5C5C]">
            Hire vetted Data Platform, Data and Machine Learning Engineers with
            proven production competency and real project experience.
          </p>

          <button className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#7632F9] w-48.25 h-15 font-semibold text-white text-lg transition-all hover:brightness-110 cursor-pointer shadow-purple-200">
            Contact Us <ArrowRight size={20} />
          </button>
        </div>

        <div className="w-full flex justify-center gap-px mx-auto max-w-300">
          <div>
            <img
              src="/assets/readytobuildline1.svg"
              alt="Ghost Box Left"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative  w-full overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <img
                src="/assets/forBusinessImage.png"
                alt="For Businesses Hero"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <img
              src="/assets/readytobuildline1.svg"
              alt="Ghost Box Left"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;
