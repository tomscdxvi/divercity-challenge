import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'
import useRegister from './useRegister'
import verifyRegister from './verifyRegister'


const Register = (submitForm) => {
    const {handleChange, values, handleSubmit, errors} = useRegister(verifyRegister, submitForm);

    return (
        <Container className="my-4">
            <NavBar />

            <form className="form" action="/register" method="POST" onSubmit={handleSubmit}>
                <h1 className="mb-4">Register <span className="text-info">to get started!</span></h1>
                
                <div className="form-inputs">
                    <label htmlFor="Username" className="form-label mr-2 d-flex font-weight-bold">Username</label>
                        <input 
                            type="username" 
                            className="form-input" 
                            placeholder="Enter a username" 
                            value={values.username}
                            onChange={handleChange}
                            name="username" 
                        />
                        {errors.username && <p className="text-danger">{errors.username}</p>}

                    <label htmlFor="Password" className="form-label mr-2 mt-4 d-flex font-weight-bold">Password</label>
                        <input 
                            type="password" 
                            className="form-input d-flex" 
                            placeholder="Enter a password" 
                            value={values.password}
                            onChange={handleChange}
                            name="password" 
                        />  
                        {errors.password && <p className="text-danger">{errors.password}</p>}

                    <label htmlFor="Confirm_Password" className="form-label mr-2 mt-4 d-flex font-weight-bold">Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-input d-flex" 
                            placeholder="Verify your password" 
                            value={values.confirm_password}
                            onChange={handleChange}
                            name="confirm_password" 
                        />
                        {errors.confirm_password && <p className="text-danger">{errors.confirm_password}</p>}

                    <label htmlFor="Email" className="form-label mr-2 mt-4 d-flex font-weight-bold">Email</label>
                        <input 
                            type="email" 
                            className="form-input d-flex" 
                            placeholder="Enter an email" 
                            value={values.email}
                            onChange={handleChange} 
                            name="email" 
                        />  
                        {errors.email && <p className="text-danger">{errors.email}</p>}

                    <input type="submit" value="Register" className="mt-4"/>  
                </div>
            </form>
        </Container>
    )
}

export default Register

