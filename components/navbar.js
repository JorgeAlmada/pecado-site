import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import logo from "../public/images/pecadologo.png";
import menu from "../public/images/menu.svg";
import close from "../public/images/close.svg";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "https://wa.me/c/5216688282808",
      title: "Pide en Línea",
    },
    {
      id: "/files/menu.pdf",
      title: "Menú",
    },
    {
      id: "https://goo.gl/maps/3gkZ541BQejZ5xqV8",
      title: "Sucursal",
    },
    {
      id: "https://wa.me/526688282808",
      title: "Únete al equipo",
    }
  
  ]

  return (
    <nav
      className={`md:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-16 h-16 object-contain" />
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-tertiary" : "text-tertiary"
              } hover:bg-secondary text-[18px] font-bold cursor-pointer bg-darkPrimary rounded-xl px-2 py-0.5`}
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.id}`} target={link.id === "#menu" ? "_self" : "_blank"}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer z-40"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "flex translate-x-[50vw] " : "flex"
            } transform p-6 black-gradient absolute right-0 top-0 min-w[140px] z-10 bg-primary h-screen w-[50vw] transition-transform duration-500`}
          >
            <ul className="list-none flex items-start flex-col gap-4 mt-12">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-tertiary" : "text-tertiary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`${link.id}`} target="_blank">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
