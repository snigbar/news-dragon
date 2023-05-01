import React from 'react'
import Header from '../pages/shared/Header/Header'
import Footer from '../pages/shared/Footer/Footer'
import RightNav from '../pages/shared/RightNav/RightNav'
import LeftNav from '../pages/shared/LeftNav/LeftNav'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Main = () => {

  return (
    <div>
     <Header></Header>
     <Container>

      <Row>


        <Col lg={3}>
        <LeftNav></LeftNav>
        </Col>
       
        <Col lg={6}>
        <h2 className='text-primary'><Outlet></Outlet></h2>
        </Col>

        <Col lg={3}>
        <RightNav></RightNav>
        </Col>


      </Row>

     </Container>

     <Footer></Footer>
     
    </div>
  )
}

export default Main