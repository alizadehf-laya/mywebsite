import styles from "./Portfolio.module.css"
import Slidbar from "../Header/Slidebar";
import CardPorto from "./CardPorto";
import CardB from "./CardB";
import Cardleft from "./Cardleft";
import Text1 from "./Text"

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
            <div className={styles.rightMain}>
            <Text1/>
            <div className={styles.right}>
                <div className={styles.part1}>
                {CardB.map(createCard)}
                </div>
                <div className={styles.part2}><Cardleft/></div>
            </div>
            </div>


        </div>
        </>
    )
}
export default Portfolio;