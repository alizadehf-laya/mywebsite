import Hedear from "./components/Header/Hedear"
import styles from "./components/Header/Hedear.module.css"
import Slidbar from "./components/Header/Slidebar";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Portfolio from "./components/Portfolio/Portfolio";
function App() {


  return (
    <>
 <Router>
  <Routes> 
      
    <Route path="/" element={<Hedear/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/contact" element={<Contact/>}/>
    
  </Routes>



</Router>
  
    </>
  )
}

export default App
