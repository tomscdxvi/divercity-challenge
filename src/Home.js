import React, { useState } from 'react'
import useFetchJobs from './useFetchJobs'
import Job from './Job'
import { Container } from 'react-bootstrap'
import JobsPage from './JobsPage'
import SearchForm from './SearchForm'
import NavBar from './NavBar'

export default function Home() {
    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const { loading, error, jobs, hasNextPage } = useFetchJobs(params, page)

    function handleParamChange(e) {

    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
    return (
        <Container className="my-4">
            <NavBar />
            <h1 className="mb-4">Divercity Jobs</h1>
            <SearchForm params={params} onParamChange={handleParamChange} />
            <JobsPage page={page} setPage={setPage} hasNextPage={hasNextPage}/>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error Occurred. Please refresh the page.</h1>}
            {jobs.map(job => {
                return <Job key={job.id} job={job} />
            })}
            <JobsPage page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        </Container>
    )
}
