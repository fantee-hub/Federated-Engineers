import { Variants, motion } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ReasonCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <motion.div
    variants={itemVariants}
    className="bg-white p-6 flex flex-col items-start text-left border-r-0 border-b border-[#E6E6E6] 
    last:border-b-0 last:border-r-0 
    md:border-r md:nth-[2n]:border-r-0 md:nth-last-[-n+2]:border-b-0
    lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 lg:nth-last-[-n+3]:border-b-0"
  >
    <div className="w-16 h-16 bg-[#E4D6FE] rounded-3xl flex items-center justify-center mb-8 ">
      <motion.div className="rounded-[20px] bg-[#7632F9] w-14 h-14 shadow-lg shadow-purple-100 flex items-center justify-center">
        <motion.img
          src={icon}
          alt={title}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-8 h-8 object-contain"
        />
      </motion.div>
    </div>

    <h3 className="mb-5 text-xl font-semibold text-[#2E2E2E] leading-6">
      {title}
    </h3>
    <p className="text-[#5C5C5C] leading-6">{description}</p>
  </motion.div>
);

export default ReasonCard;
