import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
  }

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

                                user && <img 
                                style={{
                                  height:"40px",
                                  width: "40px", 
                                  padding:"1px", 
                                  backgroundColor:"#f1f2f6",
                                  border:"1px solid #3742fa",
                                  borderRadius:"50%"
                                }}
                                 src={user.photoURL} />
                            }

                            {user ?
                                <Button variant="danger" onClick={handleLogOut}>Logout</Button> :
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