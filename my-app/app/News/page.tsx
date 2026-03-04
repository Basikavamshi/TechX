import Image from "next/image";
import img1l from "../../public/img1l.jpg";
import img2l from "../../public/img2l.jpg";
import img3l from "../../public/img3l.jpg";
import Related_News from "./Shared_Components/Related_News";
import Article from "./Shared_Components/Article";
import Hot_News from "../Latest_News/Components/Hot_News";
export default function NewsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-100 px-0 py-0 md:py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col lg:flex-row gap-8">
       
          <Article />

        <div className="hidden md:flex w-full h-full m-auto p-4 md:p-0 justify-center">
          <Hot_News />
        </div>
        
      </div>
      <div>
        <Related_News />
      </div>

    </div>
  );
}
