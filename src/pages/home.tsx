import Advantages from "../components/advantages/advantages.component";
import BoletoSeparador from "../components/boleto/boleto.component";
import Footer from "../components/footer/footer.components";
import Header from "../components/header/header.component";
import Hero from "../components/hero/hero.components";
import Planos from "../components/plans/plans.components";
import Whats from "../components/whats/whats.components";

const HomePage = () => {
  return (
    <>
      <Whats />
      <Header />
      <Hero />
      <Planos />
      <BoletoSeparador />
      <Advantages />
      <Footer />
    </>
  );
};

export default HomePage;
