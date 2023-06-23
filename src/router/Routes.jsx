import About from '../pages/About'
import Posts from '../pages/Posts'
import PostPage from '../pages/PostIdPage'
import Login from '../pages/Login'
import { useLocation } from 'react-router-dom'

export const privateRoutes = [
    {path: "/about", element: <About/>, exact: true},
    {path: "/posts", element: <Posts/>, exact: true},
    {path: "/posts/:id", element: <PostPage/>, exact: true}
]

export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true}
]