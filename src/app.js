import React, { useState } from "react";
import './styles/index.css';
import TodoItem from "./components/ToDo/TodoItem";
import PostList from "./components/ToDo/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

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

    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            title,
            id: Date.now()
        }
        setPost([...posts, newPost])
        setTitle('')
    }

    return (
        <div>
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Заголовок"/> 
                <MyButton onClick={addNewPost}>Новая задача</MyButton>
            </form>
            <PostList posts={posts} title="Список задач"/>
        </div>
        
    )
}

export default App;