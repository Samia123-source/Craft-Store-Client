
import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCraft = () => {
   const craft = useLoaderData();
      const {
        _id,
        name,
        category,
        availability,
        price,
        details,
        photo,
        time
    } = craft;



 const handleUpdatedItem = event =>{
     event.preventDefault();
 
     const form = event.target;
 
     const name = form.name.value;
     const category = form.category.value;
     const availability = form.availability.value;
     const price = form.price.value;
     const time = form.time.value;
     const details = form.details.value;
     const photo = form.photo.value; 
      
    
     const updatedCraft = {name, category, availability, price, time, details, photo};
     console.log(updatedCraft);
 
      //send data to the server
      fetch(`http://localhost:5000/craft/${_id}`,{
       method: 'PUT',
       headers: {
         "content-type": 'application/json'
       },
       body: JSON.stringify(updatedCraft)
      })
      .then(res => res.json())
      .then(data => {
       console.log(data);
         if (data.insertedId) {
           Swal.fire({
             title: "Success",
             text: "Craft Updated Successfully",
             icon: "success",
             confirmButtonText: "Cool!"
             
           });
         }
 
 
      })
    
        
    
          }

    


  return (
    <div className=" m-16">
      <div className="min-h-screen p-32">
         <NavLink to='/'><h1 className="font-rancho text-left text-3xl">Back to home</h1></NavLink>
      <div className="bg-[#F4F3F0] p-24 rounded-lg">
            <h2  className="text-4xl text-[#374151] text-center font-cormorantGaramond mb-7">Update Craft:{name}</h2>
            <p className="text-center mb-6 text-lg text-[#1B1A1A] font-raleway">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
   
  <form onSubmit={handleUpdatedItem}>

    {/* form row 1 */}
    <div className="md:flex gap-4 mb-8">
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Item Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='name' defaultValue={name} placeholder="Craft Name" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Category</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
    </div>
    {/* form row 2*/}
    <div className="md:flex gap-4 mb-8">
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Available Status</span>
  </label>
  <label className="input-group">
    
    <input type="text"  name="availability" defaultValue={availability} placeholder="availability" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Price</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
    </div>
    {/* form row 3 */}
    <div className="md:flex gap-4 mb-8">
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Processing Time</span>
  </label>
  <label className="input-group">
    
    <input type="text"  name="time" defaultValue={time}   placeholder="Time" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Details</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
    </div>
    {/* form row 4 */}
    <div className="md:flex gap-4">
      <div className="form-control md:w-full">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Photo</span>
  </label>
  <label className="input-group">
    
    <input type="text"  name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full bg-white text-[#1B1A1A]  mb-8" />
  </label>
</div>     
    </div>
    

    <input type="submit" value="Add Item" className="btn btn-block font-poiretOne bg-[#D2B48C] hover:bg-[#D2B48C] text-2xl text-[#331A15]"  />

  </form>
      </div>
   </div>
     </div>

      
  )
}

export default UpdateCraft
