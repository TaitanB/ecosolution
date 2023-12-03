import { useState } from "react";
import css from "./Faq.module.css";
import { Minus, Add, ArrowDown } from "iconsax-react";

const Faq = () => {
  const [activeItem, setActiveItem] = useState(1);

  const toggleSection = (sectionIndex) => {
    setActiveItem(activeItem === sectionIndex ? null : sectionIndex);
  };

  return (
    <div className={css.faq}>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo deleniti laborum dolorum voluptates earum cum labore
              maxime repellat dolores, accusantium obcaecati, possimus nobis
              exercitationem fugit veniam quos. Iste, pariatur est! Dicta
              itaque, repudiandae voluptates reprehenderit sed consectetur
              assumenda quisquam possimus aspernatur ipsam. Inventore impedit
              facilis at similique nisi magnam. Cupiditate!
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum earum molestiae commodi officiis error, sunt deserunt
              voluptas provident enim repellendus voluptates deleniti eveniet
              hic. Eaque praesentium veniam quibusdam a, voluptatibus corrupti
              quos quasi repudiandae ex veritatis aperiam alias impedit,
              doloribus quo mollitia? Laboriosam beatae et architecto quaerat
              animi molestias ea.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              unde quae, dolore dolor voluptatum qui eveniet. Dicta maiores,
              debitis non, delectus, voluptatum dolores accusamus magnam quasi
              iste numquam molestiae blanditiis deleniti? Veniam tempora optio
              accusamus possimus? Quaerat nemo culpa ratione maiores id
              accusamus praesentium, aliquid provident eveniet modi repudiandae
              eum?
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              dolores distinctio assumenda odio totam culpa velit molestias,
              quibusdam enim ut illum! Libero adipisci asperiores debitis
              repellendus tenetur voluptatem laudantium, quaerat facilis
              laboriosam quis. Veniam distinctio nobis suscipit esse, accusamus
              eos officia eveniet tempore quos voluptates aut quam animi qui
              laudantium.
            </div>
          )}
        </li>
      </ul>
      <div className={css.container}>
        <p className={css.bottom_text}>
          Didn&apos;t find the answer to your question?{" "}
        </p>
        <a href="#contacts" type="button" className={css.button}>
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
