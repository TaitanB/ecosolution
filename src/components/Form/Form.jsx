import { useFormik } from "formik";
import css from "./Form.module.css";
import Arrow from "../Arrow/Arrow";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      msg: "",
    },

    validate: (values) => {
      const errors = {};

      if (!/^[a-zA-Z\s]+$/.test(values.name.trim())) {
        errors.name = "Wrong Fullname";
      }

      if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(values.email.trim())) {
        errors.email = "Wrong Email";
      }

      if (!/^\d{12}$/.test(values.phone.replace(/\s/g, ""))) {
        errors.phone = "Wrong Phone";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log("Message sent:", values);
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <div className={css.item}>
        <label className={css.label} htmlFor="name">
          * Full name:
        </label>
        <input
          className={css.input}
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="John Rosie"
        />
        {formik.touched.name && formik.errors.name ? (
          <p className={css.error}>{formik.errors.name}</p>
        ) : (
          <p className={css.after}></p>
        )}
      </div>

      <div className={css.item}>
        <label className={css.label} htmlFor="email">
          * E-mail:
        </label>
        <input
          className={css.input}
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="johnrosie@gmail.com"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className={css.error}>{formik.errors.email}</p>
        ) : (
          <p className={css.after}></p>
        )}
      </div>

      <div className={css.item}>
        <label className={css.label} htmlFor="phone">
          * Phone:
        </label>
        <input
          className={css.input}
          type="phone"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="380961234567"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <p className={css.error}>{formik.errors.phone}</p>
        ) : (
          <p className={css.after}></p>
        )}
      </div>

      <div className={css.item}>
        <label className={css.label} htmlFor="msg">
          Message:
        </label>
        <textarea
          className={css.textarea}
          type="text"
          id="msg"
          name="msg"
          value={formik.values.msg}
          onChange={formik.handleChange}
          placeholder="Your message"
        />
        <p className={css.after}></p>
      </div>

      <button className={css.button} type="submit">
        <p className={css.text_btn}>Send</p>
        <Arrow />
      </button>
    </form>
  );
};

export default Form;
