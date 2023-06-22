import React from "react";
// import AppRouter from "./components/AppRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/UI/navbar/Navbar'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import PostPage from './pages/PostIdPage'
import { privateRoutes, publicRoutes } from './router/Routes'

function App () {
    const isAuth = false;
     
    return (
        <BrowserRouter>
            {isAuth
                ?   (<Routes>
                        <Route path="/" element={<Navbar/>}/>
                        {/* <Route path="/about" element={<About/>}/>
                        <Route exact path="/posts" element={<Posts/>}/>
                        <Route exact path="/posts/:id" element={<PostPage/>}/>
                        <Route path="*" element={<Error/>}/> */}
                        {privateRoutes.map(route => 
                        <Route
                            element={route.element} 
                            path={route.path} 
                            exact={route.exact}
                        />
                        )}
                        
                    </Routes>)
                : (<Routes>
                        {publicRoutes.map(route => 
                             <Route
                                element={route.element} 
                                path={route.path} 
                                exact={route.exact}
                            />
                        )}
                    </Routes>)
}
            
        </BrowserRouter>
    )
}

export default App;