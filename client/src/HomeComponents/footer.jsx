import fb from "../assets/facebook.png";
import ins from "../assets/in.png";
import linked from "../assets/link.png";
import x from "../assets/x.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="bg-white pb-2">
        <div className="w-full h-64 justify-items-center px-5 py-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203.36227312313352!2d1.3225437277879812!3d35.360699535903805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1286d111111c116b%3A0xf1df6b8f8d49e490!2sHavana%20Food!5e0!3m2!1sen!2sdz!4v1785158768614!5m2!1sen!2sdz"
            className="w-full h-full rounded-xl justify-center shadow-xl"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full justify-between grid grid-cols-1 xl:flex px-10 xl:px-20 gap-10 xl:pt-10">
          <div className="text-2xl xl:px-20">
            <a href="/shop">
              <h3 className="py-2">Shop</h3>
            </a>
            <a href="/About">
              <h3 className="py-2">About US</h3>
            </a>
            <a href="/hiring">
              <h3 className="py-2">Hiring</h3>
            </a>
            <a href="/contact">
              <h3 className="py-2">Contact Us</h3>
            </a>
            <a href="/write">
              <h3 className="py-2">Write to us</h3>
            </a>
          </div>

          <div className="text-2xl gap-20">
            <div className="flex py-2 items-center gap-5">
              <FaPhoneAlt />
              <a href="/shop">
                <h3>land line</h3>
                <h3>046 05 53 53</h3>
              </a>
            </div>
            <div className="flex py-2 items-center gap-5">
              <FaPhoneAlt />
              <a href="/About">
                <h3>place Order</h3>
                <h3>+213 550 555 777</h3>
              </a>
            </div>
            <div className="flex py-2 items-center gap-5">
              <FaPhoneAlt />

              <a href="/hiring">
                <h3>Support</h3>
                <h3>+213 550 555 666</h3>
              </a>
            </div>
            <div className="flex py-2 items-center gap-5">
              <FaPhoneAlt />

              <a href="/contact">
                <h3>maintenance</h3>
                <h3>+213 550 555 555</h3>
              </a>
            </div>
          </div>

          <div className="px-5 w-full xl:w-1/3">
            <div className="flex flex-start gap-3 bg-yellow-500/30 w-full p-3 shadow-lg mb-5 rounded-2xl">
              <FaShieldAlt className="w-28 h-6 md:w-8 md:h-8" />

              <div>
                <h3 className="font-semibold text-text">
                  Your satisfaction is our priority.
                </h3>
                <p>
                  We are committed to providing quality products, secure
                  shopping, and exceptional customer support every step of the
                  way.
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold pb-2">
              Follow us on Social media{" "}
            </h3>
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

        <div className="px-20 py-20">
          <h3 className="text-2xl">About US</h3>
          <h3>
            Welcome to Z-PHONE, your trusted destination for the latest
            smartphones, laptops, tablets, smartwatches, mobile accessories, and
            consumer electronics. We are dedicated to bringing you high-quality
            products from the world's leading technology brands at competitive
            prices. Whether you're searching for the newest iPhone, Samsung
            Galaxy, Xiaomi, Google Pixel, gaming accessories, wireless earbuds,
            chargers, phone cases, or other essential tech products, Z-PHONE
            offers a carefully selected collection to meet your needs. Our
            mission is to make technology accessible through secure online
            shopping, reliable customer service, and a seamless shopping
            experience from browsing to delivery. Every product is chosen with
            quality, performance, and value in mind, ensuring that our customers
            receive authentic devices and accessories they can trust. With fast
            shipping, secure payment options, and dedicated after-sales support,
            we strive to build lasting relationships with every customer. At
            Z-PHONE, we believe technology should improve everyday life. That's
            why we continuously update our catalogue with the latest
            smartphones, innovative gadgets, computer accessories, and mobile
            solutions to keep you connected, productive, and entertained.
            Whether you're upgrading your device, shopping for the perfect gift,
            or looking for reliable accessories, Z-PHONE is committed to
            delivering quality products, excellent service, and complete
            customer satisfaction.
          </h3>
        </div>

        <div className="w-full items-center">
          <p className="justify-self-center ">
            © 2026 Z-PHONE. All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
