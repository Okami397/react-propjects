import React from 'react'
import TodoItem from './TodoItem'

const PostList = ({posts, title, remove}) => {
  return (
    <div>
      <h1 style={{textAlign: 'center', marginBottom: '5px'}}>{title} </h1>
      {posts.map(post => ( 
        <TodoItem remove={remove} key={post.id} post={post}/>))}
    </div>
  )
}

export default PostList