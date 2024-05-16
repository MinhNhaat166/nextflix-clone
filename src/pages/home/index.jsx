import Carousel from "../../components/carousel";
import Header from "../../components/header";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel numberOfSlide={1} category={"Trending"} isUseNavigation={true} />
      <Carousel numberOfSlide={6} category={"Horror"} titles={"Horror Movies"}/>
      <Carousel numberOfSlide={6} category={"Comedy"} />
    </div>
  );
}

export default HomePage;
