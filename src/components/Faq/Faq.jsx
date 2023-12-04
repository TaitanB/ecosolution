import { useState } from "react";
import css from "./Faq.module.css";
import { Minus, Add, ArrowDown } from "iconsax-react";
import HandleBlur from "../../utils/HandleBlur";

const Faq = () => {
  const [activeItem, setActiveItem] = useState(1);

  const toggleSection = (sectionIndex) => {
    setActiveItem(activeItem === sectionIndex ? null : sectionIndex);
  };

  return (
    <div id="faq" className={css.faq}>
      <h2 className={css.title}>Frequently Asked Questions</h2>
      <ul className={css.list}>
        <li className={css.item} onClick={() => toggleSection(1)}>
          <h3 className={css.subtitle}>
            {activeItem === 1 ? (
              <span>
                <Minus className={css.minus} />
              </span>
            ) : (
              <span>
                <Add className={css.add} />
              </span>
            )}
            How do wind turbines and solar panels work together in a renewable
            energy system?
          </h3>
          {activeItem === 1 && (
            <div className={css.text}>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </div>
          )}
        </li>
        <li className={css.item} onClick={() => toggleSection(2)}>
          <h3 className={css.subtitle}>
            {activeItem === 2 ? (
              <span>
                <Minus className={css.minus} />
              </span>
            ) : (
              <span>
                <Add className={css.add} />
              </span>
            )}
            What sets EcoSolution&apos;s renewable energy solutions apart from
            others on the market?
          </h3>
          {activeItem === 2 && (
            <div className={css.text}>
              Our renewable energy solutions stand out through a comprehensive
              approach covering solar, wind, and cutting-edge technologies. We
              prioritize customization to meet specific needs, uphold
              environmental stewardship, boast a seasoned team with a proven
              track record, and maintain a client-centric focus. Choosing
              EcoSolution means opting for innovative, tailored, and
              environmentally conscious energy solutions.
            </div>
          )}
        </li>
        <li className={css.item} onClick={() => toggleSection(3)}>
          <h3 className={css.subtitle}>
            {activeItem === 3 ? (
              <span>
                <Minus className={css.minus} />
              </span>
            ) : (
              <span>
                <Add className={css.add} />
              </span>
            )}
            How can businesses and communities benefit from integrating
            renewable energy solutions from EcoSolution?
          </h3>
          {activeItem === 3 && (
            <div className={css.text}>
              Businesses and communities gain sustainable advantages by
              integrating EcoSolution&apos;s renewable energy solutions. Our
              tailored approach ensures cost-effective, eco-friendly energy
              solutions, fostering environmental responsibility, reducing
              long-term operational costs, and promoting energy independence for
              a resilient future.
            </div>
          )}
        </li>
        <li className={css.item} onClick={() => toggleSection(4)}>
          <h3 className={css.subtitle}>
            {activeItem === 4 ? (
              <span>
                <Minus className={css.minus} />
              </span>
            ) : (
              <span>
                <Add className={css.add} />
              </span>
            )}
            What measures does EcoSolution take to ensure the environmental
            sustainability of its products?
          </h3>
          {activeItem === 4 && (
            <div className={css.text}>
              EcoSolution prioritizes environmental sustainability by employing
              eco-friendly materials in product manufacturing, minimizing carbon
              footprint in production processes, and ensuring energy-efficient
              designs. We are committed to responsible sourcing, recycling
              initiatives, and continuous improvement in green practices to
              mitigate environmental impact.
            </div>
          )}
        </li>
        <li className={css.item} onClick={() => toggleSection(5)}>
          <h3 className={css.subtitle}>
            {activeItem === 5 ? (
              <span>
                <Minus className={css.minus} />
              </span>
            ) : (
              <span>
                <Add className={css.add} />
              </span>
            )}
            How does EcoSolution engage with local communities and support a
            just transition to renewable energy?
          </h3>
          {activeItem === 5 && (
            <div className={css.text}>
              EcoSolution fosters community engagement by collaborating with
              local stakeholders, providing education on renewable energy
              benefits, and offering job opportunities. Our commitment to a just
              transition involves prioritizing social equity, supporting local
              economies, and ensuring that the shift to renewable energy is
              inclusive and beneficial for all.
            </div>
          )}
        </li>
      </ul>
      <div className={css.container}>
        <p className={css.bottom_text}>
          Didn&apos;t find the answer to your question?
        </p>
        <a href="#contacts" onClick={HandleBlur} className={css.button}>
          <p className={css.text_btn}>Contact Us</p>
          <div className={css.dott}>
            <ArrowDown size="10" color="#173D33" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Faq;
