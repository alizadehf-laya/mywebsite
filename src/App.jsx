import Hedear from "./components/Header/Hedear"
import styles from "./components/Header/Hedear.module.css"
import Slidbar from "./components/Header/Slidebar";
import About from "./components/About/About";

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
function App() {


  return (
    <>
 <Router>
  <Routes>
   
      
    <Route path="/" element={<Hedear/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>



</Router>
  
    </>
  )
}

export default App
