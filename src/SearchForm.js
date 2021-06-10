import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {

    return (
        <Form className="mb-4">
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Job Type</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.job_type} name="job_type" type="text" />
                </Form.Group>

                <Form.Group as={Col} xs="auto">
                    <Form.Label>Skill Tags</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.skills_tag} name="skills_tag" type="text" />
                </Form.Group>

            </Form.Row>
        </Form>
    )
}

