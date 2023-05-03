import React, { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap';
import NewsCard from './NewsCard';

const Home = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(()=>{
      fetch('https://news-dragon-server-snigbar.vercel.app/categories/0')
      .then(res => res.json())
      .then(data => setAllNews(data))
      .catch(err => console.log(err))
  },[])

  return (
    <Stack direction='column' gap={4}>
        {allNews.map(news => <NewsCard key={news._id} data={news}></NewsCard>)}
    </Stack>
  )
}

export default Home