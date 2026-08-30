import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom"; 


import './index.css'
import App from './App.jsx'
import AddCraftItem from './Component/Pages/AddCraftItem.jsx';
import UpdateCraft from './Component/Pages/UpdateCraft.jsx';
import Routes from './Component/Routes/Routes.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={Routes} />
  </StrictMode>,
)
