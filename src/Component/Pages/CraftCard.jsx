
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CraftCard = ({craft, crafts, setCrafts}) => {
    const {_id, name, category, availability, price, details, photo} = craft;

 
   
  

  
  return (
    
    
    <div className="py-6">
      <div className="card card-side shadow-xl bg-[#F5F4F1] text-black ">
  <figure className="mr-4">
    <img className="h-[300px] w-[400px]"
      src={photo}
      alt="pottery" />
  </figure>
  
    <div className="w-full mt-8 font-bold  ">
   <div>
     <h2 className="card-title text-2xl">{name}</h2>
     <h2 className="card-title text-xl font-semibold">{category}</h2>
    <p className="text-xl mt-3 text-green-600 font-bold">BDT {price}</p>
    <p className="text-lg text-red-600">{availability}</p>
    <p className="text-xl text-blue-950">{details}</p>
    
   </div>
    <div className="card-actions justify-end ">
      <div className="join join-vertical gap-4 pr-4 mt-6">
  <Link to={`/craft/${_id}`}>
  <button className="w-24 h-12 text-white font-bold bg-slate-600 rounded-md">View Details</button>
  </Link>
  
 
</div>
    </div>
  </div>
  </div>
</div>

  )
}

export default CraftCard