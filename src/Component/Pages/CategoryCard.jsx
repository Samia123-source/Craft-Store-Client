
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CategoryCard = ({category}) => {
    const { name, image, details} = category;

 
   
  

  
  return (
    
    
    <div className="py-6 ">
     <div className="card bg-white  text-black font-bold  shadow-xl  h-[600px] w-[700px]">
 <div>
   <figure className="h-full bg-cover bg-center rounded-xl">
    <img className="h-[600px] w-[700px]"
      src={image} 
      alt="Shoes" />
  </figure>
 </div>
  <div className="card-body text-white absolute mt-80 bg-black/5 backdrop-blur-sm 
                  border border-black/10">
    <h2 className="card-title text-3xl">{name}</h2>
    <p className="text-xl">{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-[#E6E6FA] ">View Details</button>
    </div>
  </div>
</div>
</div>

  )
}

export default CategoryCard