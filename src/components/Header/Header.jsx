import { useState, useEffect } from "react";
// import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import { ArrowDown, HambergerMenu } from "iconsax-react";

import css from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`${css.header} ${scrolled ? css.scrolled : ""}`}>
      <div className={`${css.content} container`}>
        <Logo />
        <div className={css.menu}>
          <HambergerMenu size="16" color="#173D33" />
        </div>
        <button type="button" className={css.button}>
          <p className={css.text_btn}>Get in touch</p>
          <div className={css.dott}>
            <ArrowDown size="10" color="#173D33" />
          </div>
        </button>
        {/* <Burger /> */}
      </div>
    </header>
  );
};

export default Header;
