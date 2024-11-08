import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Test from "./Test";

const App = () => {
  return (
  <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>Services</section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <section>Porfolio1</section>
    <section>Porfolio2</section>
    <section>Porfolio3</section>
    <section id="Contact">Contact</section>

  </div>
  )
  
};

export default App;
