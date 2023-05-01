import React from 'react'
import moment from 'moment';
import logo from '../../../assets/logo.png'
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';


const Header = () => {
  return (

    
    <Container className="py-4">
      <div className="text-center">
    <img src={logo} className='mb-2'/>
    <p className='text-secondary fs-5 mt-2'><small>Jounalism without fear and favour</small></p>
    <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>

    {/* marquee */}
    <div className='p-4 mt-2'>
      <Stack direction="horizontal" gap="2">
      <Button variant='danger'>Latest</Button>
      <Marquee speed={100}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos temporibus alias tempora, porro vel officia similique... 
      <div className="vr mx-3" />     Reiciendis hic quo eveniet quidem saepe cupiditate sint ratione accusamus optio sed quam voluptas sit? Sit, quidem nisi quas corrupti debitis obcaecati iusto earum suscipit placeat, excepturi pariatur fugit nihil reiciendis maxime ad.</Marquee>
      </Stack>
    </div>

    {/* navbar */}

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
            <Stack direction='horizontal' gap={2}>
            <Nav.Link href="#deets">profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant='outline-dark'>Login</Button>
            </Nav.Link>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  )
    
}

export default Header