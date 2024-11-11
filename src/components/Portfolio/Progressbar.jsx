import ProgressBar from 'react-bootstrap/ProgressBar';
import About from '../About/About';

function WithLabelExample(props) {
  const now = 40;
  return <ProgressBar now={props.now} label={props.now}  style={{width:"500px"}}/>;
}

export default WithLabelExample;