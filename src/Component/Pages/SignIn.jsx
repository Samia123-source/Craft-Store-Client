
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const SignIn = () => {

  const {signInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in the login page ', location)

  const handleLogIn= e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email, password)

    signInUser(email, password)
    .then(result => {
      console.log(result.user);

      // navigate after login
      navigate(location?.state ? location.state : '/');
     

      const user = {
        email,
       lastLoggedAt: result.user?.metadata?.lastSignInTime
      }
       // update last logged at in the database

       fetch("http://localhost:5000/user",{
        method: "PATCH",
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
       })
    })


    .catch(error =>{
       console.error(error); 

    }
     
    )
    

  }
  const [showPassword, setShowPassword] = useState(false);
  return (
     <div
      className="min-h-screen bg-cover bottom-0  bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/t01ML5f/image.png')",
          
      }}
    >
     
  <div className=" flex flex-col items-center justify-center ">

      <div className="flex flex-col w-1/4 text-xl text-white font-bold">
 
        <h2 className="text-3xl font-bold  mt-16 text-center pt-32 pb-10">Login to your account</h2>
        <form onSubmit={handleLogIn} className="">
          <fieldset className="fieldset w-full place-items-center">
            <label className="text-start justify-self-start ">Email</label>
            <input type="email" className="input w-full my-2 opacity-60" name="email" placeholder="Email" />
            <label className="text-start justify-self-start">Password</label>
            <div className="relative w-full">
              <input type= {showPassword ? 'text':"password"} className="input w-full my-2 opacity-60" name="password" placeholder="Password" />

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
    </div>
   
  )
}

export default SignIn