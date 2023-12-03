import css from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { ArrowUp, Instagram } from "iconsax-react";
import HandleBlur from "../../utils/HandleBlur";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.logo}>
        <Logo />
        <a href="#main" className={css.arrow_container} onClick={HandleBlur}>
          <ArrowUp className={css.arrow} />
        </a>
      </div>
      <ul className={css.soc_list}>
        <li className={css.soc} onClick={HandleBlur}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
            className={css.soc_link}
          >
            <svg
              className={css.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 9.3v2.9h2.6c.2 0 .3.2.3.4l-.4 1.9c0 .1-.2.2-.3.2H14V22h-3v-7.2H9.3c-.2 0-.3-.1-.3-.3v-1.9c0-.2.1-.3.3-.3H11V9c0-1.7 1.3-3 3-3h2.7c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.4c-.2 0-.3.1-.3.3Z"
                fill="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </li>
        <li className={css.soc} onClick={HandleBlur}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
            className={css.soc_link}
          >
            <Instagram className={css.icon} />
          </a>
        </li>
      </ul>
      <div className={css.footer_content}>
        <p className={css.adress}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <a
          href="mailto:office@ecosolution.com"
          target="_blank"
          rel="noreferrer noopener"
          className={css.mail}
        >
          office@ecosolution.com
        </a>
        <p className={css.adress}>ecosolution © 2023</p>
      </div>
    </div>
  );
};

export default Footer;
