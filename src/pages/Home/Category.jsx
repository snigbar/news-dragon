import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCard from './NewsCard';
import { Stack } from 'react-bootstrap';

const Category = () => {
    const categoryNews = useLoaderData();
  return (
    <Stack direction='column' gap={4}>
        {categoryNews.map(news => <NewsCard key={news._id} data={news}></NewsCard>)}
    </Stack>
  )
}

export default Category