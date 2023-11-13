import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import AllProject from "./components/AllProjects";

function App() {
  return (
    <>
      <Header/>
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/allprojects" element={<AllProject/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
