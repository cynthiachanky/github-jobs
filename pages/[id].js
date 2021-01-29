import Link from 'next/link';
import parser from 'html-react-parser';
import {Button, Col, Row} from 'reactstrap';
import {FullTimeBadge, Icon} from '../components/common';
import {DatetimeIcon, LocationIcon} from '../components/common/Icon';
import {fetcher, momentConverter} from '../utilities/helper';

const DetailPage = ({title, type, created_at, company_logo, company, location, description, how_to_apply}) => (
  <Row className={'job-detail'}>
    <Col lg={3}>
      <Link href={'/'}>
        <Button className={'icon-text'} outline>
          <Icon type={'arrow_back'}/>
          Back to search
        </Button>
      </Link>

      <h6 className={'subtitle'}>How To Apply</h6>
      {parser(how_to_apply)}
    </Col>

    <Col lg={9}>
      <h4 className={'title'}>
        {title}
        <FullTimeBadge type={type}/>
      </h4>
      <p className={'icon-text'}>
        <DatetimeIcon/>
        {momentConverter(created_at)}
      </p>

      <Row className={'my-3'}>
        <Col sm={3} xl={2} className={'logo'}>
          <img src={company_logo} alt={company}/>
        </Col>
        <Col sm={9} xl={10} className={'description'}>
          <div>
            <h5 className={'title'}>{company}</h5>
            <p className={'icon-text'}>
              <LocationIcon/>
              {location}
            </p>
          </div>
        </Col>
      </Row>

      {parser(description)}
    </Col>
  </Row>
);

export const getServerSideProps = async ({params}) => {
  if (params.id) {
    try {
      const jobDetails = await fetcher(`positions/${params.id}.json`);
      return {props: jobDetails};
    } catch (err) {
      console.error(err);
    }
  }
  return {notFound: true};
};

export default DetailPage;
