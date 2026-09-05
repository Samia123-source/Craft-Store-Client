import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CraftCard from './CraftCard';
import MyCraftCard from './MyCraftCard';
import { Link, NavLink, useLoaderData } from "react-router-dom"

const Categories = () => {
    const loadedCategory = useLoaderData();

  const[Category, setCategory] = useState(loadedCategory);
    
  return (
    <div className="w-full p-5 mt-0 bg-[url('https://i.ibb.co.com/sJWfjD0Y/image.png')]">
        <div className='mt-24'>
           {
                Category.map(Category=> <CraftCard key={Category._id} craft={Category} crafts={Category} setCrafts={setCategory}></CraftCard>)
            }
        </div>
    </div>
  )
}

export default Categories