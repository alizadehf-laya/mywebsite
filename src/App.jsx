import Hedear from "./components/Header/Hedear"
import styles from "./components/Header/Hedear.module.css"
import Slidbar from "./components/Header/Slidebar";
import About from "./components/About/About";

import { BrowserRouter as Router } from 'react-router-dom';
function App() {


  return (
    <>
 <Router>
<div className="App">
<Hedear />
<About/>
</div>
</Router>
  
    </>
  )
}

export default App
