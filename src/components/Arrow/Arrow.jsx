import css from "./Arrow.module.css";
import { ArrowRight } from "iconsax-react";

const Arrow = () => {
  return (
    <div className={css.arrow_container}>
      <ArrowRight className={css.arrow} />
    </div>
  );
};

export default Arrow;
