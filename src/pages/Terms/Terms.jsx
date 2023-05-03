import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Terms() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-center h3'>Terms and Conditions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
            nisl eu suscipit lacinia, odio risus tincidunt tellus, non tempus nisl
            tellus ut nulla. Nullam sed diam vel nulla aliquam tincidunt. Nullam
            et bibendum nunc, ut tincidunt arcu.
          </p>
          <p>
            Duis mollis urna nec tellus gravida fringilla. Vivamus ut dolor sit
            amet enim bibendum malesuada. Integer in mi vestibulum, bibendum felis
            ut, venenatis elit.
          </p>
          <p>
            Quisque suscipit ex in ipsum euismod, vel consectetur odio eleifend.
            Sed vel ex semper, ornare risus nec, hendrerit augue.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Terms;
