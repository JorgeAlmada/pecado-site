import React from "react";
import botellas from "../public/images/botellas.jpg";

function UneteAlEquipoComponent() {
  const bgStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  return (
    <section>
      <div className="flex flex-wrap">
        <div className="sm:w-1/2 w-full p-4">
          <div
            style={{ backgroundImage: "url(" + botellas.src + ")", ...bgStyle }}
          ></div>
        </div>
        <div className="sm:w-1/2 w-full flex flex-col gap-0 text-center p-4">
          <div className="flex flex-col my-auto bg-black rounded-xl p-6">
            <h1 className="text-white font-bold text-[34px] mt-auto mb-2">
              Únete al equipo
            </h1>
            <h2 className="text-[#F3EFE0] text-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </h2>
            <a
              className="inline-flex mx-auto mt-4 mb-auto"
              href="https://wa.me/526688282808"
              target="_blank"
            >
              <span className="h-12 text-white flex items-center justify-center uppercase font-semibold px-8 border border-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
                unete
              </span>
              <span className="h-12 w-12 text-white flex-shrink-0 flex items-center justify-center border border-l-0 border-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
                <svg
                  className="h-3 w-3 svg-inline--fa fa-chevron-right fa-w-8 fa-9x"
                  aria-hidden="true"
                  focusable="false"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UneteAlEquipoComponent;
