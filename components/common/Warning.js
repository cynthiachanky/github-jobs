import {Alert} from 'reactstrap';
import Icon from './Icon';
import {MESSAGES} from '../../utilities/constant';

const Warning = ({status = 400}) => (
  <Alert className={'my-3'} color={'warning'}>
    <Icon type={'error'}/>
    {MESSAGES[status]}
  </Alert>
);

export default Warning;