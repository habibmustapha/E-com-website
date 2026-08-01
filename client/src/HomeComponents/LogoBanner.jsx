import apple from "../assets/apple.png";
import samsung from "../assets/sam.png";
import oppo from "../assets/oppo.png";
import anker from "../assets/ank.png";
import xiaomi from "../assets/xia.png";
import hwa from "../assets/hwa.png";
import jbl from "../assets/jbl.png";
import honor from "../assets/honor.png";

const LogoBanner = () => {
  const logos = [apple, samsung, oppo, anker, xiaomi, hwa, jbl, honor];

  const duplicatedLogos = [...logos, ...logos];
  return (
    <>
      <section className="bg-white overflow-hidden ">
        <div className="flex w-max track">
          {duplicatedLogos.map((logo, index) => (
            <img
              src={logo}
              key={index}
              className="h-32 w-auto px-10 shrink-0"
              alt=""
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default LogoBanner;
