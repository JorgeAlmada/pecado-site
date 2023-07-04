import React from "react";
import Image from "next/image";
import quienessomos from "../public/images/quienessomos.png";

function QuienesSomosComponent() {
  return (
    <section>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full p-10">
          <Image
            src={quienessomos}
            alt="logo"
            className="object-contain w-2/3 mx-auto"
          />
        </div>
        <div className="md:w-1/2 w-full p-10 px-[10%] lg:px-20 text-justify">
          <h2 className="text-[18px] text-secondary font-bold">
            El construir experiencias y coincidir con ustedes, nos mueve todos
            los días y nos hace querer mejorar siempre, enfocarnos siempre en la
            buena calidad de ingredientes, momentos y experiencias chilas.<br/> Se
            siente muy bien que seas parte de este lugar.<br/> Nosotros nos
            encargamos de que pases un momento agradable y relajado. ✌🏼<br/>
            Relájate, la vida se comparte. ✨
          </h2>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomosComponent;
