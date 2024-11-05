import { Container } from "react-bootstrap";
import { Grid } from "react-bootstrap-icons";
import WithLabelExample from "../About/Progressbar";
import { Link } from "react-router-dom";
import Slidbar from "../Header/Slidebar";
import styles from "./About.module.css"
const About=()=>{
    return(
        <div className={styles.main}>
            <div className={styles.left}><Slidbar/></div>
            <div className={styles.right}>
                <h2 style={{marginTop:"50px",padding:"10px"}}>About </h2>
                <hr style={{width:"100px", borderWidth:"5px",color:"rgb(0, 119, 255)"}}/>
                <h7>I'm laya alizadeh,a web developer,with 2years of experience, who is capable of coding  and designing pages in best way,
                <br/>I'm master in HTML ,CSS ,JAVASCRIPT ,REACT ,SASS ,BOOTSTRAP ,AJAX ,JASON .<br/>I'm also familiar with C# ,PHP ,DATA STRUCTURE.
                <br/> As an entrovert person i enjoy working in groups and entosiastic learning new things.
                </h7>
            <div className={styles.Container}>
                <img src="images/about.jpg" alt="my pic" style={{width:"300px",height:"300px"}}></img>
            <div >
            <h3 style={{padding:"20px"}}> Information</h3>
            <div className={styles.text}>
                <div style={{display:"flex"}}>
                    <p style={{fontWeight:"bolder"}}>Birthday:</p>
                    <p>21 septamber 1987</p>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{fontWeight:"bolder"}}>Website:</p>
                    <p>www.layaAlizadeh.com</p>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{fontWeight:"bolder"}}>Phone:</p>
                    <p>00989156501353</p>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{fontWeight:"bolder"}}>Country:</p>
                    <p>Iran</p>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{fontWeight:"bolder"}}>Age:</p>
                    <p>36</p>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{fontWeight:"bolder"}}>Age:</p>
                    <p>36</p>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{fontWeight:"bolder"}}>Degree:</p>
                    <p>Master</p>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{fontWeight:"bolder"}}>Email:</p>
                    <p>Alizadehlaya3@gmail.com</p>
                </div>
            </div>
            </div>       
        </div >
        <div>
            <div className={styles.AboutFooter}>
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
                <p className={styles.text2}>Php,C#,Data structure</p>
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
       
        </div>
    )
}
export default About;