import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LeftNav = () => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.log(err));
  },[])

  return (
    <div>
        <h4 className='fw-bold fs-5 mb-4'>Categories:</h4>

        <div>
          {categories.map(el => <p className='fw-500 fs-6 bg-light w-75 p-2 my-2 rounded' key={el.id}><Link to={`categories/${el.id}`} className=' text-decoration-none'>{el.name}</Link></p>)}
        </div>
    </div>
  )
}

export default LeftNav