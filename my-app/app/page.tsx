import Image from "next/image";
import LatestMobiles from "./Home_Components/LatestMobiles";
import HeroSection from "./Home_Components/HeroSection";
import TrendingPage from "./Home_Components/TrendingPage";
import Laptops from "./Home_Components/Laptops";
import Gadgets from "./Home_Components/Gadgets";
import Categorys from "./Home_Components/Categorys";
import LatestNews from "./Home_Components/LatestNews";
export default function Home() {
  return (
    <div className="relative flex flex-col bg-linear-to-b from-blue-50 to-gray-50 min-h-screen justify-top items-center box-border p-2.5 min-w-[200px] gap-4">
      <div className=" grid grid-cols-1 grid-rows-1w-full self-center justify-self-center lg:mt-15 ">
         <HeroSection/>
      </div>
      <div className="">
          <TrendingPage/>
      </div>
      <div>
          <LatestMobiles/>
      </div>
      <div>
          <Laptops/>
      </div>
      <div>
          <Gadgets/>
      </div>
      <div>
          <Categorys/>
      </div>
      <div>
        <LatestNews header_name="Latest News" value="home"/>
      </div>

      
    </div>
  );
}
