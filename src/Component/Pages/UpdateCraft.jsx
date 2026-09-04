
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
        email, 
        username,
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
<div
      className="min-h-screen bg-cover bottom-0  bg-center"
      
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/QjM9xr2m/image.png')",
          
      }}
    >
    <div className=" m-16">
      <div className="  min-h-screen p-32">
         <NavLink to='/'><h1 className="font-rancho text-left text-3xl">Back to home</h1></NavLink>
      <div className="bg-white/20 backdrop-blur-sm 
                  border border-white/40 shadow-xl p-24 rounded-lg">
            <h2  className="text-4xl text-[#374151] text-center font-cormorantGaramond mb-7">Update Craft:{name}</h2>
            <p className="text-center mb-6 text-lg text-[#1B1A1A] font-raleway">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
   
  <form onSubmit={handleUpdatedItem}>
    {/* form row 1*/}
     <div className="md:flex gap-4 mb-8">
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Item Name</span>
  </label>
  <label className="input-group text-black text-lg font-bold">
    
    <input type="text"  name="name" placeholder="Craft Name" defaultValue={name} className="input input-bordered w-full bg-white  " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Category</span>
  </label>
  <label className="input-group text-black text-lg font-bold">
   
    <input type="text" name="category" placeholder="Category" defaultValue={category} className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
    </div>
    {/* form row 2*/}
    <div className="md:flex gap-4 mb-8">
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Available Status</span>
  </label>
  <label className="input-group text-black text-lg font-bold">
    
    <input type="text"  name="availability" placeholder="availability" defaultValue={availability} className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Price</span>
  </label>
  <label className="input-group text-black text-lg font-bold">
   
    <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
    </div>

    {/* form row 3 */}
    <div className="md:flex gap-4 mb-8">
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Processing Time</span>
  </label>
  <label className="input-group text-black text-lg font-bold">
    
    <input type="text"  name="time" placeholder="Time" defaultValue={time} className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Details</span>
  </label>
  <label className="input-group text-black text-lg font-bold">
   
    <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
    </div>
    {/* form row 4 */}
    <div className="md:flex gap-4 mb-8">
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">User Name</span>
  </label>
  <label className="input-group text-black text-lg font-bold">
    
    <input type="text"  name="username" placeholder="user Name" defaultValue={username} className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label text-black text-lg font-bold">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">User Email</span>
  </label>
  <label className="input-group text-black text-lg font-bold">
   
    <input type="text" name="email" placeholder="Enter Email" defaultValue={email} className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
    </div>
    <div className="md:flex gap-4">
      <div className="form-control md:w-full">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Photo</span>
  </label>
  <label className="input-group text-black text-lg font-bold">
    
    <input type="text"  name="photo" placeholder="Enter Photo URL" defaultValue={photo} className="input input-bordered w-full bg-white text-[#1B1A1A]  mb-8" />
  </label>
</div>     
    </div>
    

    <input type="submit" value="Add Item" className="btn btn-block font-poiretOn font-bold bg-[#775d4d] hover:bg-[#ad7f6d] text-2xl text-white"  />

  </form>
      </div>
   </div>
     </div>
</div>
      
  )
}

export default UpdateCraft
