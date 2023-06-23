import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/UI/navbar/Navbar'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import PostPage from './pages/PostIdPage'
import { privateRoutes, publicRoutes } from './router/Routes'
import { AuthContext } from "./context/Context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
        setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Router>
        {isAuth ? (
          <>
            <Navbar/>
            <Routes>
              {privateRoutes.map((route, index) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
                />
              ))}
            </Routes>
          </>
        ) : (
          <Routes>
            {publicRoutes.map((route, index) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
                exact={route.exact}
              />
            ))}
          </Routes>
        )}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
