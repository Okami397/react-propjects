import React from 'react'
import TodoItem from './TodoItem'
import { TransitionGroup, CSSTransition  } from 'react-transition-group'

const PostList = ({posts, title, remove}) => {
  return (
    <div>
      <h1 style={{textAlign: 'center', marginBottom: '5px'}}>{title} </h1>
      <TransitionGroup>
        {posts.map(post => 
        <CSSTransition
        key={post.id}
        timeout={500}
        classNames="post"
        >
          <TodoItem remove={remove} post={post}/>
        </CSSTransition>
         )}
      </TransitionGroup>
    </div>
  )
}

export default PostList