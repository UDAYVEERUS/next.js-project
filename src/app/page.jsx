import Image from "next/image";

import Products from "@/components/Products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
   <div>
      <Header />
      <Products />
      <Gallery />
      {/* <Form/> */}
      <Footer />
   </div>
  );
}
