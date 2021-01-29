import {useState} from 'react';
import useSWR from 'swr';
import {Col, Pagination, PaginationItem, PaginationLink, Row} from 'reactstrap';
import {Loader, Warning} from '../components/common';
import {FilterForm, JobCard, SearchCard} from '../components/job-search';
import {PAGE_ITEM, PAGE_STEP} from '../utilities/constant';
import {corsFetcher} from '../utilities/helper';

const IndexPage = () => {
  const [query, setQuery] = useState({keyword: '', location: '', isFullTime: false});
  const [pagination, setPagination] = useState(-1);
  const [currentPage, setCurrentPage] = useState(-1);

  const {data: jobList, error} = useSWR(['positions.json', query.keyword, query.location, query.isFullTime],
    async (url, description, location, full_time) => {
      const res = await corsFetcher(url, {description, location, full_time});
      setPagination(Math.ceil(res.length / PAGE_ITEM));
      setCurrentPage(0);
      return res;
    }
  );

  const handleSearch = keyword => setQuery({...query, keyword});

  const handleFilter = form => setQuery({...query, ...form});

  const renderPagination = () => {
    let startIndex = currentPage - PAGE_STEP, endIndex = currentPage + PAGE_STEP;
    if (startIndex < 0) {
      startIndex = currentPage;
      endIndex = Math.min(currentPage + PAGE_STEP * 2, pagination - 1);
    } else if (endIndex >= pagination) {
      startIndex = Math.max(currentPage - PAGE_STEP * 2, 0);
      endIndex = currentPage;
    }
    const selectableItems = [...Array(pagination).keys()].slice(startIndex, endIndex + 1)
      .map(page => ({page, active: page === currentPage}));

    const paginationItems = [
      {page: 0, first: true, disabled: pagination === 0},
      {page: currentPage - PAGE_STEP, previous: true, disabled: currentPage - PAGE_STEP < 0},
      ...selectableItems,
      {page: currentPage + PAGE_STEP, next: true, disabled: currentPage + PAGE_STEP >= pagination},
      {page: pagination - 1, last: true, disabled: pagination === 0}
    ];

    return (
      <Pagination className={'cell-center'}>
        {paginationItems.map(({page, active, disabled, ...rest}, index) => (
          <PaginationItem key={`pagination-${index}`} active={!!active} disabled={!!disabled}
                          onClick={() => !disabled && setCurrentPage(page)}>
            {active !== undefined ? <PaginationLink>{page + 1}</PaginationLink> : <PaginationLink {...rest}/>}
          </PaginationItem>
        ))}
      </Pagination>
    );
  };

  return (
    <>
      <SearchCard callback={handleSearch}/>
      <Row className={'my-4'}>
        <Col lg={5}>
          <FilterForm callback={handleFilter}/>
        </Col>
        <Col lg={7}>
          {jobList ? (
              <>
                {jobList.slice(currentPage * PAGE_ITEM, (currentPage + 1) * PAGE_ITEM)
                  .map(job => <JobCard key={job.id} {...job}/>)}
                {renderPagination()}
              </>
            ) :
            error ? <Warning/> : <Loader/>}
        </Col>
      </Row>
    </>
  );
};

export default IndexPage;
