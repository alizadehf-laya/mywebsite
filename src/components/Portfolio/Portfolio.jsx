import styles from "./Portfolio.module.css"
import Slidbar from "../Header/Slidebar";
import CardPorto from "./CardPorto";
import CardB from "./CardB";
import Cardleft from "./Cardleft";
import Text1 from "./Text"
import WithLabelExample from "../Portfolio/Progressbar";

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
            {/* about add child of class rightMain */}
         <div className={styles.portoFooter}>
            <h2>Skills</h2>
        <hr style={{width:"100px", borderWidth:"5px",color:"rgb(0, 119, 255)"}}/>
        <h6>The grate of my talents are:</h6>
        <div className={styles.bar}>
            <div className="b1">
                <p className={styles.text2}>HTML,CSS</p>
                <WithLabelExample now="80"/>
            </div>
            <div className="b1">
                <p className={styles.text2}>javascript</p> 
                <WithLabelExample now="80"/>
            </div>
            <div className="b1">
                <p className={styles.text2}>React</p>
                <WithLabelExample now="70"/> 
            </div>
            <div className="b1">
                <p className={styles.text2}>Sass.Ajax,Jason</p>
                <WithLabelExample now="90"/>
            </div>
            <div className="b1">
                <p className={styles.text2}>Php,C#,SQL SERVER</p>
                <WithLabelExample now="50"/>
            </div>
            <div className="b1">
                <p className={styles.text2}>English</p>
                <WithLabelExample now="100"/>
            </div>
 
        
        </div> 
            </div> 
            </div>

        </div>
        </>
    )
}
export default Portfolio;