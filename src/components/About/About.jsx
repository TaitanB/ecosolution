import css from "./About.module.css";
import { MaximizeCircle, GlobalEdit, CpuCharge, Rank } from "iconsax-react";

import about_mob_1x from "/src/assets/image/about-mob-1x.png";
import about_mob_2x from "/src/assets/image/about-mob-2x.png";
import about_tab_1x from "/src/assets/image/about-tab-1x.png";
import about_tab_2x from "/src/assets/image/about-tab-2x.png";
import about_1x from "/src/assets/image/about-1x.png";
import about_2x from "/src/assets/image/about-2x.png";

const About = () => {
  return (
    <div className={css.about}>
      <div className={css.container}>
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
        <p className={css.copy}>ecosolution © 2023</p>
      </div>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`${about_mob_1x} 1x, ${about_mob_2x} 2x`}
        />
        <source
          media="(min-width: 768px) and (max-width: 1279px)"
          srcSet={`${about_tab_1x} 1x, ${about_tab_2x} 2x`}
        />
        <source
          media="(min-width: 1280px)"
          srcSet={`${about_1x} 1x, ${about_2x} 2x`}
        />
        <img
          srcSet={`${about_mob_1x} 1x, ${about_mob_2x} 2x`}
          src={about_mob_1x}
          alt="Renewable energy"
          className={css.img}
        />
      </picture>
      <div className={css.content}>
        <h2 className={css.title}>Main values of our company</h2>
        <p className={css.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&apos;s energy needs.
        </p>
      </div>

      <ul className={css.values_list}>
        <li className={css.item}>
          <div className={css.item_content}>
            <MaximizeCircle className={css.icon} />
            <h3 className={css.subtitle}>Openness</h3>
          </div>
          <p className={css.value}>
            to the world, people, new ideas and projects
          </p>
        </li>
        <li className={css.item}>
          <div className={css.item_content}>
            <GlobalEdit className={css.icon} />
            <h3 className={css.subtitle}>Responsibility</h3>
          </div>
          <p className={css.value}>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </li>
        <li className={css.item_img1}></li>
        <li className={css.item_img2}></li>
        <li className={css.item}>
          <div className={css.item_content}>
            <CpuCharge className={css.icon} />
            <h3 className={css.subtitle}>Innovation</h3>
          </div>
          <p className={css.value}>
            we use the latest technology to implement non-standard solutions
          </p>
        </li>
        <li className={css.item}>
          <div className={css.item_content}>
            <Rank className={css.icon} />
            <h3 className={css.subtitle}>Quality</h3>
          </div>
          <p className={css.value}>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
