// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

//Props
// Number of Slide

// Carousel => numberOfSlide = 1 => hiển thị 1 thằng
// Carousel => numberOfSlide = 6 => hiển thị 6 thằng

// trước khi hiển thị category phải có danh sách phim
export default function Carousel({ numberOfSlide, category }) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const response = await axios.get(
      "https://6628fc7754afcabd0737b9e2.mockapi.io/Movies"
    );
    console.log(response.data);
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={15}
        slidesPerView={numberOfSlide}
        autoplay={{
          
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        {/* movie => SwiperSlide */}
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
