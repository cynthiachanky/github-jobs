import {Col, Row} from 'reactstrap';
import SearchCard from '../components/SearchCard';
import FilterForm from '../components/FilterForm';
import JobCard from '../components/JobCard';

const IndexPage = () => (
  <>
    <SearchCard/>
    <Row>
      <Col md={5}>
        <FilterForm/>
      </Col>
      <Col md={7}>
        <JobCard/>
      </Col>
    </Row>
  </>
);

export default IndexPage;