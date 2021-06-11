import React, { useState, useContext } from 'react'
import { Container } from 'react-bootstrap'
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import { AuthContext } from '../Context/AuthContext'
import NavBar from '../NavBar'

const Login = props =>{

    const [user, setUser] = useState({username: "", password: ""});
    const [message, setMessage] = useState(null);
    // const authContext = useContext(AuthContext);

    const onChange = e =>{

        e.preventDefault();

        setUser({ ...user, [e.target.name] : e.target.value });

        console.log(user)

    }

    const onSubmit = e =>{

        e.preventDefault();

        AuthService.login(user).then(data=>{
            const { isAuthenticated, user, message } = data;

            if(isAuthenticated){
                AuthContext.setUser(user);
                AuthContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/')
            } else {
                setMessage(message);
            }
        })
    }

    return (

        <Container className="my-4">
            <NavBar />

            <form className="form" action="/login" method="POST" onSubmit={onSubmit}>
                <h1 className="mb-4">Login <span className="text-info">to start applying for jobs!</span></h1>
                
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label mr-2 d-flex font-weight-bold">Username</label>
                        <input 
                            type="username"
                            name="username"
                            className="form-control"
                            placeholder="Enter your username..."
                            onChange={onChange}  
                        />

                    <label htmlFor="Password" className="form-label mr-2 mt-4 d-flex font-weight-bold">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            className="form-control d-flex" 
                            placeholder="Enter your password..."
                            onChange={onChange}
                        />  

                    <input 
                        type="submit" 
                        value="Sign-in" 
                        className="mt-4"
                    />  

                </div>
            </form>
            {/*message ? <Message message={message}/> : null*/}
        </Container>
    )
}

export default Login;

