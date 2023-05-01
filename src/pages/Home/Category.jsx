import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
  return (
    <div>Category: {categoryNews.length}</div>
  )
}

export default Category