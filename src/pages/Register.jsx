import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {

    const {user,createUser,updateUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;



        createUser(email,password)
        .then(() =>{
            updateUser(name,photo);
            form.reset();
            navigate('/home')


        }).catch(err => console.log(err));

        
    

    }

    console.log(user)

    const handlTerms = (e) =>{
        setAccepted(e.target.checked);
    }
   

  return (
    <Container className='w-50 bg-light mx-auto px-3 py-2 text-secondary'>
        <h4 className='fw-bold fs-4 mb-4'>Please Register</h4>
    <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name='photo' placeholder="Photo URL" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
                type="checkbox"
                name="accept"
                label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} 
                onClick={handlTerms}
                />
                
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
            Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
            Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
    </Form>
</Container>
  )
}

export default Register