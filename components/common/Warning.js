import {Alert} from 'reactstrap';
import Icon from './Icon';

const messages = {
  400: 'Something went wrong. Please try again later.',
  403: 'You are not allowed to access the content.',
  404: 'We cannot find the page you are looking for.'
};

const Warning = ({status = 400}) => (
  <Alert className={'my-3'} color={'warning'}>
    <Icon type={'error'}/>
    {messages[status]}
  </Alert>
);

export default Warning;