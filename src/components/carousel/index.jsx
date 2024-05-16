// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

//Props
// Number of Slide

// Carousel => numberOfSlide = 1 => hiển thị 1 thằng
// Carousel => numberOfSlide = 6 => hiển thị 6 thằng

// trước khi hiển thị category phải có danh sách phim
export default function Carousel({
  numberOfSlide,
  category,
  isUseNavigation,
  titles,
}) {
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
    <div className={`carousel ${numberOfSlide > 1 ? "multi-item" : ""}`}>
      {/* Chỉ show title khi và chỉ khi có title => nếu title === null => không show title */}
      {titles && <h1 className="text-white">{titles}</h1>}
      <Swiper
        navigation={isUseNavigation}
        spaceBetween={15}
        slidesPerView={numberOfSlide}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {/* movie => SwiperSlide */}
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.poster_path} alt="" className="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
