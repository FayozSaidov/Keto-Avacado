import { LiaTelegramPlane } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <div className="w-full h-[80px] flex items-center bg-black flex-col">
      <div className="w-[300px] flex h-10 items-center justify-center">
        <a
          href="https://t.me/ssaidovf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LiaTelegramPlane
            size={24}
            className="text-white w-10 h-10 p-2"
          />
        </a>
        <a
          href="https://www.instagram.com/fayoz_saidov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram
            size={24}
            className="text-white w-10 h-10 p-2"
          />
        </a>
        <a
          href="https://facetime.apple.com/join#v=1&p=yb6LdmfJEe+fmsoeyq8CIw&k=c9DTXO1NOoHHzdBmuoCbGhwsEgW3KdmOi-vSSpeCYJg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiPhone
            size={24}
            className="text-white w-10 h-10 p-2"
          />
        </a>
      </div>
      <p className="text-[15px] text-gray-500">© 2024. Все права защищены</p>
    </div>
  );
}

export default Footer;
