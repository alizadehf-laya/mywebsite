import { Container } from "react-bootstrap";
import { Grid } from "react-bootstrap-icons";
import WithLabelExample from "../About/Progressbar";
import { Link } from "react-router-dom";
import Slidbar from "../Header/Slidebar";
import styles from "./About.module.css"
const About=()=>{
    return(
        <div className={styles.main}>
            <div className={styles.left}><Slidbar height={"140vh"}/></div>
            <div className={styles.right}>
                <h2 style={{marginTop:"50px",padding:"10px"}}>About </h2>
                <hr style={{width:"150px", borderWidth:"5px",color:"rgb(0, 119, 255)"}}/>
                <h7> I'm laya Alizadeh.i'm intrested in web programming.my journey shaped by a background in social science 
                    and passion for fashion and designe,has ignited my curiosity for the world of marketing,technology and
                    <br/> computer science my academic journey,developed a strong
                     foundation in undrestanding human behavior and<br/> social dynamics and 
                     learned the value of teamwork and comuunity service.Adittionaly participating in group <br/>searches led me to
                      the world of technology where i recognized the power of digital platforms to connect with a global
                       audience.this intersection of my passion for business and social community with the world of technology 
                       <br/>led me to discover to the potential of digital advertising and computer science.Right now i'm working as frontend developer and i enjoy working in this major.
                     
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
                    <p style={{fontWeight:"bolder"}}>More ability</p>
                    <p>Git.Github</p>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{fontWeight:"bolder"}}>Degree:</p>
                    <p>  2 Master in<br/> computer science <br/>and socialogy</p>
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
       
        </div>
    )
}
export default About;