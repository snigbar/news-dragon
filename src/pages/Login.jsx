import React, { useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Login = () => {

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const from = location.state?.from.pathname || '/home'
      

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
               
                navigate(from, {replace:true});
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

  return (
    <Container className='w-25 bg-light mx-auto p-4 rounded'>
   <h4 className='fw-bold fs-4 mb-4 text-secondary'>Please Login</h4>
    <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
            Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
            Don't Have an Account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
    </Form>
</Container>
  )
}

export default Login;