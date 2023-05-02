import moment from 'moment/moment';
import React from 'react'
import { Card, Image, Stack} from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt,FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = (props) => {
    const{_id, image_url, title,details,author,rating,total_view} = props.data;
  return (
    
    <Card className="text-dark">
      <Card.Header  className='py-2'>
        <Stack direction="horizontal" gap={4} className='align-items-center'>
        <Image style={{width:"30px", height:"30px"}} src={author?.img} roundedCircle></Image>
        <div>
          <p className='fs-6 m-0 mb-1'>{author?.name}</p>
          <h6 className='text-secondary'>{moment(author?.published_date).format('yyyy-MM-D')}</h6>
        </div>
        <div className='ms-auto fs-6 d-flex gap-3'>
        <FaRegBookmark/>
        <FaShareAlt/>
        </div>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Card.Title className='fs-5 fw-600 mb-4'>{title}</Card.Title>
        <Card.Img variant="top" className='text-center mb-2' src={image_url} />
        <Card.Text className='fs-6 mt-4'>
          {details.length < 250 ? <>{details}</> 
          : 
          <>{details.slice(0,250)}....<Link to={`/news/${_id}`}  className="text-decoration-none">Read more</Link></>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <Rating
        placeholderRating={3.5}
        emptySymbol={<FaRegStar/>}
        placeholderSymbol={<FaStar/>}
        fullSymbol={<FaStar/>}
        readonly
        className='text-warning fs-6'
      />
      <p className='h6'><FaEye className='me-2'/>{total_view}</p>
      </Card.Footer>
    </Card>
    
  )
}

export default NewsCard