
import React from 'react'
import { Button, ListGroup, Stack } from 'react-bootstrap'
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone from '../QZone/Qzone';
import Advertise from '../Advertise/Advertise';

const RightNav = () => {
  return (
    <div>
    <h4 className='fw-bold fs-5 mb-4'>Login With:</h4>

    <Stack gap={3}>
    <Button variant='outline-primary'><FaGoogle />  Login with Google</Button>
    <Button variant='outline-secondary'><FaGithub />  Login with GitHub</Button>
    </Stack>


    {/* find us */}
    <div className='my-4'>
    <h4 className='fw-bold fs-5 mb-4'>Find Us On:</h4>

    <ListGroup>
      <ListGroup.Item><FaFacebook/> FaceBook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
    </ListGroup>
    </div>


{/* Qzone */}

    <Qzone></Qzone>
{/* advertise */}

    <Advertise></Advertise>
    </div>

  )
}

export default RightNav