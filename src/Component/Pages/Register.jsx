import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
  const [registerError, setRegisterError ] = useState('');
  const[success, setSuccess] = useState('');

   const {createUser} = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
   
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password')
    console.log(name, photo, email, password);


      createUser(email, password)      
      .then(result => {
        console.log(result.user);

              
       

        // reset error
        setRegisterError('');
        setSuccess('');
        // new user has been created

        const createdAt = result.user?.metadata?.creationTime;
        
        const user ={email, createdAt: createdAt};
        fetch('http://localhost:5000/user',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
           if (data.insertedId) {
                    Swal.fire({
                      title: "Success",
                      text: "User Added Successfuly",
                      icon: "success",
                      confirmButtonText: "Cool!"
                      
                    });
                  }
        })

      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);

      })
  }
  return (
      <div className=" flex flex-col items-center justify-center">
    
      <div className="flex flex-col w-1/4">

    <h2 className="text-3xl text-center pt-32 pb-10">Register your account</h2>
         <form onSubmit={handleRegister}  className="w-full">
      <fieldset className="fieldset w-full place-items-center">
          <label className="text-start justify-self-start">You Name</label>
          <input type="text" className="input w-full mb-2" name='name' required placeholder="Nmae" />
          <label className="text-start justify-self-start">Photo URL</label>
          <input type="text" className="input w-full mb-2" name="photo" required placeholder="Photo" />
          <label className="text-start justify-self-start">Email</label>
          <input type="email" className="input w-full mb-2" name="email" required placeholder="Email" />
          <label className="text-start justify-self-start">Password</label>
          <input type="password" className="input w-full" name="password" required  placeholder="Password" />
          <div className="flex gap-2 justify-self-start"> <input type="checkbox" defaultChecked className="checkbox size-3"/> <p>Accept term and conditions</p></div>
          <button className="btn btn-neutral mt-4 w-full">Register</button>
        </fieldset>
    </form>
        {
          registerError && <p className="text-red-700">{registerError}</p>
        }

      
   
    <p className="text-center mt-4 mb-16 ">Do you not have an account? <Link className="text-blue-600 font-bold ml-2" to='/login'>Login</Link> </p>

    </div>
    </div>
     
  )
}

export default Register