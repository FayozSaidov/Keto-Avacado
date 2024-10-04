import logo from "../img/logo-270b8c99 (1).svg";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css"

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });

  const botToken = "7154521362:AAGDVV3QbprtqdCwjkXpfw8sK1AhqSwyPHw";
  const chatId = "7385247624";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `
          Имя: ${formData.name}
          Номер: ${formData.number}
        `;

    axios
      .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      })
      .then((response) => {
        console.log("Сообщение успешно отправлено", response);
        setFormData({ name: "", number: "" });
      })
      .catch((error) => {
        alert("Ошибка при отправке сообщения", error);
      });
  };

  // Define motion configurations as constants
  const modalBackgroundAnim = {
    initial: { scale: 1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
    transition: { duration: 0.3 },
  };

  const modalContentAnim = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={closeModal}
        className="bg_modal"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="w-2/5 h-[550px] p-10 rounded-xl border-2 border-grey bg-white ease-in-out"
          {...modalContentAnim}   // Modal content animation
        >
          <div className="flex w-full h-auto justify-between">
            <img src={logo} className="w-16" alt="Logo" />
            <IoClose
              onClick={closeModal}
              size={30}
              className="cursor-pointer"
            />
          </div>

          <h1 className="text-2xl font-medium mt-1">Заявка на курс</h1>

          <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
            <label className="mb-2 text-sm" htmlFor="name">
              Ваше имя
            </label>
            <input
              required
              className="h-14 rounded-md border-2 boreder-grey p-3"
              type="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></input>

            <label className="mb-2 text-sm mt-8" htmlFor="number">
              Ваш номер телефона
            </label>
            <input
              className="h-14 rounded-md p-3 border-2 border-grey"
              type="tel"
              name="number"
              value={formData.number}
              required
              onChange={handleChange}
            ></input>

            <button className="bg-green-400 text-white text-lg mt-5 h-14 rounded-full">
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </form>
          <div className="w-full bg-slate-300 h-px mt-4" />
          <p className="text-sm text-slate-400 mt-6">
            Пожалуйста, убедитесь, что правильно ввели данные.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
