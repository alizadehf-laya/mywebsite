import ListGroup from 'react-bootstrap/ListGroup';
import styles from "./Portfolio.module.css";
import Text2 from './Text2';

function Cardleft() {
  return (
    <>
    <Text2/>
      <ListGroup  className={styles.list1}>
      <ListGroup.Item style={{border:"none"}}>HTML,CSS,BOOTSTRAP</ListGroup.Item>
      <ListGroup.Item style={{border:"none"}}>JAVASCRIPT,REACT</ListGroup.Item>
      <ListGroup.Item style={{border:"none"}}>SASS,AJAX,JSON</ListGroup.Item>
      <ListGroup.Item style={{border:"none"}}>Master in GIT,GITHUB</ListGroup.Item>
      <ListGroup.Item style={{border:"none"}}>Mastering the english language</ListGroup.Item>
    </ListGroup>
    </>

  );
}

export default Cardleft;