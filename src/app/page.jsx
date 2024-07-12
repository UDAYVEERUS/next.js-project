import Image from "next/image";

import Products from "@/components/Products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
// import Form from "@/components/Form";
import Testimonials from "@/components/Testimonials";
import TrendingSlider from "@/components/Testimonials";
export default function Home() {
  return (
   <div>
      <Header />
      <Products />
      <Gallery />
      {/* <Form/> */}
      <TrendingSlider />
      <Footer />
   </div>
  );
}
