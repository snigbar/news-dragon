import React from 'react'
import { Button, Card} from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
  const news = useLoaderData();

  const{_id, image_url, title,details,category_id} = news;
  return (
    <Card className="text-dark">
      <Card.Body>
        <Card.Title className='fs-5 fw-600 mb-4'>{title}</Card.Title>
        <Card.Img variant="top" className='text-center mb-2' src={image_url} />
        <Card.Text className='fs-6 mt-4'>
          {details}
        </Card.Text>
        <Link to={`/home/categories/${category_id}`}><Button variant='danger px-4'><FaArrowLeft className='me-2'/> All news in this categories</Button></Link>
      </Card.Body>

      
    </Card>
    
  )
}

export default News