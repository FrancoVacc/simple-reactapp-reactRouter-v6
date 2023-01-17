
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const BlogItem = () => {

  const params = useParams();

  const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if(loading) return <h3>Loading data...</h3>;
  if(error) return <h3>{error}</h3>;

  return (
    <>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </>

  )
}

export default BlogItem