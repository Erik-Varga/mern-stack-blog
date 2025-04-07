import React from 'react'
import PostListItem from './PostListItem'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 2 },
  });
  return res.data;
};

const PostList = () => {


  const { 
    data, 
    error, 
    fetchNextPage, 
    hasNextPage, 
    isFetching, 
    isFetchingNextPage, 
    status, 
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastpage, pages) => lastpage.hasMore ? pages.length + 1 : undefined,
  });

  // console.log(data);

  if (isFetching) return <div className='font2 animate-pulse p-2'>Loading...</div>

  if (error) {
    return (
      <div className='font2 text-red-600 bg-red-100 flex items-center gap-2'>
        <div>Something went wrong. An error has occurred: {error.message}</div>
      </div>
    )
  }

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  console.log(data);

  return (

    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b>All Posts loaded!</b>
        </p>
      }
    >
      <div>Number of Posts: {allPosts.length}</div>
      {allPosts.map((post, idx) => (
        <PostListItem key={idx} post={post} />
      ))}
    </InfiniteScroll>
  )
}

export default PostList