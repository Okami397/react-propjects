import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context/Context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div className='login-page'>
        <h1>Страница для log in</h1>
        <form className='login__form' onSubmit={login}>
            <MyInput 
                type="text"
                placeholder="Введите логин">
            </MyInput>
            <MyInput 
                type="password"
                placeholder="Введите пароль">
            </MyInput>
            <MyButton style={{width: '15rem'}}>Enter</MyButton>
        </form>
    </div>
  )
}

export default Login