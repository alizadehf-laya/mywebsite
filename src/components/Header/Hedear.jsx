import styles from "./Hedear.module.css";
import React from 'react';
import Slidbar from "./Slidebar";
import { ReactTyped } from "react-typed";




const Hedear=()=>{

    return(
        <container className={styles.container}>
        
            <Slidbar height={"100vh"}/>
             <div className="imadetext">
             <img className={styles.right} src="images/me.jpg"/>
             <h4 className={styles.text1}>
        Hi I'm Laya{" "}<br/>
        <ReactTyped strings={["Welcome To My React App"]} typeSpeed={100} loop />
      </h4>
            </div>       
           
        </container>

    )
}
export default Hedear
