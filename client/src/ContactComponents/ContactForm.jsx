import fb from "../assets/facebook.png";
import ins from "../assets/in.png";
import linked from "../assets/link.png";
import x from "../assets/x.png";
import { MdLocationPin } from "react-icons/md";

const ContactForm = () => {
  return (
    <>
      <section className="py-20 bg-background text-text">
        <div className="w-full h-96 justify-items-center px-5 md:px-20 py-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203.36227312313352!2d1.3225437277879812!3d35.360699535903805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1286d111111c116b%3A0xf1df6b8f8d49e490!2sHavana%20Food!5e0!3m2!1sen!2sdz!4v1785158768614!5m2!1sen!2sdz"
            className="w-full h-full rounded-xl justify-center shadow-xl"
            loading="lazy"
          ></iframe>
        </div>
        <div className="grid-cols-1 md:flex px-10 md:px-20">
          <div className="w-full md:w-4/12">
            <h3 className="text-xl font-bold pb-5">INFORMATIONS</h3>
            <div className="text-gray-600 justify-betwwen">
              <div className="flex gap-2 items-center py-1">
                <MdLocationPin />

                <h3>L'avenir, Tiaret,Algeria</h3>
              </div>
              <h3 className="py-1">
                <span className="font-semibold">Phone :</span> 0554554455
              </h3>
              <h3 className="py-1">
                <span className="font-semibold">Phone :</span> 0554554455
              </h3>
              <h3 className="py-1">
                <span className="font-semibold">Phone :</span> 0554554455
              </h3>
              <h3 className="py-1">
                <span className="font-semibold">E-mail:</span>{" "}
                support@Z-phone.com
              </h3>
            </div>
            <div>
              <h1 className="py-5 font-semibold">Follow Us On :</h1>
              <div>
                <div className="flex gap-4 pl-5">
                  <a
                    href="https://web.facebook.com/profile.php?id=61569670681718"
                    target="blank"
                  >
                    <img
                      src={fb}
                      className="drop-shadow-2xl "
                      alt="facebook logo"
                    />
                  </a>
                  <a href="https://www.instagram.com/z_phone14/" target="blank">
                    <img
                      src={ins}
                      className="drop-shadow-2xl"
                      alt="instgram logo"
                    />
                  </a>
                  <a href="">
                    <img
                      src={linked}
                      className="drop-shadow-2xl"
                      alt="linkedin logo"
                    />
                  </a>
                  <a href="">
                    <img src={x} className="drop-shadow-2xl" alt="x logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-8/12 pt-10">
            <h1 className="text-xl font-bold pb-5">CONTACT</h1>
            <div className="pb-5">
              <h3 className="pb-1">Your Name</h3>
              <input
                type="text"
                className="w-full border border-gray-300 py-1"
              />
            </div>
            <div className="pb-5">
              <h3 className="pb-1">E-mail</h3>
              <input
                type="text"
                className="w-full border border-gray-300 py-1"
              />
            </div>
            <div className="pb-5">
              <h3 className="pb-1">Subject</h3>
              <input
                type="text"
                className="w-full border border-gray-300 py-1"
              />
            </div>
            <div className="pb-5">
              <h3 className="pb-1">your message</h3>
              <textarea
                type="text"
                className="w-full border border-gray-300 py-1"
              />
            </div>
            <div className="w-fit float-end bg-primary px-3 py-2 text-white shadow-xl shadow-gray-200 hover:shadow-sm">
              Send
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
