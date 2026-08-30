
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignIn = () => {

  const handleLogIn= e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email, password)
    

  }
  const [showPassword, setShowPassword] = useState(false);
  return (
  <div className=" flex flex-col items-center justify-center">

      <div className="flex flex-col w-1/4">

        <h2 className="text-3xl text-center pt-32 pb-10">Login to your account</h2>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset w-full place-items-center">
            <label className="text-start justify-self-start">Email</label>
            <input type="email" className="input w-full mb-2" name="email" placeholder="Email" />
            <label className="text-start justify-self-start">Password</label>
            <div className="relative w-full">
              <input type= {showPassword ? 'text':"password"} className="input w-full" name="password" placeholder="Password" />

              <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() =>
                 setShowPassword(!showPassword)}>
                 {
                  showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                 }
                  </span>
            </div>
            
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </fieldset>
        </form>
        <p className="text-center mt-4 mb-16">Don't have an account?<Link className='text-blue-600 font-bold ml-2' to={'/register'}>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn