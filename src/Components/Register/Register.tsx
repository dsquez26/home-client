import { useForm } from 'react-hook-form'
import './Register.css'




const Register = () => {
    return (
        <div className='register-form-ctn'>
            <p>
                New? Register Here!
            </p>
            <form className='register-form'>
                <input type='input' placeholder='First Name'></input>
                <input type='input' placeholder='Last Name'></input>
                <input type='input' placeholder='Email'></input>
                <input type='input' placeholder='Phone Number'></input>
                <input type='input' placeholder='Employee ID'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Register
