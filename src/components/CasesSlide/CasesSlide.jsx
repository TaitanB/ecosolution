import css from "./CasesSlide.module.css";
import { ArrowRight } from "iconsax-react";

const CasesSlide = (slide) => {
  return (
    <div className={css.item}>
      <img
        className={css.img}
        srcSet={`${slide.slide.image} 1x, ${slide.slide.image2x} 2x`}
        src={slide.slide.image}
        alt={slide.slide.description}
      />
      <div className={css.content}>
        <div className={css.content_container}>
          <p className={css.text}>{slide.slide.location}</p>
          <div className={css.arrow_contain}>
            <ArrowRight
              size="28px"
              transform="rotate(-45)"
              className={css.arrow}
            />
          </div>
        </div>
        <div className={css.bottom_text}>
          {slide.slide.description} <div>{slide.slide.date}</div>
        </div>
      </div>
    </div>
  );
};

export default CasesSlide;
