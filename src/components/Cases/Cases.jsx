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

const Cases = () => {
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
    <div>
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
        <SwiperSlide>
          <div className={css.item}>
            <img
              className={css.img}
              srcSet={`${slide1_1x} 1x, ${slide1_2x} 2x}`}
              src={slide1_1x}
              alt="Wind Power for auto field irrigation"
            />
            <div className={css.content}>
              <div className={css.content_container}>
                <p className={css.text}>
                  Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
                </p>
                <div className={css.arrow_contain}>
                  <ArrowRight
                    size="28px"
                    transform="rotate(-45)"
                    className={css.arrow}
                  />
                </div>
              </div>
              <div className={css.bottom_text}>
                Wind Power for auto field irrigation <div>July 2023</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.item}>
            <img
              className={css.img}
              srcSet={`${slide2_1x} 1x, ${slide2_2x} 2x}`}
              src={slide2_1x}
              alt="Solar Panels for industrial use"
            />
            <div className={css.content}>
              <div className={css.content_container}>
                <p className={css.text}>
                  Zhytomyr city Private Enterprise “Bosch”
                </p>
                <div className={css.arrow_contain}>
                  <ArrowRight
                    size="28px"
                    transform="rotate(-45)"
                    className={css.arrow}
                  />
                </div>
              </div>
              <div className={css.bottom_text}>
                Solar Panels for industrial use <div>November 2023</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.item}>
            <img
              className={css.img}
              srcSet={`${slide3_1x} 1x, ${slide3_2x} 2x}`}
              src={slide3_1x}
              alt="Thermal modules"
            />
            <div className={css.content}>
              <div className={css.content_container}>
                <p className={css.text}>
                  Rivne city Private Enterprise “Biotech”
                </p>
                <div className={css.arrow_contain}>
                  <ArrowRight
                    size="28px"
                    transform="rotate(-45)"
                    className={css.arrow}
                  />
                </div>
              </div>
              <div className={css.bottom_text}>
                Thermal modules <div>October 2023</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.item}>
            <img
              className={css.img}
              srcSet={`${slide4_1x} 1x, ${slide4_2x} 2x}`}
              src={slide4_1x}
              alt="Wind power"
            />
            <div className={css.content}>
              <div className={css.content_container}>
                <p className={css.text}>
                  Kherson city Private Enterprise “HealthyFarm”
                </p>
                <div className={css.arrow_contain}>
                  <ArrowRight
                    size="28px"
                    transform="rotate(-45)"
                    className={css.arrow}
                  />
                </div>
              </div>
              <div className={css.bottom_text}>
                Wind power <div>September 2021</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.item}>
            <img
              className={css.img}
              srcSet={`${slide5_1x} 1x, ${slide5_2x} 2x}`}
              src={slide5_1x}
              alt="Mini nuclear stations"
            />
            <div className={css.content}>
              <div className={css.content_container}>
                <p className={css.text}>
                  Zaporizhia city Private Enterprise “Biotech”
                </p>
                <div className={css.arrow_contain}>
                  <ArrowRight
                    size="28px"
                    transform="rotate(-45)"
                    className={css.arrow}
                  />
                </div>
              </div>
              <div className={css.bottom_text}>
                Mini nuclear stations <div>May 2021</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cases;
