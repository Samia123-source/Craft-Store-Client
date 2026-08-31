import { useLoaderData } from "react-router-dom"
import Navbar from "../Navbar";
import Footer from "../Footer";
import CraftCard from "./CraftCard";
import { useState } from "react";



const CraftList = () => {

  const loadedcrafts = useLoaderData();
  const[crafts, setCrafts] = useState(loadedcrafts);

  return (
   
    <div className="m-10  rounded-md">        
        <h2>craftList:{crafts.length}</h2>
       <div className="grid md:grid-cols-2 gap-4 ">
         {
           crafts.map(craft => <CraftCard key={craft._id} craft={craft} crafts={crafts} setCrafts={setCrafts}></CraftCard>)
        }
       </div>
    </div>
    

 
  )
}

export default CraftList