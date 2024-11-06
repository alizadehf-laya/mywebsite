import Card from 'react-bootstrap/Card';

function CardPorto() {
  return (
    <Card style={{ width: '18rem',marginTop:"30px" , border:"none"}}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text> </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default CardPorto;