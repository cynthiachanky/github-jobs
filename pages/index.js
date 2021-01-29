import {Col, Row} from 'reactstrap';
import SearchCard from '../components/SearchCard';
import FilterForm from '../components/FilterForm';
import JobCard from '../components/JobCard';

const jobList = [
  {
    id: 'devchallenges-job-1',
    company_logo: '/devchallenges.png',
    company: 'Github',
    title: 'Challenger',
    location: 'The Earth',
    created_at: 'Thu Jan 28 16:50:15 UTC 2021',
    type: 'Full Time'
  },
  {
    id: 'devchallenges-job-2',
    company_logo: '/devchallenges.png',
    company: 'Github',
    title: 'Challenger',
    location: 'The Earth',
    created_at: 'Thu Jan 28 16:50:15 UTC 2021',
    type: 'Part Time'
  }
];

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
        <Col lg={5}>
          <FilterForm callback={handleFilter}/>
        </Col>
        <Col lg={7}>
          {jobList.map(job => <JobCard key={job.id} {...job}/>)}
        </Col>
      </Row>
    </>
  );
};

export default IndexPage;
