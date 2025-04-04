import React from 'react'
import PostListItem from './PostListItem'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return res.data;
};

const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetchPosts(),
  });

  if (isPending) return <div className='font2 animate-pulse p-2'>Loading...</div>
  
  if (error) {
    return (
      <div className='font2 text-red-600 bg-red-100 flex items-center gap-2'>
        <div>An error has occurred: {error.message}</div>
      </div>
    )
  }

  console.log(data);

  return (
    <div className='flex flex-col gap-12 mb-8'>
        <PostListItem />
    </div>
  )
}

export default PostList