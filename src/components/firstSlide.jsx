import FirstBg from "../img/bg-image-febeac47.png";
import ModalBtn from "./modalBtn";
import "../index.css";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

function FirstSlide() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация срабатывает только один раз
    threshold: 0.2, // Процент видимости элемента
  });

  return (
    <div
      id="firstSection"
      className="w-full h-screen relative flex justify-center items-center"
      ref={ref}
    >
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${FirstBg})` }}
      ></div>

      <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-t from-white/100 to-transparent">
        <div className="text-center -mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}  // Анимация запускается при inView
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: 'spring',
                damping: 10,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <h1 className="text-black text-7xl font-normal">НУТРИЦИОЛОГ</h1>

            <p className="text-x mt-6 tracking-widest font-normal">
              СПЕЦИАЛИЗИРОВАННЫЙ КОУЧИНГ ПО ПИТАНИЮ
            </p>
          </motion.div>

          <ModalBtn text="ЗАПИСАТЬСЯ НА КУРС" />
        </div>
      </div>
    </div>
  );
}

export default FirstSlide;
