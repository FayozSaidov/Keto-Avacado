import icon1 from "../img/Без названия.png";
import icon2 from "../img/Без названия (1).png";
import icon3 from "../img/Без названия (2).png";
import ModalBtn from "./modalBtn";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Course() {
  const arr = [
    {
      img: icon1,
      h2: "Коучинг по питанию",
      p: "Создаём здоровые привычки в еде, достигаем целей и улучшаем общее здоровье.",
    },
    {
      img: icon2,
      h2: "Гарантированные результаты",
      p: "За месяц вы можете похудеть от 8 до 12 кг.",
    },
    {
      img: icon3,
      h2: "Индивидуальный план",
      p: "Ориентированный на уникальные потребности организма.",
    },
  ];

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        id="aboutCourse"
        className="w-5/6 mx-auto mt-14 flex justify-between"
      >
        {/* left side */}
        <motion.div
          className="w-6/12 h-auto"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <ul>
            {arr.map((item, idx) => (
              <li
                key={idx}
                className="w-full h-36 p-7 flex mt-4 items-center shadow-lg"
              >
                <img className="w-20 mr-3" src={item.img} />
                <span>
                  <h2 className="text-xl font-semibold">{item.h2}</h2>
                  <p className="text=sm text-gray-600 font-extralight">
                    {item.p}
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* right side */}
        <motion.div
          className=" h-auto w-6/12 p-10 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-lg">Преобразуйте свой образ жизни</h2>
          <h1 className="text-4xl text-yellow-500 mt-3">
            Курс здорового питания
          </h1>
          <p className="text-sm mt-10 text-slate-500">
            Основанный на принципах кето, не просто диета, а образ жизни.
            Обучение включает в себя принципы питания, поддерживающие здоровье,
            энергию и устойчивость.
          </p>
          <ModalBtn text="СВЯЗАТЬСЯ" />
        </motion.div>
      </div>
    </>
  );
}

export default Course;
