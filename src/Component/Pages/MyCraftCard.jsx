

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({craft, crafts, setCrafts}) => {
    const {_id, name, category, availability, price, details, photo} = craft;

  const handleDelete = _id => {
    console.log(_id);
    
   Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
})
.then((result) => {
  
  if (result.isConfirmed) {
    
    fetch(`http://localhost:5000/craft/${_id}`,{
      method: 'DELETE'

    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount>0){
          Swal.fire({
        title: "Deleted!",
        text: "Your Item has been deleted.",
        icon: "success"
      });
      const remaining = crafts.filter(craf => craf._id !== _id)
      setCrafts(remaining);
      }
      
    })
  }
   
  })

  } 
  return (
    
    
    <div className="py-6">
      <div className="card card-side shadow-xl bg-[#F5F4F1] text-black ">
  <figure className="mr-4">
    <img className=" h-[300px] w-[400px]"
      src={photo}
      alt="pottery" />
  </figure>
  
    <div className="w-full mt-12 font-bold justify-between flex ">
   <div>
     <h2 className="card-title text-2xl">{name}</h2>
     <h2 className="card-title text-xl font-semibold">{category}</h2>
    <p className="text-xl mt-3 text-green-600 font-bold">BDT {price}</p>
    <p className="text-lg text-red-600">{availability}</p>
    <p className="text-xl text-blue-950">{details}</p>
    
   </div>
    <div className="card-actions justify-end">
      <div className="join join-vertical gap-4 pr-4">
  <Link to={`/craft/${_id}`}>
  <button className="w-24 h-12 text-white font-bold bg-slate-600 rounded-md">View Details</button>
  </Link>
  <Link to= {`/updateCraft/${_id}`}>  
     <button className="w-24 h-12 text-white font-bold bg-teal-700 rounded-md">Edit</button>
  </Link>
  <button 
   onClick={() => handleDelete(_id)}
  className="w-24 h-12 text-white font-bold bg-red-700 rounded-md">Delete</button>
</div>
    </div>
  </div>
  </div>
</div>

  )
}

export default MyCraftCard