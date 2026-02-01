import { motion } from "framer-motion";
const ReasonCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="bg-white p-6 flex flex-col items-start text-left">
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
  </div>
);

export default ReasonCard;
