import {Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row} from 'reactstrap';
import {DatetimeIcon, LocationIcon} from './Icon';
import {momentConverter} from '../utilities/helper';

const JobCard = ({id, company_logo, company, title, location, created_at, type}) => (
  <Card className={'job-card'}>
    <CardBody>
      <Row>
        <Col sm={3} xl={2} className={'logo'}>
          <CardImg src={company_logo} alt={company}/>
        </Col>

        <Col sm={9} xl={10}>
          <CardSubtitle>{company}</CardSubtitle>
          <CardTitle>{title}</CardTitle>
          <Row className={'description'}>
            <Col sm={12} md={3} className={'type'}>
              {type === 'Full Time' && <Badge color={'dark'}>Full Time</Badge>}
            </Col>
            <Col sm={6} md={5}>
              <CardText>
                <LocationIcon/>
                {location}
              </CardText>
            </Col>
            <Col sm={6} md={4}>
              <CardText>
                <DatetimeIcon/>
                {momentConverter(created_at)}
              </CardText>
            </Col>
          </Row>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default JobCard;