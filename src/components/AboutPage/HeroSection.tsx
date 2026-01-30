const HeroSection = () => {
  return (
    <section className="w-full bg-white page">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className="flex flex-col items-center px-10 pt-20 pb-10 text-center">
          <span className="mb-2 rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
            About Us
          </span>
          <h2 className="max-w-4xl text-[48px] font-semibold leading-14 text-[#2F1464]">
            Bridging the Gap Between Local <br /> Learning and Production.
          </h2>
          <p className="max-w-124 pt-2 text-[#2E2E2E] text-lg">
            At{" "}
            <span className="font-semibold text-[#000000]">
              Federated Engineers
            </span>
            , we simulate the high-stakes reality of building modern{" "}
            <span className="font-semibold text-[#000000]">Data Platforms</span>{" "}
            that power Data and AI products.
          </p>
        </div>

        <div className="grid w-full grid-cols-1">
          <div className="w-full flex justify-center">
            <div>
              <img
                src="/assets/readytobuildline1.svg"
                alt="Ghost Box Left"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="flex h-full w-full flex-col items-center justify-center">
                <img
                  src="/assets/about-hero.png"
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

          <div className=" bg-white px-10 py-10 lg:px-16">
            <div className="max-w-260 space-y-6">
              <p className="text-[20px] leading-8 text-[#2E2E2E]">
                In an era where data volume has surpassed{" "}
                <span className="font-semibold text-[#000000]">
                  221 zettabytes
                </span>{" "}
                and Agentic AI is rewriting the rules of the workforce,
                traditional bootcamps are doing their best with first hand
                exposure, but the{" "}
                <span className="font-semibold text-[#000000]">
                  bigger picture (PRODUCTION) is missing
                </span>
                , hence bootcamps are no longer enough.
              </p>

              <p className="text-[20px] leading-8 text-[#2E2E2E]">
                Federated Engineers provide the{" "}
                <span className="font-semibold text-[#000000]">
                  "missing year"
                </span>{" "}
                of experience through immersive,{" "}
                <span className="font-semibold text-[#000000]">
                  production-grade
                </span>{" "}
                simulations of building varieties of{" "}
                <span className="font-semibold text-[#000000]">
                  Data Platforms
                </span>{" "}
                that support not only Analytics, but also{" "}
                <span className="font-semibold text-[#000000]">
                  Artificial Intelligence (AI)
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
