import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default () => {

  const SwiperArr = [
  {
    color: 'bg-red-400',
    textBefore: '120кг',
    textAfter: '85кг',
    textResult: '35кг за 6 месяцев'
  },
  {
    color: 'bg-blue-400',
    textBefore: '95кг',
    textAfter: '70кг',
    textResult: '25кг за 3 месяца'
  },
  {
    color: 'bg-orange-400',
    textBefore: '110кг',
    textAfter: '78кг',
    textResult: '32кг за 5 месяцев'
  },
  {
    color: 'bg-green-400',
    textBefore: '130кг',
    textAfter: '92кг',
    textResult: '38кг за 7 месяцев'
  },
  {
    color: 'bg-yellow-400',
    textBefore: '85кг',
    textAfter: '65кг',
    textResult: '20кг за 4 месяца'
  },
  {
    color: 'bg-black',
    textBefore: '100кг',
    textAfter: '72кг',
    textResult: '28кг за 6 месяцев'
  },
];


  return (
    <div id="results" className="w-full bg-slate-50 pb-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop = {true}
        className="w-[81%] h-[380px]"
      >
      {SwiperArr.map(({color, textAfter, textResult, textBefore}, idx) =>(
        <SwiperSlide className="bg-white p-3 shadow-xl w-48 h-[370px] rounded-xl">
          <div className={`w-[95%] mx-auto h-[270px] rounded-xl ${color} `}></div>
          <div className="flex p-2">
          <p className="ml-[10px] text-[18px]">До <span>{textBefore}</span> | </p>
          <p className="ml-[10px] text-[18px]">После <span>{textAfter}</span></p>
          </div>
          <p className="ml-[15px] text-[18px] animate-color-change">{textResult}</p>
        </SwiperSlide>
      ))}
        
      </Swiper>
    </div>
  );
};
