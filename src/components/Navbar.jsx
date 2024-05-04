import  hamburger  from '../assets/icons/hamburger.svg';
import headerLogo from "../assets/images/headerLogo.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <a href="/" className="flex items-center">
          <img
            src={headerLogo}
            alt="Logo"
            width={149}
            height={79}
            className="m-0 w-[149px] h-[79px]"
          />
          <span className="text-lg font-semibold">Medical Expert System for Disease Prediction</span>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden mr-24">
          <a href="/">Sign in</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar