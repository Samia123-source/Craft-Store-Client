
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CraftCard = ({craft}) => {
    const {_id, name, availability, price, details, photo} = craft;

  const handleDelete = id => {
    console.log(_id);
    
   Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
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
      }
    })
  }
   
  })

  } 
  return (
      <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="pottery" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{name}</h2>
    <p className="text-xl">BDT {price}</p>
    <p className="text-2xl">{availability}</p>
    <p className="text-2xl">{details}</p>
    <div className="card-actions justify-end">
      <div className="join join-vertical gap-4">
  <button className="btn btn-active">View Details</button>
  <Link to= {`/updateCraft/${_id}`}>  
     <button className="btn btn-active">Edit</button>
  </Link>
  <button 
   onClick={() => handleDelete(_id)}
  className="btn bg-red-700">Delete</button>
</div>
    </div>
  </div>
</div>
  )
}

export default CraftCard