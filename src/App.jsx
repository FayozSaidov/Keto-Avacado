import "./App.css";
import FirstSlide from "./components/firstSlide";
import Header from "./components/header";
import InfoSlide from "./components/infoSlide";
import Course from "./components/aboutCourse";
import WorkingFor from "./components/aboutMe";
import Consist from "./components/consist";
import Problems from "./components/problems";
import Swiper from "./components/Swiper";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="w-full h-auto">
        <Header />
        <FirstSlide />
        <InfoSlide />
        <Course />
        <WorkingFor />
        <Consist />
        <Problems />
        <Swiper />
        <Footer/>
    </div>
  );
}

export default App;
