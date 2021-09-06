import { useForm } from 'react-hook-form'
// import { useState, useEffect } from 'react'

import './Register.css'

interface RegisterFormData  {
    firstName: String;
    lastName: String;
    email: String;
    phoneNumber: Number;
    employeeID: Number
}


const Register = () => {
    const { register, handleSubmit } = useForm<RegisterFormData>();


    const formSubmitted = handleSubmit(data => console.log('data!', data)) 

    return (
        <div className='register-form-ctn'>
            <p>
                New? Register Here!
            </p>
            <form className='register-form' onSubmit={ formSubmitted }>
                <input type='input' placeholder='First Name'{...register ("firstName", {required: true, min: 2, maxLength: 16})} />
                <input type='input' placeholder='Last Name'{...register ("lastName", {required: true, min: 2, maxLength: 16})} />
                <input type='input' placeholder='Email'{...register ("email", {required: true, min: 2, maxLength: 16})} />
                <input type='input' placeholder='Phone Number'{...register ("phoneNumber", {required: true, min: 2, maxLength: 16})} />
                <input type='input' placeholder='Employee ID'{...register ("employeeID", {required: true, min: 2, maxLength: 16})} />
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Register
