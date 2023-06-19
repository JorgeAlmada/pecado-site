import Head from "next/head";
import Navbar from "../components/navbar.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <video autoPlay muted loop style={{position: "fixed", right: 0, bottom: 0, minWidth: "100%", minHeight: "100%"}}>
        <source src="/videos/jcolevid.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
