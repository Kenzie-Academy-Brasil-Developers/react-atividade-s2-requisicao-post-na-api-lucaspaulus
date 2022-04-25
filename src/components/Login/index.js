import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import * as S from './style.js';

import Display from '../Display/index.js';
function Login() {
    const {register, handleSubmit} = useForm()

    const [msg, setMsg] = useState("")

    const userValid = {
        username: "kenzinho",
        password: 1234
    }
    
    function onSubmitFunc(data){
 
        axios
            .post("https://kenzieshop.herokuapp.com/sessions/", data)
            .then((response)=> setMsg("Login Aceito"))
            .catch((err)=> setMsg("Login Recusado"))
         
    }



    return(
        <S.Form onSubmit={handleSubmit(onSubmitFunc)}>
            <S.Form__Container>
                <input placeholder='Nome de Usuário' {...register("username")}/>
                <input placeholder='Senha' {...register("password")}/>
            </S.Form__Container>
            
            <button>Login</button>

            <Display statusMsg={msg}/>
        </S.Form>
    )
}

export default Login;
