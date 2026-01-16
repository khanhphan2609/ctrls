
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Portfolio from "@/components/Portfolio";
import OurClients from "@/components/OurClients";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="container-bg pt-10 overflow-x-hidden w-full max-w-full relative px-0 sm:px-2">
      <AboutUs />
      <Services />
      <Products />
      <Portfolio />
      <OurClients />
      <Feedback />
      <Contact />
    </div>
  );
}
