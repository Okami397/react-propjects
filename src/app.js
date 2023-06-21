import React from "react";
// import AppRouter from "./components/AppRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/UI/navbar/Navbar'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'

function App () {

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

export default App;