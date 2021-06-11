import React from 'react'
import Login from './LoginPages/Login'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

export default function MyVerticallyCenteredModal(props) {

    const history = useHistory();

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Apply Now!
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <h4>You must be logged in to apply for jobs!</h4>
            <p>
                To protect the safety of others and yourself, you must login or register an account before applying for jobs!
            </p>
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <Button onClick={() => history.push('/login')}>Login</Button>
        </Modal.Footer>

        </Modal>
    )
}
