import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FirstNameC() {
  return (
    <Form >
      <Row className="mb-2" >
        <Form.Group as={Col} controlId="formGridName" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-2" controlId="formGridSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formGridTextara">
        <Form.Label>Message</Form.Label>
        <Form.Control placeholder=""  style={{width:"350px", height:"400px"}} />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}
{/* 
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row> */}

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FirstNameC;