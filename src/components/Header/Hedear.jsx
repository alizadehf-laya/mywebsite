import styles from "./Hedear.module.css";
import React from 'react';
import Slidbar from "./Slidebar";



const Hedear=()=>{

    return(
        <container className={styles.container}>
        
            <Slidbar/>
        
            <img className={styles.right} src="images/me.jpg"/>
        </container>

    )
}
export default Hedear
