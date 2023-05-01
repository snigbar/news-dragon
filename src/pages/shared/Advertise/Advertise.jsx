import React from 'react'
import banner from '../../../assets/bg.png'
import { Button, Card } from 'react-bootstrap'


const Advertise = () => {
  return (
    <div>
         <Card className="bg-dark text-white">
      <Card.Img src={banner} alt="Card image" />
      <Card.ImgOverlay className='text-center my-4'>
        <Card.Title className='fw-bold fs-3'>Create An Amazing Newspaper</Card.Title>
        <Card.Text className='fs-7 py-4'>
          Discover thousands of options,easy to customize layouts, one click to important demo and much more
        </Card.Text>
        <Button variant="outline-danger" className='text-white'>Go somewhere</Button>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default Advertise