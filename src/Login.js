import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'

export default function Login() {
    return (
        <Container className="my-4">
            <NavBar />

            <form className="form" action="/login" method="POST">
                <h1 className="mb-4">Login <span className="text-info">to start applying for jobs!</span></h1>
                
                <div className="form-inputs">
                    <label htmlFor="Username" className="form-label mr-2 d-flex font-weight-bold">Username/Email</label>
                        <input 
                            type="username" 
                            className="form-input"  
                        />

                    <label htmlFor="Password" className="form-label mr-2 mt-4 d-flex font-weight-bold">Password</label>
                        <input 
                            type="password" 
                            className="form-input d-flex" 
                        />  

                    <input type="submit" value="Sign-in" className="mt-4"/>  
                </div>
            </form>
        </Container>
    )
}
