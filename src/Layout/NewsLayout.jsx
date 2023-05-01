import React from 'react'
import Header from '../pages/shared/Header/Header'
import Footer from '../pages/shared/Footer/Footer'
import RightNav from '../pages/shared/RightNav/RightNav'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const NewsLayout = () => {
  return (
    <div>
        <Header></Header>
     <Container>

      <Row>
       
        <Col lg={9}>
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

export default NewsLayout