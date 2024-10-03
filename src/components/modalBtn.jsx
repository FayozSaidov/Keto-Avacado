import { useState } from "react";
import Modal from "./modal";

function ModalBtn({ text }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("something");
  };

  return (
    <>
     {isModalOpen &&  <Modal closeModal={closeModal}/>}
      <button onClick={openModal} className="w-56 h-12 text-white rounded-full mt-6 font-medium text-sm bg-green-400">
        {text}
      </button>
    </>
  );
}

export default ModalBtn;
