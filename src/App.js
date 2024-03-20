import Header from "./Componenets/Header/Header";
import Footer from "./Componenets/Footer/Footer";
import Section1 from "./Componenets/Section1/Section1";
import Secondsec from "./Componenets/Secondsec/Secondsec";
import Sectionthree from "./Componenets/sectionthree/Sectionthree";
import Fourthsec from "./Componenets/Fourthsec/Fourthsec";
import Fifthsec from "./Componenets/Fifthsec/Fifthsec";
import Sixthsec from "./Componenets/Sixthsec/Sixthsec";
// import Youtubejan from "./Componenets/Youtube/Youtubejan";
function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Secondsec/>
       <Sectionthree/>
       <Fourthsec/>
       <Fifthsec/>
       <Sixthsec/>
       {/* <Youtubejan/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
