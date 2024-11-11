import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: '100%',border:"none", marginTop:"30px" }}>
      <Card.Body>
        <Card.Title>Contact</Card.Title>
        <hr style={{width:"150px", borderWidth:"5px",color:"rgb(0, 119, 255)"}}/>
        <Card.Text>
          This is a way you can connect me .....
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default TextExample;