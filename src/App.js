import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import Job from './Job';
import { Container } from 'react-bootstrap';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { loading, error, jobs } = useFetchJobs(params, page);

  return(
  
    <Container className="my-4">
      <h1 className="mb-4">Divercity Jobs</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error Occurred. Please refresh the page.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  )
}

export default App;
