import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const Crafts = ({craft}) => {

    const {_id, name, availability, price, details, photo} = craft;
  return (
    <div className="card card-compact bg-white text-blue-950 w-80 object-contain shadow-xl">
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      ></Swiper>
        <SwiperSlide>
              <figure>
              <img
                  src={photo}
                  alt="Shoes" />
          </figure>
          <div className="card-body text-blue-950 font-bold">
              <h2 className="card-title">{name}</h2>
              <p className="text-lg">{price} BDT</p>
              <NavLink to={`/craft/${_id}`}>
                  <div className="card-actions justify-start">
                      <button className="btn btn-primary">View Details</button>
                  </div></NavLink>
          </div>
        </SwiperSlide>
      </div>
  )
}

export default Crafts