import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
    const {register, handleSubmit} = useForm()

    function onSubmitFunc(data){
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmitFunc)}>
            <input placeholder='Login' {...register("Login")}/>
            <input placeholder='Senha' {...register("Senha")}/>
        </form>
    )
}

export default Form;
