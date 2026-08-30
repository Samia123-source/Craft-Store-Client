


import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import AddCraftItem from "../Pages/AddCraftItem"
import Root from "../Layout/Root"
import SignIn from "../Pages/SignIn"
import Register from "../Pages/Register"
import CraftList from "../Pages/CraftList"
import UpdateCraft from "../Pages/UpdateCraft"

const Routes = createBrowserRouter([
  
    {
        path:"/",
        element:<Root></Root>,
    
         
        children:[
            {
                path:'/',
                element: <Home></Home>,

            },
            {
                path:'/craftList',
                element:<CraftList></CraftList>,
                loader: () => fetch('http://localhost:5000/craft'),
              
            },
            {
                path: "/addCraft",
                element: <AddCraftItem></AddCraftItem>
            },
            {
                path: "/updateCraft/:id",
                element: <UpdateCraft></UpdateCraft>,
                loader:({params})=> fetch(`http://localhost:5000/craft/${params.id}`)
            },
            {
                path:"/signIn",
                element:<SignIn></SignIn>
            },
            {
                path:"/register",
                element:<Register></Register>

            }
        ]
    }
])
export default Routes