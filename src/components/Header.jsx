import { useEffect } from "react";
import logoImg from "../assets/MX.png";

const Header = () => {
  const logo = "";

  const navLinks = [
    {
      display: "Lugares de interés",
    },
    {
      display: "Nosotros",
    },
    {
      display: "Iniciar Sesión",
    },
  ];

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 w-[100%] h-[80px] py-0 px-[100px] box-border flex justify-between items-center transition-all ease-in duration-150 delay-75 z-10 bg-[#ededed50]"
        id="navbar"
      >
        <a href="/">
          <img src={logoImg} alt="Logo" className="w-[120px] h-[120px]" />
        </a>
        <ul className="m-0 p-0 flex">
          {navLinks.map((link) => (
            <li key={link.display} className="cursor-pointer font-medium px-4">
              {link.display}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
