import React, { useState } from "react";
import './styles/index.css';
import TodoItem from "./components/ToDo/TodoItem";
import PostList from "./components/ToDo/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/ToDo/PostForm";

function App () {
    const [posts, setPost] = useState( [ 
        {   title: 'asdasd',
        isCompleted: false,
        id: '1'
        },
        {   title: 'iashdkjhask',
            isCompleted: false,
            id: '3'
        },
        {   title: 'jalskdlkalkjl',
            isCompleted: false,
            id: '2'
        }
    ] )

const createPost = (newPost) => {
    setPost([...posts, newPost])
} 
const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id))
}


    return (
        <div>
            <PostForm create={createPost}/>
            {posts.length !== 0
                ?  <PostList remove={removePost} posts={posts} title="Список задач"/>
                : <h1 style={{textAlign: 'center'}}>Список пуст</h1>
            }
        </div>
    )
}

export default App;