import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import OurClients from "@/components/OurClients";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import ContactFixed from "@/components/ContactFixed";

export default function Home() {
  return (
    <div className="container-bg bg-black text-white min-h-screen">
      <Header />
      <AboutUs />
      <Services />
      <OurClients />
      <Feedback />
      <Contact />
      <ContactFixed />
    </div>
  );
}
