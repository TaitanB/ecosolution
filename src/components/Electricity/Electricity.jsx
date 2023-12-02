import { useState, useEffect } from "react";
import css from "./Electricity.module.css";

const Electricity = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={css.electricity}>
      <h2 className={css.title}>Electricity we produced for all time</h2>
      <div className={css.counter}>
        <div className={css.count}>
          {count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </div>
        <div className={css.kWh}>kWh</div>
      </div>
    </div>
  );
};

export default Electricity;
