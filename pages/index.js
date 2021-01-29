import {Col, Row} from 'reactstrap';
import SearchCard from '../components/SearchCard';
import FilterForm from '../components/FilterForm';
import JobCard from '../components/JobCard';

const IndexPage = () => {
  const handleSearch = keyword => {
    console.log('[handleSearch]', keyword);
  };

  const handleFilter = form => {
    console.log('[handleFilter]', form);
  };

  return (
    <>
      <SearchCard callback={handleSearch}/>
      <Row className={'my-4'}>
        <Col md={5}>
          <FilterForm callback={handleFilter}/>
        </Col>
        <Col md={7}>
          <JobCard/>
        </Col>
      </Row>
    </>
  );
};

export default IndexPage;
