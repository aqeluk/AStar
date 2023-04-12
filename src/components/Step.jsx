import React, { useState } from "react";
import { StepData } from "./StepData";
import { motion, AnimatePresence } from "framer-motion";

const Step = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleClick = (index) => {
    setActiveStep(index + 1);
  };

  const tabVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div id="content" className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Professional Childminding Services
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Our experienced childminders provide a safe, nurturing, and
          educational environment for your children. We prioritize each child's
          unique needs, ensuring they feel comfortable and secure while in our
          care. Contact us to learn more about our comprehensive childminding
          services and how we can support your family.
        </p>
      </div>
      <div className="flex mx-auto flex-wrap mb-20">
        {StepData.map((step, index) => (
          <motion.a
            key={index}
            onClick={() => handleClick(index)}
            className={`px-4 py-3 w-full sm:w-1/2 lg:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none cursor-pointer ${
              activeStep === index + 1
                ? "bg-gray-100 border-orange-500 text-orange-500"
                : "border-gray-200 hover:text-orange-600"
            } tracking-wider rounded-t mb-4 sm:mb-0`}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            variants={tabVariants}
          >
            {step.icon}
            STEP {index + 1}: {step.title}
          </motion.a>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          className="flex flex-col text-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold title-font mb-4 text-orange-500 tracking-wider">
            {StepData[activeStep - 1].title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {StepData[activeStep - 1].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Step;
