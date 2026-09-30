import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Service";
import Membership from "./components/Membership";
import WhyUs4 from "./components/WhyUs4";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-black">
        <Hero />
        <About />
        <Services />
        <Membership />
        <WhyUs4 />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;