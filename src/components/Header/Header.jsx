import { useState, useEffect } from "react";
// import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import { HambergerMenu } from "iconsax-react";

import css from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("useEffect");

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
        {/* <Burger /> */}
      </div>
    </header>
  );
};

export default Header;
