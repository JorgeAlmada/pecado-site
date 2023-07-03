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
        <div className="md:w-1/2 w-full p-10 px-14 lg:px-20 text-justify">
          <h2 className="text-[18px] text-secondary font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomosComponent;
