import copyrightSign from "../assets/icons/copyright-sign.svg";
import headerLogo from "../assets/icons/headerLogo.svg";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container py-8 lg:py-12">
      <div className="flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={headerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
        </div>

        <div className="flex flex-col mt-8 lg:flex-row lg:gap-10 lg:mt-0">
          <div className="w-full lg:w-auto">
            <p className="text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Your input helps reach our project to new heights. We are thankful
              for your contributions, time, and efforts.
            </p>
            <div className="flex justify-center gap-3 mt-5">
              {socialMedia.map((icon) => (
                <div
                  className="flex justify-center items-center w-10 h-10 bg-sky-200 rounded-full cursor-pointer"
                  key={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mt-8 lg:mt-0 lg:w-1/3">
            <div className="font-palanquin capitalize text-2xl font-semibold mb-3">
              Address
            </div>
            <div>
              Indian Institute of Information Technology Allahabad Devghat,{" "}
              <br />
              Jhalwa, Prayagraj-211015, U. P. INDIA
            </div>
          </div>
          <div className="w-full mt-8 lg:mt-0 lg:w-1/3">
            <div className="font-palanquin capitalize text-2xl font-semibold mb-3">
              Get in Touch
            </div>
            <div>Phone: 91-532-2922000</div>
            <div>Fax: 91-532-2922125</div>
            <div>Email: contact@iiita.ac.in</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-8 max-sm:flex-col max-sm:items-center">
        <div className="flex items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
