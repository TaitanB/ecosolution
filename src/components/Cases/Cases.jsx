import css from "./Cases.module.css";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide1_1x from "/src/assets/image/slide1-1x.png";
import slide1_2x from "/src/assets/image/slide1-2x.png";
import slide2_1x from "/src/assets/image/slide2-1x.png";
import slide2_2x from "/src/assets/image/slide2-2x.png";
import slide3_1x from "/src/assets/image/slide3-1x.png";
import slide3_2x from "/src/assets/image/slide3-2x.png";
import slide4_1x from "/src/assets/image/slide4-1x.png";
import slide4_2x from "/src/assets/image/slide4-2x.png";
import slide5_1x from "/src/assets/image/slide5-1x.png";
import slide5_2x from "/src/assets/image/slide5-2x.png";

import CasesSlide from "../CasesSlide/CasesSlide";

const Cases = () => {
  const slidesData = [
    {
      image: slide1_1x,
      image2x: slide1_2x,
      location: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
      description: "Wind Power for auto field irrigation",
      date: "July 2023",
    },
    {
      image: slide2_1x,
      image2x: slide2_2x,
      location: "Zhytomyr city Private Enterprise “Bosch”",
      description: "Solar Panels for industrial use",
      date: "November 2023",
    },
    {
      image: slide3_1x,
      image2x: slide3_2x,
      location: "Rivne city Private Enterprise “Biotech”",
      description: "Thermal modules",
      date: "October 2023",
    },
    {
      image: slide4_1x,
      image2x: slide4_2x,
      location: "Kherson city Private Enterprise “HealthyFarm”",
      description: "Wind power",
      date: "September 2021",
    },
    {
      image: slide5_1x,
      image2x: slide5_2x,
      location: "Zaporizhia city Private Enterprise “Biotech”",
      description: "Mini nuclear stations",
      date: "May 2021",
    },
  ];

  const pagination = {
    type: "fraction",
    formatFractionCurrent(num) {
      return `0${num}`;
    },
    formatFractionTotal(num) {
      return `0${num}`;
    },
  };

  return (
    <div id="cases">
      <h2 className={css.title}>Successful cases of our company</h2>
      <div className={css.slider_bar}>
        <div className={css.container}>
          <div className={`prev-btn ${css.arrow_container}`}>
            <ArrowLeft size="36px" className={css.arrow} />
          </div>
          <div className={`next-btn ${css.arrow_container}`}>
            <ArrowRight size="36px" className={css.arrow} />
          </div>
        </div>
      </div>
      <Swiper
        pagination={pagination}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        slidesPerView={1}
        loop={true}
        spaceBetween={12}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={css.swiper}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <CasesSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cases;
