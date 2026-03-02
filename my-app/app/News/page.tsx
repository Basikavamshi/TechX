import Image from "next/image";
import img1l from "../../public/img1l.jpg";
import img2l from "../../public/img2l.jpg";
import img3l from "../../public/img3l.jpg";
import News from "../Latest_News/Components/News";
import Hot_News from "../Latest_News/Components/Hot_News";
export default function NewsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-gray-100 px-4 py-8 md:py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col lg:flex-row gap-8">
        <article className="h-max rounded-[0.4em] border border-gray-200 bg-white p-5 shadow-sm md:p-8">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
              Technology
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              March 2, 2026
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              5 min read
            </span>
          </div>

          <h1 className="text-2xl font-bold leading-tight text-gray-900 md:text-4xl">
            AI-Powered Devices Are Reshaping Everyday Consumer Tech
          </h1>
          <h2 className="mt-3 text-base font-medium text-gray-600 md:text-xl">
            New launches highlight faster on-device intelligence, better
            privacy, and smarter battery usage.
          </h2>

          <div className="relative m-auto mt-6 h-[240px] w-full  overflow-hidden rounded-[0.4em] sm:h-[320px] md:h-[420px]">
            <Image
              src={img2l}
              alt="News thumbnail"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-gray-700 md:text-[1.05rem]">
            <p>
              Device makers are now pushing AI features directly to phones,
              wearables, and laptops, reducing cloud dependency for everyday
              tasks. This shift improves responsiveness and helps protect user
              data by processing more requests locally.
            </p>
            <p>
              Analysts say the biggest impact is practical: better camera
              optimization, faster voice controls, and adaptive performance
              tuning based on usage patterns. Consumers may not notice the AI
              branding, but they do notice smoother performance and battery
              stability.
            </p>
            <p>
              For developers and product teams, the challenge is balancing
              powerful features with transparent controls. As AI becomes a
              default layer in modern devices, clear user settings and
              measurable reliability will define which brands lead.
            </p>
          </div>
        </article>
        <div className="flex w-full h-full">
          <Hot_News />
        </div>
        

        
      </div>
    </div>
  );
}
