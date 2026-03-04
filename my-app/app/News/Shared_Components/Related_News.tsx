"use client";

import Image from "next/image";
import { useRef } from "react";

const relatedNewsItems = [
  {
    id: 1,
    title: "Smartphone AI Chips Now Compete with Laptop-Class Performance",
    date: "March 1, 2026",
    category: "Mobile",
    image: "/img1l.jpg",
  },
  {
    id: 2,
    title: "Battery Optimization Models Extend Daily Use in New Flagships",
    date: "February 28, 2026",
    category: "Hardware",
    image: "/img2l.jpg",
  },
  {
    id: 3,
    title: "On-Device Assistants Gain Better Privacy with Local Inference",
    date: "February 27, 2026",
    category: "AI",
    image: "/img3l.jpg",
  },
  {
    id: 4,
    title: "Wearables Add Real-Time Health Summaries Powered by Tiny Models",
    date: "February 26, 2026",
    category: "Wearables",
    image: "/img1l.jpg",
  },
];

function Related_News() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="mx-auto mt-4 w-full max-w-5xl  p-2 pt-0 box-border">
      <div className="mb-4 flex items-center justify-between">
        <div className='flex flex-row items-center gap-1 sm2:gap-2'>
                <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                </svg>
                <span className='text-[1em] sm2:text-[1.1em] md2:text-[1.3em]'>Related News</span>
       </div>
        <div className=" items-center gap-2 hidden md:flex">
          <span className="hidden text-sm font-medium text-gray-500 sm:inline">Swipe to explore</span>
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll related news left"
            className="h-9 w-9 rounded-full border border-gray-300 bg-white text-lg text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll related news right"
            className="h-9 w-9 rounded-full border border-gray-300 bg-white text-lg text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            {">"}
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-3 sm:gap-5">
        {relatedNewsItems.map((item) => (
          <article
            key={item.id}
            className="group min-w-[260px] max-w-[260px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:min-w-[300px] sm:max-w-[300px]"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2 text-xs">
                <span className="rounded-full bg-red-50 px-2.5 py-1 font-semibold text-red-700">
                  {item.category}
                </span>
                <span className="text-gray-500">{item.date}</span>
              </div>
              <h4 className="text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                {item.title}
              </h4>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Related_News;
