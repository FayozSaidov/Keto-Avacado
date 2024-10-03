import done from "../img/check.png";
import { motion } from "framer-motion";
import React from 'react';
import { useInView } from 'react-intersection-observer';

function Problems() {
  const items = [
    "ИЗБЫТОЧНЫЙ ВЕС",
    "НЕДОСТАТОК ЭНЕРГИИ",
    "ПРОБЛЕМЫ С ПИЩЕВАРЕНИЕМ",
    "ПЛОХОЙ СОН",
    "ЗАВИСИМОСТЬ К ЕДЕ",
    "НАРУШЕНИЕ ОБМЕНА ВЕЩЕСТВ",
    "ПЛОХОЕ СОСТОЯНИЕ",
    "ГОЛОВНЫЕ БОЛИ",
    "САХАРНЫЕ ДИАБЕТ",
    "НАРУШЕНИЕ ГОРМОНАЛЬНОГО БАЛАНСА",
    "ДЕФИЦИТ ВИТАМИНОВ"
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.2,     
  });

  const animateP = {
    visible: i => ({
        opacity: 1,
        transition: {
            delay: i * .2
        }
    }),
    hidden: {opacity: 0}
  }

  return (
    <div ref={ref} className="w-full bg-slate-50 h-[550px] pt-16">
      <div className="w-5/6 mx-auto mt-16 h-[341px] border-slate-400 border-solid border-[1px]">
        <p className="-mt-[23px] w-[387px] p-1 bg-slate-50 font-[500] ml-[55px] text-[24px]">
          Проблемы связанные с питанием
        </p>
        <div className="colum">
          {items.map((item, i) => (
            <motion.p className="w-[400px] h-[30px] flex items-center font-light text-[18px]"
                key={item}
                variants = {animateP}
                initial = 'hidden'
                animate={inView ? 'visible' : 'hidden'}
                custom = {i}
                >
            <img src={done} className="w-[18px] mr-2" />
            {item}
          </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Problems;
