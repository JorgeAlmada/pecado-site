import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function FooterComponent() {
  const footerElements = ["Bolsa de trabajo", "¿Quienes somos?", "Comentarios"];
  return (
    <footer className="w-100 bg-black pt-5 pb-5 mt-6 text-center">
      <div className="flex justify-center gap-2 h-12 mt-4">
        <Link href="https://www.facebook.com/elpecadocafe" target="_blank">
          <FaFacebook className="text-white text-lg w-8 h-8 transition-transform duration-300 hover:scale-125" />
        </Link>
        <Link href="https://www.instagram.com/elpecadocafe/" target="_blank">
          <FaInstagram className="text-white text-lg w-8 h-8 transition-transform duration-300 hover:scale-125" />
        </Link>
        <Link href="https://wa.me/c/5216688282808" target="_blank">
          <FaWhatsapp className="text-white text-lg w-8 h-8 transition-transform duration-300 hover:scale-125" />
        </Link>
      </div>
      <span className="text-xs text-white mt-2 opacity-80">© 2023 El Pecado</span>
    </footer>
  );
}

export default FooterComponent;
