import React from "react";
import './index.css';
import TodoItem from "./components/ToDo/TodoItem";


const todos = [
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
]

function App () {
    return (
        <div>
            {todos.map(todo => ( 
            <TodoItem key={todo.id} todo={todo}/>
            )
                )}
        </div>
    )
}

export default App;