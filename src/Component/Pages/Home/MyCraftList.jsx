import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard";
import MyCraftCard from "../MyCraftCard";


const MyCraftList = () => {
     const loadedmyCrafts = useLoaderData();

  const[myCrafts, setmyCrafts] = useState(loadedmyCrafts);
  console.log(myCrafts);
  return (
    <div className="w-full p-5 mt-0 bg-[url('https://i.ibb.co.com/sJWfjD0Y/image.png')]">
        <h2 className="mt-20 text-2xl text-black font-bold">
            Total Item: {myCrafts.length}
        </h2>
        <div>
            {
                myCrafts.map(myCraft=> <MyCraftCard key={myCraft._id} craft={myCraft} crafts={myCrafts} setCrafts={setmyCrafts}></MyCraftCard>)
            }
        </div>
    </div>
  )
}

export default MyCraftList