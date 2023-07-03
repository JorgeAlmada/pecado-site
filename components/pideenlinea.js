import React from "react";
import botellas from "../public/images/botellas.jpg";
import { FaWhatsapp } from "react-icons/fa";

function PideEnLineaComponent() {
  return (
    <section>
      <div className="flex flex-wrap p-4">
        <a href="https://wa.me/c/5216688282808" className="relative inline-block text-lg group mx-auto">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#25D366] transition-colors duration-300 ease-out border-2 border-[#25D366] rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#25D366] group-hover:-rotate-180 ease"></span>
            <span className="flex gap-4">
              <span className="relative">Pide en Línea</span>
              <FaWhatsapp className="relative w-5 h-5 mt-[2px] text-lg group-hover:scale-125" />
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#25D366] rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </section>
  );
}

export default PideEnLineaComponent;
