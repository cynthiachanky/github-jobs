import {Alert} from 'reactstrap';
import Icon from './Icon';

const Warning = () => (
  <Alert className={'my-3'} color={'warning'}>
    <Icon type={'error'}/>
    Something went wrong. Please try again later.
  </Alert>
);

export default Warning;