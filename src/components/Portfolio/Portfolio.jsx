import styles from "./Portfolio.module.css"
import Slidbar from "../Header/Slidebar";
const Portfolio=()=>{
    return(
        <>
       <div className={styles.main}>
            <div className={styles.left}><Slidbar height={"100vh"}/></div>
            <div className={styles.right}></div>

        </div>
        </>
    )
}
export default Portfolio;