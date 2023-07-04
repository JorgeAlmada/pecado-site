import React from "react";
import Image from "next/image";
import img1 from "../public/images/pideenlinea.png";
import img2 from "../public/images/conocenuestromenu.png";
import worm from "../public/images/pinkworm.png";
import Link from "next/link";

function MenuComponent() {
  return (
    <section>
      <div className="flex flex-wrap overflow-hidden">
        <div className="md:w-1/2 w-full p-10">
          <Link href="https://wa.me/c/5216688282808" target="_blank">
            <Image
              src={img1}
              alt="logo"
              className="object-contain w-2/3 mx-auto"
            />
          </Link>
        </div>
        <div className="md:w-1/2 w-full p-10 relative">
          <Link href="/files/menu.pdf" target="_blank">
            <Image
              src={img2}
              alt="logo"
              className="object-contain w-2/3 mx-auto"
            />
          </Link>
          <Image src={worm} alt="first-worm" className="absolute bottom-10 -right-5 w-[30%] z-20" />
        </div>
      </div>
    </section>
  );
}

export default MenuComponent;
