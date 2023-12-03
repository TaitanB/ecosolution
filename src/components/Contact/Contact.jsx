import css from "./Contact.module.css";
import { Call, Sms, Map1, Instagram } from "iconsax-react";
import Form from "../Form/Form";
import HandleBlur from "../../utils/HandleBlur";

const Contact = () => {
  return (
    <div id="contacts" className={css.contact}>
      <h2 className={css.title}>Contact us</h2>
      <div className={css.content}>
        <address className={css.address}>
          <ul className={css.contact_list}>
            <li className={css.item}>
              <p className={css.subtitle}>Phone:</p>
              <ul>
                <li className={css.container} onClick={HandleBlur}>
                  <Call className={css.icon} />
                  <a
                    href="tel:+380981234567"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={css.link}
                  >
                    38 (098) 12 34 567
                  </a>
                </li>
                <li className={css.container} onClick={HandleBlur}>
                  <Call className={css.icon} />
                  <a
                    href="tel:+380931234567"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={css.link}
                  >
                    38 (093) 12 34 567
                  </a>
                </li>
              </ul>
            </li>
            <li className={css.item}>
              <p className={css.subtitle}>E-mail:</p>
              <div className={css.container} onClick={HandleBlur}>
                <Sms className={css.icon} />
                <a
                  href="mailto:office@ecosolution.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={css.link}
                >
                  office@ecosolution.com
                </a>
              </div>
            </li>
            <li className={css.item}>
              <p className={css.subtitle}>Address:</p>
              <div className={css.container} onClick={HandleBlur}>
                <Map1 className={css.icon} />
                <span className={css.link}>
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </span>
              </div>
            </li>
            <li className={css.item}>
              <p className={css.subtitle}>Social Networks:</p>
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
            </li>
          </ul>
        </address>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
