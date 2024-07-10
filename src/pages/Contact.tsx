/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rqle8vl",
        "template_52xpz4q",
        form.current,
        "IlIJiU2t6q0SL9-XF"
      )
      .then(
        (result) => {
          if (result) {
            toast.success("Email Send");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.reset();
  };
  return (
    <div id="contact" className="font mt-12 pb-4">
      <div>
        <h1 className="text-center font-bold text-4xl text-[#8cc090]">
          Contact Me
        </h1>
        <p className="text-center text-white lg:text-2xl my-3">
          Let's Get This Conversation Started. Tell Me A Bit About Yourself, And
          I Will Get In Touch As Soon As I Can.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-11/12 mx-auto mt-8">
        <div>
          <div className="flex items-center lg:items-center space-x-3 mb-3">
            <i className="fa-solid fa-location-dot text-3xl text-[#8cc090]"></i>
            <h2 className="text-white">
              <span className="font-bold text-xl">Address :</span>{" "}
              Jhenaidah,khulna,Bangladesh
            </h2>
          </div>
          <div className="flex items-center space-x-3 my-3">
            <i className="fa-solid fa-phone text-3xl text-[#8cc090]"></i>
            <h2 className="text-white">
              <span className="font-bold text-xl">Phone Number :</span>{" "}
              +8801977-328607
            </h2>
          </div>
          <div className="flex items-center space-x-3 my-3">
            <i className="fa-solid fa-envelope text-3xl text-[#8cc090]"></i>
            <h2 className="text-white">
              <span className="font-bold text-xl">Email :</span>{" "}
              parvezz13913@gmail.com
            </h2>
          </div>
          <div className="justify-items-center space-x-8 mt-2">
            <a
              target="_blank"
              href="https://www.facebook.com/parvez.rahman.13913"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-2xl border p-2 rounded-full text-[#8cc090] border-[#8cc090] hover:bg-[#8cc090] hover:text-white"
                icon={faFacebook}
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/parvez13913/"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-2xl border rounded-full p-2 text-[#8cc090] border-[#8cc090] hover:bg-[#8cc090] hover:text-white"
                icon={faInstagram}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/parvez13913/"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-2xl border rounded-full p-2 text-[#8cc090] border-[#8cc090] hover:bg-[#8cc090] hover:text-white"
                icon={faLinkedinIn}
              />
            </a>
            <a
              target="_blank"
              href="https://github.com/parvez13913"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-2xl border rounded-full p-2 text-[#8cc090] border-[#8cc090] hover:bg-[#8cc090] hover:text-white"
                icon={faGithub}
              />
            </a>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <form
            className="flex flex-col space-y-6 border-none"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="px-6 py-4 border-none bg-[#19273e] text-[#8b98af]"
              type="text"
              name="user_name"
              placeholder="Your Name *"
            />
            <input
              className="px-6 py-4 border-none bg-[#19273e] text-[#8b98af]"
              type="email"
              name="user_email"
              placeholder="Your Email *"
            />
            <textarea
              className="px-6 py-4 border-none bg-[#19273e] text-[#8b98af]"
              placeholder="Your Message *"
              name="message"
            />
            <input
              className="uppercase p-3 font-normal text-white btn-wide mt-6 border hover:rounded-full transform duration-1000"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
