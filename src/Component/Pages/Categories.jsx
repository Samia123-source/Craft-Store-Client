import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CraftCard from './CraftCard';

const Categories = () => {
    const {category} = useParams();

    const[crafts, setCrafts] = useState([]);


    useEffect(() =>{
        fetch("http://localhost:5000/categorycraft/:category")
        .then(res => res.json())
        .then(data => setCrafts(data));
    },[]);

    const filteredCrafts = crafts.filter(craft => craft.subcategory_Name == category)
    
  return (
    <div className="w-full p-5 mt-0 bg-[url('https://i.ibb.co.com/sJWfjD0Y/image.png')]">
        <h2 className= 'text-black text-4xl mt-24'>Categories:{category.length}</h2>
        {
          filteredCrafts.map(craft => <CraftCard key={craft._category} craft={craft}></CraftCard>)
        }
    </div>
  )
}

export default Categories