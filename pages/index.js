import {useState} from 'react';
import useSWR from 'swr';
import {Col, Row} from 'reactstrap';
import Loader from '../components/Loader';
import Warning from '../components/Warning';
import SearchCard from '../components/SearchCard';
import FilterForm from '../components/FilterForm';
import JobCard from '../components/JobCard';
import {fetcher} from '../utilities/fetcher';

const IndexPage = () => {
  const [query, setQuery] = useState({keyword: '', location: '', isFullTime: false});

  const {data: jobList, error} = useSWR(['positions.json', query.keyword, query.location, query.isFullTime],
    async (url, description, location, full_time) => await fetcher(url, {description, location, full_time}));

  const handleSearch = keyword => setQuery({...query, keyword});

  const handleFilter = form => setQuery({...query, ...form});

  return (
    <>
      <SearchCard callback={handleSearch}/>
      <Row className={'my-4'}>
        <Col lg={5}>
          <FilterForm callback={handleFilter}/>
        </Col>
        <Col lg={7}>
          {jobList ? jobList.map(job => <JobCard key={job.id} {...job}/>) :
            error ? <Warning/> : <Loader/>}
        </Col>
      </Row>
    </>
  );
};

export default IndexPage;
