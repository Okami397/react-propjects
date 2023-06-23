import React, { useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import classes from './Navbar.module.css'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context/Context'

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();


    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
        // navigate("/login");
    }
  return (
        <div className={classes.myNavbar}>
            <MyButton onClick={logout }>
                Выйти
            </MyButton>
            <div className={classes.myNavbar__links}>
                <Link className={classes.link} to="/about">О сайте</Link>
                <Link className={classes.link} to="/posts">Посты</Link>
            </div>
      </div>
  )
}

export default Navbar
