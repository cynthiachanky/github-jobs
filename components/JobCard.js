import {Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';

const JobCard = () => (
  <Card>
    <CardBody>
      <CardImg src={'/devchallenges.png'} alt={'Logo'}/>
      <CardSubtitle>Company</CardSubtitle>
      <CardTitle>Position</CardTitle>
      <Badge>Full Time</Badge>
      <CardText>Location Posting Time</CardText>
    </CardBody>
  </Card>
);

export default JobCard;