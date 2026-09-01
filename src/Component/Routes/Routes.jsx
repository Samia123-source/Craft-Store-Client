


import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import AddCraftItem from "../Pages/AddCraftItem"
import Root from "../Layout/Root"
import SignIn from "../Pages/SignIn"
import Register from "../Pages/Register"
import CraftList from "../Pages/CraftList"
import UpdateCraft from "../Pages/UpdateCraft"
import CraftDetails from "../Pages/CraftDetails"
import Users from "../Users"
import PrivateRoute from "./PrivateRoute"


const Routes = createBrowserRouter([
  
    {
        path:"/",
        element:<Root></Root>,
    
         
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craft')

            },
            {
                path:'/craftList',
                element:<PrivateRoute><CraftList></CraftList></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/craft'),
              
            },
            {
                path: "/addCraft",
                element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
            },
           
            {
                path: "/updateCraft/:id",
                element: <PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/craft/${params.id}`)
            },
            {
                path: '/craft/:id',
                element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
            },
            {
                path:"/signIn",
                element:<SignIn></SignIn>
            },
            {
                path:"/register",
                element:<Register></Register>

            },
            {
                path: '/users',
                element:<Users></Users>,
                loader: () => fetch('http://localhost:5000/user')
            },
          

        ]
    }
])
export default Routes