import mainImg from "../img/orig-784de06e.jpg";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import React, { useState, useEffect, useRef } from "react";
import certificate from "../img/certificate-b4596a12.jpg";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function InfoSlide() {
  const [isCertOpen, setIsCertOpen] = useState(false);

  useEffect(() => {
    if (isCertOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCertOpen]);

  const openCertificate = (e) => {
    setIsCertOpen(true);
  };

  const closeCertificate = () => {
    setIsCertOpen(false);
  };

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
    <div ref={ref} id="aboutMe" className="w-full h-96 p-16 bg-customBg">
      <motion.div
        className="w-5/6 h-96 flex justify-between mx-auto"
        initial={{ opacity: 0, y: 50 }} // Начальное состояние: прозрачный и ниже текущей позиции
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // Конечное состояние: полностью видимый на своей позиции
        transition={{ duration: 1 }} // Время анимации 1 секунда
      >
        {/* Left side */}
        <div className="w-6/12 h-auto">
          <h2 className="text-xl text-white">Меня зовут</h2>
          <h1 className="text-4xl mt-3 text-yellow-500 font-sans font-medium">
            Камол Латипов
          </h1>
          <p className="text-base mt-5 font-medium text-white">
            На сегодняшний день я являюсь лецинзированным нутрициологом. Помогаю
            людям избавиться от лишнего веса и вести здоровый образ жизни.
          </p>
          <button
            onClick={openCertificate}
            className="w-40 h-11 bg-green-400 text-white text-sm rounded-full mt-5"
          >
            СЕРТИФИКАТ
          </button>
        </div>

        {/* Right side */}
        <div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, 0] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <img src={mainImg} className="w-64 rounded-full -mt-5" alt="Main" />
          </motion.div>

          <div className="flex justify-between w-40 ml-12 mt-4">
            <a
              href="https://t.me/ssaidovf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaTelegramPlane
                size={24}
                className="text-white bg-yellow-500 w-10 h-10 p-2 rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/fayoz_saidov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram
                size={24}
                className="text-white bg-yellow-500 w-10 h-10 p-2 rounded-full"
              />
            </a>
            <a
              href="https://facetime.apple.com/join#v=1&p=yb6LdmfJEe+fmsoeyq8CIw&k=c9DTXO1NOoHHzdBmuoCbGhwsEgW3KdmOi-vSSpeCYJg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiPhone
                size={24}
                className="text-white bg-yellow-500 w-10 h-10 p-2 rounded-full"
              />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isCertOpen && (
        <div
          onClick={closeCertificate}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg z-50"
          >
            <IoClose
              onClick={closeCertificate}
              size={40}
              className="cursor-pointer text-white absolute top-4 right-4"
              color="white"
            />
            <img
              onClick={(e) => e.preventDefault()}
              src={certificate}
              alt="Certificate"
              className="max-w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoSlide;
