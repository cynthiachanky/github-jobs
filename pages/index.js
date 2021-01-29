import {useState} from 'react';
import useSWR from 'swr';
import {Col, Row} from 'reactstrap';
import {Loader, Warning} from '../components/common';
import {FilterForm, JobCard, SearchCard} from '../components/job-search';
import {corsFetcher} from '../utilities/helper';

const IndexPage = () => {
  const [query, setQuery] = useState({keyword: '', location: '', isFullTime: false});

  const {data: jobList, error} = useSWR(['positions.json', query.keyword, query.location, query.isFullTime],
    async (url, description, location, full_time) => await corsFetcher(url, {description, location, full_time}));

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
