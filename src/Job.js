import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'

export default function Job({ job }) {
    
    const [open, setOpen] = useState(false)

    return (
        <Card className="mb-4">
            <Card.Body>
                <div className="d-flex justify-content-between mt-2">
                    <div>

                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date().toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">{job.job_type}</Badge>
                        <Badge variant="secondary">{job.location}</Badge>

                        <div className="mt-2">
                            <h5 className="text-primary">Skills</h5>
                            {job.skills_tag.join(', ')}
                        </div>
                    </div>
                </div>
                <Card.Text>
                    <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant="primary" className="mt-4">
                        { open ? 'Hide Details' : 'View Details' }
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4" dangerouslySetInnerHTML={{__html:job.description}}></div>
                </Collapse>
                <Collapse in={open}>
                    <Button variant="info">Apply</Button>
                </Collapse>
            </Card.Body>
        </Card>
    )
}
