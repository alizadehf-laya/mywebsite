
import styles from "./Contact.module.css"
import Slidbar from "../Header/Slidebar";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function LeftContact() {
  return (
    <Container fluid>   

        <Col sm={4}><Slidbar height={"100vh"}/></Col>
      
  
    </Container>
  );
}

export default LeftContact;