// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import About from "./components/About"


function App() {
  return (
<div className="App">
      <Navbar />
      <div className="container-fluid p-0">
        <About />
        <hr className="m-0"/>
        <Portfolio />
        <hr className="m-0" />
        <Contact />
        <hr className="m-0" />
        {/* <Challenges /> */}
        <hr className="m-0"/>

      </div>
    </div>
  );
}

export default App;
