import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import IconAdress from './IconAdress';
import CallLucide from './CallLucide';
import EmailLucide from './EmailLucide';
function CardContact() {
  return (
    <Card style={{ width: '16rem',  margin:"20px", border:"none"}}>
      <Card.Img variant="top" src="images/map.jpg" />
      <Card.Body>
        <Card.Title style={{display:"flex" ,gap:"5px"}}><IconAdress />Adress</Card.Title>
        <Card.Text>
            number25,hashemieh Blv,mashhad,khorasanRazavi Proviance,Iran
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title  style={{display:"flex",gap:"5px"}}> <CallLucide/>Call Us</Card.Title>
        <Card.Text>
            00989156501353
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title  style={{display:"flex",gap:"5px"}}><EmailLucide/>Email Us</Card.Title>
        <Card.Text>
            layaalizadehf@gmail.com
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
  );
}

export default CardContact;