import React from "react";
import img1 from "../public/images/leftphoto.jpg";
import img2 from "../public/images/rightphoto.jpg";

function MenuComponent() {
  const bgStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "200px",
  };
  return (
    <section>
      <div className="flex mb-[30px] flex-wrap">
        <div className="w-full sm:w-1/3 p-4">
          <div
            style={{ backgroundImage: "url(" + img1.src + ")", ...bgStyle }}
          ></div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center">
          <div className="flex my-auto bg-black px-[4px] rounded-sm">
          <a
            href="#"
            className="mt-auto mb-auto text-2xl font-bold text-white transform-none hover:transform translate-x-2 -translate-y-2 shadow-2xl transition-all"
          >
            Conoce nuestro menú
          </a>
          </div>
        </div>
        <div className="w-full sm:w-1/3 p-4">
          <div
            style={{ backgroundImage: "url(" + img2.src + ")", ...bgStyle }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default MenuComponent;
