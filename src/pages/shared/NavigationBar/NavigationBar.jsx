import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

  const { user } = useContext(AuthContext);


  return (

    <Container className='my-4'>

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
   
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link><Link to='/home' className='text-decoration-none text-secondary'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/home/categories/0' className='text-decoration-none text-secondary'>Categories</Link></Nav.Link>
          <Nav.Link><Link to='/home' className='text-decoration-none text-secondary'>Career</Link></Nav.Link>
         
        </Nav>
        <Nav>
          <Stack direction='horizontal' gap={2}>
          {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }

                            {user ?
                                <Button variant="danger">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="primary">Login</Button>
                                </Link>
                            }
          </Stack>
        </Nav>
      </Navbar.Collapse>
    </Container>
   
  </Navbar>

</Container>
    
      
    
  )
}

export default NavigationBar