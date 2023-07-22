import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useDispatch, useSelector } from "react-redux";
import {
  sendInternalErrorNotif,
  sendInternalPendingNotif,
  sendInternalSuccessNotif,
} from "../redux/reducers/notificationSlice";
import Notifications from "./notification/Notifications";

const Contact = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification.notification);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.length && form.email.length && form.message.length) {
      const pendingFormNotif = {
        id: "contactme",
        label: "submit email",
        title: "Pending...",
        message: "Please be patient!",
        isPending: true,
        isSuccess: false,
        isError: false,
      };
      setLoading(true);
      dispatch(sendInternalPendingNotif(pendingFormNotif));

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Hosein Moradi",
            from_email: form.email,
            to_email: "moradih7379@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            const successFormNotif = {
              id: "contactme",
              label: "submit email",
              title: "Successfully!",
              message: "Thank you. I will get back to you as soon as possible.",
              isPending: false,
              isSuccess: true,
              isError: false,
            };
            setLoading(false);
            dispatch(sendInternalSuccessNotif(successFormNotif));

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            const errorFormNotif = {
              id: "contactme",
              label: "submit email",
              title: "Failure!",
              message: "Ahh, something went wrong. Please try again.",
              isPending: false,
              isSuccess: false,
              isError: true,
            };
            setLoading(false);
            dispatch(sendInternalErrorNotif(errorFormNotif));
          }
        );
    }
  };

  /* handle notifications  */
  useEffect(() => {
    const funcName = "contactme";
    Notifications({ funcName, notification });
  }, [notification]);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
