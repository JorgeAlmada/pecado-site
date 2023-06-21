import Head from "next/head";
import Navbar from "../components/navbar.js";
import MenuComponent from "../components/menu.js";
import UneteAlEquipoComponent from "../components/unetealequipo.js";
import PideEnLineaComponent from "../components/pideenlinea.js";
import FooterComponent from "../components/footer.js";

export default function Home() {
  return (
    <div className="mt-[68px] bg-[#2C3333]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative items-center w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden">
        <video autoPlay muted loop style={{position:"absolute" ,top: "50%", left: "50%", transform:"translate(-50%, -50%)", minWidth: "100%"}}>
          <source src="/videos/pecadovid.mp4" type="video/mp4" />
        </video>
      </div>
      <MenuComponent/>
      <UneteAlEquipoComponent/>
      <PideEnLineaComponent/>
      <FooterComponent/>
    </div>
  );
}
