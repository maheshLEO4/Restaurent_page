import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reservation />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}