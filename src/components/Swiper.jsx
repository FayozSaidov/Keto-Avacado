import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default () => {
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
        <SwiperSlide className="bg-white p-3 shadow-xl w-48 h-[370px] rounded-xl">
          <div className="w-[95%] mx-auto h-[270px] rounded-xl bg-red-400"></div>
          <div className="flex p-2">
          <p className="ml-[10px] text-[18px]">До <span>105кг</span> | </p>
          <p className="ml-[10px] text-[18px]">После <span>71кг</span></p>
          </div>
          <p className="ml-[15px] text-[18px] animate-color-change">34кг за 4 месяца</p>
        </SwiperSlide>

        <SwiperSlide className="bg-white p-3 shadow-xl w-48 h-[370px] rounded-xl">
          <div className="w-[95%] mx-auto h-[270px] rounded-xl bg-blue-400"></div>
          <div className="flex p-2">
          <p className="ml-[10px] text-[18px]">До <span>105кг</span> | </p>
          <p className="ml-[10px] text-[18px]">После <span>71кг</span></p>
          </div>
          <p className="ml-[15px] text-[18px] animate-color-change">34кг за 4 месяца</p>
        </SwiperSlide>

        <SwiperSlide className="bg-white p-3 shadow-xl w-48 h-[370px] rounded-xl">
          <div className="w-[95%] mx-auto h-[270px] rounded-xl bg-green-400"></div>
          <div className="flex p-2">
          <p className="ml-[10px] text-[18px]">До <span>105кг</span> | </p>
          <p className="ml-[10px] text-[18px]">После <span>71кг</span></p>
          </div>
          <p className="ml-[15px] text-[18px] animate-color-change">34кг за 4 месяца</p>
        </SwiperSlide>

        <SwiperSlide className="bg-white p-3 shadow-xl w-48 h-[370px] rounded-xl">
          <div className="w-[95%] mx-auto h-[270px] rounded-xl bg-yellow-400"></div>
          <div className="flex p-2">
          <p className="ml-[10px] text-[18px]">До <span>105кг</span> | </p>
          <p className="ml-[10px] text-[18px]">После <span>71кг</span></p>
          </div>
          <p className="ml-[15px] text-[18px] animate-color-change">34кг за 4 месяца</p>
        </SwiperSlide>

        <SwiperSlide className="bg-white p-3 shadow-xl w-48 h-[370px] rounded-xl">
          <div className="w-[95%] mx-auto h-[270px] rounded-xl bg-orange-400"></div>
          <div className="flex p-2">
          <p className="ml-[10px] text-[18px]">До <span>105кг</span> | </p>
          <p className="ml-[10px] text-[18px]">После <span>71кг</span></p>
          </div>
          <p className="ml-[15px] text-[18px] animate-color-change">34кг за 4 месяца</p>
        </SwiperSlide>

        <SwiperSlide className="bg-white p-3 shadow-xl w-48 h-[370px] rounded-xl">
          <div className="w-[95%] mx-auto h-[270px] rounded-xl bg-black"></div>
          <div className="flex p-2">
          <p className="ml-[10px] text-[18px]">До <span>105кг</span> | </p>
          <p className="ml-[10px] text-[18px]">После <span>71кг</span></p>
          </div>
          <p className="ml-[15px] text-[18px] animate-color-change">34кг за 4 месяца</p>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};
