import { Container } from "react-bootstrap";
import { Grid } from "react-bootstrap-icons";

const About=()=>{
    return(
        <>
        <h2>about me</h2>
        <h7>I'm laya alizadeh,a web developer,with 2years of experience, who is capable of coding  and designing pages in best way,
        <br/>I'm master in HTML ,CSS ,JAVASCRIPT ,REACT ,SASS ,BOOTSTRAP ,AJAX ,JASON .<br/>I'm also familiar with C# ,PHP ,DATA STRUCTURE.
        <br/> As an entrovert person i enjoy working in groups and entosiastic learning new things.
        </h7>
        <Container style={{display:"flex"}}>
            <img src="images/about.jpg" alt="my pic" style={{width:"400px",height:"400px"}}></img>
        <div >
            <h2>Information</h2>
        <div style={{display:"Grid" , gridTemplateColumns:"auto auto"}}>
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
        </Container>
        <h2>Skills</h2>
        <div>
            
        </div>
       
        </>
    )
}
export default About;