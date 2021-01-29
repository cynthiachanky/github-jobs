import {Badge} from 'reactstrap';

const FullTimeBadge = ({type}) =>
  type === 'Full Time' && <Badge color={'dark'} className={'badge--full-time'}>Full Time</Badge>;

export default FullTimeBadge;