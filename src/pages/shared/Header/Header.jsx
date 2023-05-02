import React from 'react'
import moment from 'moment';
import logo from '../../../assets/logo.png'
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';


const Header = ({data,from}) => {

  return (

    <Container className="py-4">
      <div className="text-center">
    <img src={logo} className='mb-2'/>
    <p className='text-secondary fs-5 mt-2'><small>Jounalism without fear and favour</small></p>
    <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>

    {/* marquee */}
    <div className='p-4 mt-2'>
      <Stack direction="horizontal" gap="2" className='align-items-center'>
      <Button variant='danger'>Latest</Button>
      <Marquee speed={100} pauseOnHover={true}>
      
      {data.map(el => <div key={el._id}>{el.title} <Link to={from =="main"?`/news/${el._id}`:`/news/${el._id}`} className='mx-2 text-danger text-decoration-none'>...read full |</Link></div>)}
      </Marquee>
      </Stack>
    </div>

    {/* navbar */}

    </Container>
  )
    
}

export default Header