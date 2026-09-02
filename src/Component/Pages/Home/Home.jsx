import { NavLink, useLoaderData } from "react-router-dom"
import Footer from "../../Footer"
import Navbar from "../../Navbar"
import Banner from "./Banner"
import CraftCard from "../CraftCard"
import Crafts from "./Crafts"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const Home = () => {
  const crafts = useLoaderData();
  return (
    <div>
   
        
        <Banner></Banner>,
        <div className="text-center">
       <p className="font-cormorantGaramond font-bold text-black text-2xl">Craft Item Section</p>
        <h2 className="text-5xl font-cormorantGaramond font-bold text-black mb-12">High Quality Porcelain/Ceramics</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4 ml-12">
              
          {
            crafts.slice(0,6).map(craft => <SwiperSlide key={craft._id}><Crafts  craft={craft}></Crafts></SwiperSlide>)
          }
        </div>
        <NavLink to='/craftList'>
        <div>
          <button className="btn btn-primary">View More</button>
        </div>
        </NavLink>

      <div>
        <h2 className="text-5xl text-black font-bold text-center mt-10">Craft Categories Section</h2>
      </div>
   
    </div>
  )
}

export default Home