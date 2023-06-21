import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from "../components/UI/loader/MyLoader"
import PostService from '../API/PostService'

const PostPage = () => {
  const params = useParams()
  const [post, setPost] = useState({});
  const [isPostLoading, setIsPostLoading] = useState(false);

  async function fetchPostById (id) {
    setIsPostLoading(true)
    const response = await PostService.getById(id)
    setPost(response.data)
    setIsPostLoading(false)
  }

  useEffect( ()=> {
    fetchPostById(params.id)
  }, [])

  return (
    <div>
        <h1>Вы открыли страницу поста с Id = {params.id}</h1>
        {isPostLoading 
        ? <Loader/>
        : <div>{post.title}</div> }
    </div>
  )
}

export default PostPage
