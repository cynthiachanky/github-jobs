import {Alert} from 'reactstrap';

const Warning = () => (
  <Alert className={'my-3'} color={'warning'}>
    <i className={'material-icons'}>error</i>
    Something went wrong. Please try again later.
  </Alert>
);

export default Warning;