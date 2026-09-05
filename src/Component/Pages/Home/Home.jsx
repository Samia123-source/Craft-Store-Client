import { Link, NavLink, useLoaderData } from "react-router-dom"
import Footer from "../../Footer"
import Navbar from "../../Navbar"
import Banner from "./Banner"
import CraftCard from "../CraftCard"
import Crafts from "./Crafts"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CategoryCard from "../CategoryCard"


const Home = () => {
  const alldata = useLoaderData();
  const {crafts,category} = alldata;

  return (
    <div>
   
        
        <Banner></Banner>,
        <div className="text-center">
       <p className="font-cormorantGaramond font-bold text-black text-2xl">Craft Item Section</p>
        <h2 className="text-5xl font-cormorantGaramond font-bold text-black mb-12">High Quality Porcelain/Ceramics</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4 ml-12">
              
          {
            crafts.slice(0,4).map(craft => <SwiperSlide key={craft._id}><Crafts craft={craft}></Crafts></SwiperSlide>)
          }
        </div>
        <NavLink to='/craftList'>
        <div>
          <button className="btn btn-primary ml-12">View More</button>
        </div>
        </NavLink>

      <div className="px-16   ">
        <h2 className="text-6xl h-24 py-4 text-black font-bold text-center my-14 bg-gray-400 rounded-md">Craft Categories Section</h2>
      </div>


   <div className="flex flex-col gap-6 px-8 bg-[#E6E6FA] ">
  {
  category.map((category, index) => (
    <div
      key={category._id}
      className={` ${
        index % 2 === 0 ? "self-start" : "self-end"
      }`}
    ><Link to={`/categorycraft/${category.name}`}>
      <CategoryCard category={category}></CategoryCard>
      </Link>
    </div>
  ))}
</div>
    </div>
  )
}

export default Home