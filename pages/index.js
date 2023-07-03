import Head from "next/head";
import Navbar from "../components/navbar.js";
import MenuComponent from "../components/menu.js";
import QuienesSomosComponent from "../components/quienessomos.js";
import PideEnLineaComponent from "../components/pideenlinea.js";
import FooterComponent from "../components/footer.js";
import ImageSlider from "../components/imageslider.js";

export default function Home() {
  return (
    <div className="bg-primary">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ImageSlider/>
      <MenuComponent/>
      <QuienesSomosComponent/>
      {/* <PideEnLineaComponent/> */}
      <FooterComponent/>
    </div>
  );
}
