import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.components";
import Planos from "./components/plans/plans.components";
import Coverage from "./components/coverage/coverage.components";
import Testimonials from "./components/testimonials/testimonials.components";
import Footer from "./components/footer/footer.components";
import About from "./components/about/about.componets";
import FQA from "./components/fqa/fqa.components";
import Contact from "./components/contact/contact.components";
import Whats from "./components/whats/whats.components";
import Advantages from "./components/advantages/advantages.component";
import BoletoSeparador from "./components/boleto/boleto.component";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed WhatsApp Button */}
      <Whats />

      {/* Navigation */}
      <Header />

      {/* Hero Section */}

      <Hero />
      {/* Plans Section */}
      <Planos />
      <BoletoSeparador />

      <Advantages />
      {/* area de cobertura
      <Coverage />
      
    
      <About />
  
      <Testimonials />

     
      <FQA />

      
      <Contact />
       */}

      <Footer />
    </div>
  );
}

export default App;
