// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://backoffice.soccerbible.com/media/135865/real-1-min.jpg?_gl=1*1qpu3gw*_up*MQ..*_ga*MzkxMTc4NjA1LjE3MzMyNDQ4NDI.*_ga_Y4X5CXH0G7*MTczMzI0NDgzOC4xLjAuMTczMzI0NDgzOC4wLjAuMTc0OTk1MjIyOQ.."
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e22d8e2b-b434-4e67-8f79-1302949981b0/_1_H24224_RMFW24_AWAY_JERSEY_GROUP_NONADIDAS_3.app.webp?preferwebp=true"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://backoffice.soccerbible.com/media/160079/mugen-2-min.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://i.pinimg.com/originals/5a/ae/ca/5aaecac0fa1e09b688e3004fdeae1750.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://cdn.bleacherreport.net/images_root/slides/photos/000/793/322/109751337_original.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
