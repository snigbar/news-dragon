import React from 'react'
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
import { Stack } from 'react-bootstrap'

const Qzone = () => {
  return (
    <div className='bg-light px-2 py-4'>

<h4 className='fw-bold fs-5 mb-4 text-center'>Qzone:</h4>

   <Stack gap={2}>
        <img src={qzone1}/>
        <img src={qzone2}/>
        <img src={qzone3}/>
    </Stack>

    </div>
  )
}

export default Qzone;