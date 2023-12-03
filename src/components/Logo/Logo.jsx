import css from "./Logo.module.css";
import HandleBlur from "../../utils/HandleBlur";
import svg from "/src/assets/symbol-defs.svg";

const Logo = () => {
  return (
    <div className={css.logo} onClick={HandleBlur}>
      <svg className={css.icon} width={31} height={18}>
        <use href={`${svg}#icon-icon`}></use>
      </svg>
      <svg className={css.ecosolution} width={170} height={40}>
        <use href={`${svg}#icon-ecosolution`}></use>
      </svg>
      <svg className={css.greenergy} width={60} height={18}>
        <use href={`${svg}#icon-greenergy`}></use>
      </svg>
    </div>
  );
};

export default Logo;
