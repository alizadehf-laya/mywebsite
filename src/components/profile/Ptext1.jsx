import Card from 'react-bootstrap/Card';

function Ptext1() {
  return (
    <Card style={{border:"none" }}>
      <Card.Body>
        <Card.Title>Portfolio</Card.Title>
        <hr style={{color:"darkblue",borderWidth:"3px",color:"rgb(0, 119, 255)",width:"150px"}}/>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
         This are some pages and projects that i've codede as sample:
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default Ptext1;