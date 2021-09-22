import { useForm } from 'react-hook-form';
import { FormData } from '../../shared/interfaces';

import "./Login.css"


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const formSubmitted = handleSubmit(data => console.log(data));
  console.log(errors, "error occured");

  return (
    <form className="login-box" onSubmit={formSubmitted}>
      <input type="text" placeholder="User Name" {...register("userName", { required: true, min: 6, maxLength: 100 })} />
      {errors.userName && "User Name is Required"}
      <input type="text" placeholder="Password" {...register("password", { required: true, min: 6, maxLength: 80 })} />
      {errors.password && "Password is Required"}
      <input type="submit" />
    </form>
  );
}


export default Login;