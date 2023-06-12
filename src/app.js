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

    const addNewPost = () => {

    }

    return (
        <div>
            <form>
                <MyInput type="text" placeholder="Заголовок"/> 
                <MyButton onClick={addNewPost}>Новая задача</MyButton>
            </form>
            <PostList posts={posts} title="Список задач"/>
        </div>
        
    )
}

export default App;