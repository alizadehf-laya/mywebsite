import { Copyright } from 'lucide-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center" style={{border:"none", fontSize:"smaller", marginTop:"10px"}}>
      <Card.Header style={{border:"none", fontSize:"smaller"}}>LAYA ALIZADEH F</Card.Header>
      <Card.Body>
        <Card.Title  style={{border:"none", fontSize:"smaller" ,display:"flex", textAlign:"center", margin:"0 440px"}}><Copyright/>CopyRights</Card.Title>
        <Card.Text >
          All rights Reserved
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  );
}

export default Footer;