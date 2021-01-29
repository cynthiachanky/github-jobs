import moment from 'moment';
import {Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row} from 'reactstrap';

const JobCard = ({id, company_logo, company, title, location, created_at, type}) => (
  <Card className={'job-card'}>
    <CardBody>
      <Row>
        <Col sm={3} xl={2}>
          <CardImg src={company_logo} alt={company}/>
        </Col>

        <Col sm={9} xl={10}>
          <CardSubtitle>{company}</CardSubtitle>
          <CardTitle>{title}</CardTitle>
          <Row className={'description'}>
            <Col sm={12} md={4} className={'type'}>
              {type === 'Full Time' && <Badge color={'dark'}>Full Time</Badge>}
            </Col>
            <Col sm={6} md={4}>
              <CardText>
                <i className={'material-icons'}>public</i>
                {location}
              </CardText>
            </Col>
            <Col sm={6} md={4}>
              <CardText>
                <i className={'material-icons'}>schedule</i>
                {moment(created_at).fromNow()}
              </CardText>
            </Col>
          </Row>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default JobCard;