import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'


const AddCraftItem = () => {

   const handleAddItem = event =>{
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const category = form.category.value;
    const availability = form.availability.value;
    const price = form.price.value;
    const time = form.time.value;
    const details = form.details.value;
    const photo = form.photo.value; 
     
   
    const newCraft = {name, category, availability, price, time, details, photo};
    console.log(newCraft);

     //send data to the server
     fetch('http://localhost:5000/craft',{
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(newCraft)
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Craft Added Successfully",
            icon: "success",
            confirmButtonText: "Cool!"
            
          });
        }


     })

   }
  return (
     <div
      className="min-h-screen bg-cover w-full mb-0  "
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/QjM9xr2m/image.png')",
          
      }}
    >
     <div className="min-h-screen p-32">         
      <div className=" bg-white/20 backdrop-blur-md 
                  border border-white/40 shadow-xl p-12 rounded-lg">
            <h2  className="text-4xl text-[#374151] text-center font-cormorantGaramond font-bold mb-7">Add Art and Craft</h2>
            <p className="text-center mb-6 text-lg text-[#1B1A1A] font-raleway font-bold">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
   
  <form onSubmit={handleAddItem}>

    {/* form row 1 */}
    <div className="md:flex gap-4 mb-8">
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Item Name</span>
  </label>
  <label className="input-group">
    
    <input type="text"  name="name" placeholder="Coffee Name" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Category</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
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
    
    <input type="text"  name="availability" placeholder="availability" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Price</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="price" placeholder="Price" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
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
    
    <input type="text"  name="time" placeholder="Time" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
  </label>
</div>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text text-[#1B1A1A] font-semibold text-xl">Details</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full bg-white text-[#1B1A1A] " />
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
    
    <input type="text"  name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full bg-white text-[#1B1A1A]  mb-8" />
  </label>
</div>     
    </div>
    

    <input type="submit" value="Add Item" className="btn btn-block font-poiretOn font-bold bg-[#775d4d] hover:bg-[#ad7f6d] text-2xl text-white"  />

  </form>
      </div>
   </div>
   </div>
  )
}

export default AddCraftItem