"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openModal } from "@/src/lib/redux/slices/modalSlice";

const WhoWeServe = () => {
  const dispatch = useDispatch();
  return (
    <section className="w-full bg-white page relative lg:mt-20 mt-10 border-t border-[#E6E6E6] overflow-hidden">
      <div className="absolute border-[#E6E6E6] border-b w-full bottom-0"></div>
      <div className="lg:border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className=" w-full">
          <div className="flex justify-center items-center lg:flex-row flex-col-reverse lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="px-4 lg:px-0"
            >
              <div className="bg-white flex flex-col justify-center flex-1 w-full px-6 py-8 lg:p-0 border-x border-[#E6E6E6] lg:border-none">
                <div className="max-w-140 lg:pl-10">
                  <span className="rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
                    Who We Serve
                  </span>

                  <h3 className="lg:text-[20px] lg:leading-relaxe leadiing-6 text-[#2E2E2E] my-6">
                    Whether you are a bootcamp graduate looking for production
                    experience, or an enterprise team upskilling for the GenAI
                    revolution, we provide the platform to build your future,
                    one simulation at a time.
                  </h3>

                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => dispatch(openModal("join"))}
                    className=" gap-2 rounded-lg bg-[#7632F9] lg:w-49.5 w-full h-14 flex items-center lg:justify-center justify-between px-4 lg:px-0 font-semibold text-white transition-all hover:brightness-110 cursor-pointer"
                  >
                    Join Our Pool <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1"
            >
              <div className="relative w-full overflow-hidden">
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <img
                    src="/assets/who-we-serve.png"
                    alt="Our Mission"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
