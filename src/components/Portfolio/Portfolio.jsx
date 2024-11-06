import styles from "./Portfolio.module.css"
import Slidbar from "../Header/Slidebar";
import CardPorto from "./CardPorto";
import CardB from "./CardB";
import Cardleft from "./Cardleft";


const Portfolio=()=>{
    const createCard =(CardB)=>{
        return(
            <CardPorto
            key={CardB.key}
            Title={CardB.Title}
            subtitle={CardB.subtitle}
            Text={CardB.Text}git
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
                <div className="part2"><Cardleft/></div>
            </div>

        </div>
        </>
    )
}
export default Portfolio;