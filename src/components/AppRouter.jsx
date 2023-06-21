import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import Navbar from "../components/AppRouter"


const AppRouter = () => {
     return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
     )     
}

export default AppRouter