import {useRouter} from 'next/router';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row} from 'reactstrap';
import {FullTimeBadge} from '../common';
import {DatetimeIcon, LocationIcon} from '../common/Icon';
import {momentConverter} from '../../utilities/helper';

const JobCard = ({id, company_logo, company, title, location, created_at, type}) => {
  const router = useRouter();

  return (
    <Card className={'job-card'} onClick={() => router.push(`/${id}`)}>
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
                <FullTimeBadge type={type}/>
              </Col>
              <Col sm={6} md={5}>
                <CardText className={'icon-text'}>
                  <LocationIcon/>
                  {location}
                </CardText>
              </Col>
              <Col sm={6} md={4}>
                <CardText className={'icon-text'}>
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
};

export default JobCard;