import styles from "./Portfolio.module.css"
import Slidbar from "../Header/Slidebar";
import CardPorto from "./CardPorto";
import CardB from "./CardB";


const Portfolio=()=>{
    const createCard =(CardB)=>{
        return(
            <CardPorto
            key={CardB.key}
            Title={CardB.Title}
            subtitle={CardB.subtitle}
            Text={CardB.Text}
            />
        )
    }
    return(
        <>
       <div className={styles.main}>
            <div className={styles.left}><Slidbar height={"100vh"}/></div>
            <div className={styles.right}>
                <div className="part1">
                {CardB.map(createCard)}
                </div>
                <div className="part2"></div>
            </div>

        </div>
        </>
    )
}
export default Portfolio;