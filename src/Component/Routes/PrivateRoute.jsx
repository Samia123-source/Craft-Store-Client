import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation(); //to capture the location where the user wanted to go before login
    console.log(location);

   if(loading){
      return <span className="loading loading-spinner loading-lg"></span>
   }
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to= "/signIn"></Navigate>
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute