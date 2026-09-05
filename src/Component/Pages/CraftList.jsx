import { useLoaderData } from "react-router-dom"
import Navbar from "../Navbar";
import Footer from "../Footer";
import CraftCard from "./CraftCard";
import { useState } from "react";



const CraftList = () => {

  const loadedcrafts = useLoaderData();
   console.log(loadedcrafts);
  const[crafts, setCrafts] = useState(loadedcrafts.crafts);

  return (
   
    <div className="w-full p-5 mt-0 bg-[url('https://i.ibb.co.com/sJWfjD0Y/image.png')]">        
        <h2 className="mt-20 text-2xl text-black font-bold">Total Craft Item Number: {crafts.length}</h2>
       <div className="grid md:grid-cols-2 gap-6 mt-4 ">
         {
           crafts.map(craft => <CraftCard key={craft._id} craft={craft} crafts={crafts} setCrafts={setCrafts}></CraftCard>)
        }
       </div>

     
    </div>
    

 
  )
}

export default CraftList