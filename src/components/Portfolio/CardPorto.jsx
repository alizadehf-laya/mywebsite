import Card from 'react-bootstrap/Card';
import CardB from './CardB';
import { BorderLeft } from 'react-bootstrap-icons';

function CardPorto(props) {
  return (
    <Card style={{ width: '18rem' ,border:"none"}}>
      <Card.Body>        
        <Card.Title>{props.Title}</Card.Title>
        <hr style={{color:"darkblue",borderWidth:"3px",color:"rgb(0, 119, 255)"}}/>
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text>
        {props.Text}
        </Card.Text>
       
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default CardPorto;