import Hedear from "./components/Header/Hedear"
import styles from "./components/Header/Hedear.module.css"


import { BrowserRouter as Router } from 'react-router-dom';
function App() {


  return (
    <>
 <Router>
<div className="App">
<Hedear />
</div>
</Router>
  
    </>
  )
}

export default App
