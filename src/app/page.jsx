import Image from "next/image";

import Products from "@/components/Products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
// import Slider from "@/components/Slider";
import Popupmodal from "@/components/Popup-modal";
import Cards from "@/components/Cards";

export default function Home() {
  return (
   <div>
      <Header />
      <Products />
      <Gallery />
      <Cards />
      {/* <Form/> */}
      {/* <Slider/> */}
      <Popupmodal />
      <Footer />
   </div>
  );
}
