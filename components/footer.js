import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import footerarrow from "../public/images/footerarrow.png";
import logo from "../public/images/pecadologo.png";

function FooterComponent() {
  return (
    <footer className="w-100 bg-primary mt-24 pt-12">
      <div className="flex flex-wrap">
        <div className="hidden md:block md:w-1/2">
          <Image src={footerarrow} alt="arrow" className="w-96" />
        </div>
        <div className="w-full md:w-1/2 flex md:pr-24">
          <div className="flex mx-auto md:mx-0 md:my-auto md:ml-auto py-12">
            <Link
              href="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Image src={logo} alt="logo" className="w-12 h-12" />
            </Link>
            <div className="w-0.5 mx-4 h-100 bg-tertiary"></div>
            <Link
              href="https://www.facebook.com/elpecadocafe"
              target="_blank"
              className="my-auto mx-0.5"
            >
              <FaFacebook className="text-secondary text-lg w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </Link>
            <Link
              href="https://www.instagram.com/elpecadocafe/"
              target="_blank"
              className="my-auto mx-0.5"
            >
              <FaInstagram className="text-secondary text-lg w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
