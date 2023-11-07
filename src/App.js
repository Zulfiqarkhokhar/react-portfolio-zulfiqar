import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Project from "./components/Projects";
import {BuyerReview, SellerReview} from "./components/Reviews";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Header/>
      <HeroSection/>
        <Project/>
        <BuyerReview/>
        <SellerReview/>
      <Footer/>
    </div>
  );
}

export default App;
