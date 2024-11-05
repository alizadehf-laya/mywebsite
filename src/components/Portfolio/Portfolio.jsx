import styles from "./Portfolio.module.css"
import Slidbar from "../Header/Slidebar";
import CardPorto from "./CardPorto";
const Portfolio=()=>{
    return(
        <>
       <div className={styles.main}>
            <div className={styles.left}><Slidbar height={"100vh"}/></div>
            <div className={styles.right}>
                <div className="part1"><CardPorto/></div>
                <div className="part2"></div>
            </div>

        </div>
        </>
    )
}
export default Portfolio;