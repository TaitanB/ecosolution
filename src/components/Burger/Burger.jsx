import { useState, useEffect } from "react";
import css from "./Burger.module.css";
import { ArrowRight, Instagram } from "iconsax-react";
import PropTypes from "prop-types";

const Burger = ({ isOpen, onCloseMenu }) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveLink(hash);
    };

    const handleKeyPress = (e) => {
      if (e.key === "Escape" && isOpen) {
        onCloseMenu();
      }
    };

    const handleClickBackdrop = (e) => {
      if (isOpen && e.target.classList.contains(css.backdrop)) {
        onCloseMenu();
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClickBackdrop);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClickBackdrop);
    };
  }, [isOpen, onCloseMenu]);

  return (
    <div className={!isOpen ? `visibility-hidden` : `${css.backdrop}`}>
      <div className={css.burger}>
        <button type="button" className={css.close_btn} onClick={onCloseMenu}>
          <svg
            className={css.close}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.83325 5.83325L14.1666 14.1666M5.83325 14.1666L14.1666 5.83325"
              stroke="inherit"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          close
        </button>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li
              className={`${css.item} ${
                activeLink === "#main" ? css.active : ""
              }`}
            >
              <a className={css.link} href="#main" onClick={onCloseMenu}>
                Main
              </a>
              <ArrowRight transform="rotate(-45)" className={css.arrow} />
            </li>
            <li
              className={`${css.item} ${
                activeLink === "#about" ? css.active : ""
              }`}
            >
              <a className={css.link} href="#about" onClick={onCloseMenu}>
                About
              </a>
              <ArrowRight transform="rotate(-45)" className={css.arrow} />
            </li>
            <li
              className={`${css.item} ${
                activeLink === "#cases" ? css.active : ""
              }`}
            >
              <a className={css.link} href="#cases" onClick={onCloseMenu}>
                Cases
              </a>
              <ArrowRight transform="rotate(-45)" className={css.arrow} />
            </li>
            <li
              className={`${css.item} ${
                activeLink === "#faq" ? css.active : ""
              }`}
            >
              <a className={css.link} href="#faq" onClick={onCloseMenu}>
                FAQ
              </a>
              <ArrowRight transform="rotate(-45)" className={css.arrow} />
            </li>
            <li
              className={`${css.item} ${
                activeLink === "#contacts" ? css.active : ""
              }`}
            >
              <a className={css.link} href="#contacts" onClick={onCloseMenu}>
                Contact Us
              </a>
              <ArrowRight transform="rotate(-45)" className={css.arrow} />
            </li>
          </ul>
        </nav>
        <ul className={css.soc_list}>
          <li className={css.soc}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
              className={css.soc_link}
              onClick={onCloseMenu}
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
          <li className={css.soc}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
              className={css.soc_link}
              onClick={onCloseMenu}
            >
              <Instagram className={css.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
};

export default Burger;
