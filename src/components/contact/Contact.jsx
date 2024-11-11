import ContactRight from "./ContactRight.jsx";
import LeftContact from "./LeftContact.jsx";
import Slidbar from "../Header/Slidebar.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <Container fluid>
 
        <ContactRight/>
        <LeftContact/>
    </Container>
  );
}

export default Contact;