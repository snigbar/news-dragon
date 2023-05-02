import React, { useEffect } from 'react'
import Header from '../pages/shared/Header/Header'
import Footer from '../pages/shared/Footer/Footer'
import RightNav from '../pages/shared/RightNav/RightNav'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet, useLoaderData } from 'react-router-dom'

const NewsLayout = () => {

  const allNews = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 350)
  }, [])

  return (
    <div>
     <Header data={allNews} from={"news"}></Header>
    <Container>

      <Row>
       
        <Col lg={9}>
      <Outlet></Outlet>
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