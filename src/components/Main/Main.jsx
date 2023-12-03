import css from "./Main.module.css";
import Arrow from "../Arrow/Arrow";

const Main = () => {
  return (
    <div id="main" className={css.main}>
      <h1 className={css.title}>Renewable energy for any task</h1>
      <div className={css.container}>
        <p className={css.text}>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
        <a href="#cases" className={css.button}>
          <p className={css.text_btn}>Learn more</p>
          <Arrow />
        </a>
      </div>
    </div>
  );
};

export default Main;
