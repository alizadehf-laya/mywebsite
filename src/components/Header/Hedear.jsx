import styles from "./Hedear.module.css";
import React from 'react';
import Slidbar from "./Slidebar";




const Hedear=()=>{

    return(
        <container className={styles.container}>
        
            <Slidbar/>
             <div className="imadetext">
             <img className={styles.right} src="images/me.jpg"/>
             <h3 className={styles.text1}> laya Alizadeh,<br/> im freelancer</h3>
                </div>       
           
        </container>

    )
}
export default Hedear
