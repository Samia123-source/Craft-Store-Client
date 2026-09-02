import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDelete = id =>{

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
            if(result.isConfirmed){
                 // make sure user is confirmed to delete
        fetch(`http://localhost:5000/user/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount >0){
                console.log('deleted Successfully');
                // remove the user from UI
             const remainingUsers = users.filter(user => user._id !== id);
             setUsers(remainingUsers);
              
            }
        })
    }
})
        
       
    }

  return (
    <div className=" text-white font-bold text-4xl bg-[url('https://i.ibb.co.com/hxKMLnwc/image.png')]">
      
              
        <div className="overflow-x-auto px-6">
           <h2 className="m-24 border bg-slate-100  text-blue-950">Total Users:{loadedUsers.length}</h2>
  <div className="card  bg-yellow-700/20 backdrop-blur-md 
                  border border-white/40 shadow-xl">
    <table className="table mt-16 text-white">
    {/* head */}
    <thead className="text-3xl font-bold text-black">
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="text-lg">
      {/* row 1 */}
     {
        loadedUsers.map(user =>  <tr key={user._id}>
        <th>1</th>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td></td>
        <td>
            <button onClick={() => handleDelete(user._id)} className=" ">X</button>
        </td>

      </tr>
    )
     }
      
    </tbody>
  </table>
  </div>
</div>
    </div>
  )
}

export default Users