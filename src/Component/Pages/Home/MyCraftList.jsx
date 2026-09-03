import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard";


const MyCraftList = () => {
     const loadedcrafts = useLoaderData();
  const[myCrafts, setmyCrafts] = useState(loadedcrafts);
  return (
    <div>
        <h2 className="mt-20 text-2xl text-black font-bold">
            Total Item: {myCrafts.length}
        </h2>
        <div>
            {
                myCrafts.map(myCraft=> <CraftCard key={myCraft._email} myCraft={myCraft} myCrafts={myCrafts} setmyCrafts={setmyCrafts}></CraftCard>)
            }
        </div>
    </div>
  )
}

export default MyCraftList