import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Products from "@/components/Products";
import OurClients from "@/components/OurClients";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
// import ContactFixed from "@/components/ContactFixed";

export default function Home() {
  return (
    <div className="container-bg pt-10">
      <Header />
      <AboutUs />
      <Services />
      <Products />
      <OurClients />
      <Feedback />
      <Contact />
      {/* <ContactFixed /> */}
    </div>
  );
}
