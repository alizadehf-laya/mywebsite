import Hedear from "./components/Header/Hedear"
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";

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
    <Route path="/profile" element={<Profile/>}/>
    
  </Routes>



</Router>
  
    </>
  )
}

export default App
