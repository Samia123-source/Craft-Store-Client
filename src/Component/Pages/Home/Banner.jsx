
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="w-screen mt-0">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[500px]"
      >
        
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/JW8kSjB7/image.png')",
            }}
          >
            <div className="bg-black/40 w-full h-full flex items-center">
              <div className="max-w-6xl mx-auto px-6 text-white">
                <p className="text-lg mb-3">Handcrafted Collection</p>

                <h1 className="text-5xl md:text-7xl font-serif">
                  Art Made by Hand
                </h1>

                <p className="mt-5 max-w-lg text-lg">
                  Discover beautiful handmade crafts created with passion
                  and creativity.
                </p>

                <button className="btn mt-6">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/DgCyYVxv/image.png')",
            }}
          >
            <div className="bg-black/30 w-full h-full flex items-center">
              <div className="max-w-6xl mx-auto px-6 text-white">
                <p className="text-lg mb-3">Beautiful Ceramics</p>

                <h1 className="text-5xl md:text-7xl font-serif">
                  Crafted With Soul
                </h1>

                <p className="mt-5 max-w-lg">
                  Unique pottery and ceramics for your home.
                </p>

                <button className="btn mt-6">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/XxMxN51S/image.png')",
            }}
          >
            <div className="bg-black/30 w-full h-full flex items-center">
              <div className="max-w-6xl mx-auto px-6 text-white">
                <p className="text-lg mb-3">Beautiful Ceramics</p>

                <h1 className="text-5xl md:text-7xl font-serif">
                  Crafted With Soul
                </h1>

                <p className="mt-5 max-w-lg">
                  Unique pottery and ceramics for your home.
                </p>

                <button className="btn mt-6">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};



export default Banner