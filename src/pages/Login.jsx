import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'

const Login = () => {
  return (
    <div className='login-page'>
        <h1>Страница для log in</h1>
        <form className='login__form'>
            <MyInput 
                type="text"
                placeholder="Введите логин">
            </MyInput>
            <MyInput 
                type="password"
                placeholder="Введите пароль">
            </MyInput>
            <MyButton>Enter</MyButton>
        </form>
    </div>
  )
}

export default Login