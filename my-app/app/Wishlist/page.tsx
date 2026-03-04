import Image from "next/image";
import Link from "next/link";
import { BiBookmarkHeart } from "react-icons/bi";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

const wishlistItems = [
  {
    id: 1,
    name: "Samsung Galaxy S25 Ultra",
    image: "/samimg.avif",
    category: "Mobile",
    price: "$1,249",
    offer: "10% off",
    status: "In Stock",
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    image: "/iphone.png",
    category: "Mobile",
    price: "$1,199",
    offer: "Free delivery",
    status: "Limited Stock",
  },
  {
    id: 3,
    name: "Dell XPS 15",
    image: "/img1l.jpg",
    category: "Laptop",
    price: "$1,699",
    offer: "5% off",
    status: "In Stock",
  },
];

export default function WishlistPage() {
  return (
    <div className="min-h-screen w-full min-w-[200px] bg-gradient-to-b from-slate-50 via-blue-50 to-gray-100 p-3 sm2:p-4 md:p-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 md:gap-5">
        <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-blue-100 p-2">
                <BiBookmarkHeart className="size-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-[1.2em] font-semibold text-gray-900 md:text-[1.5em]">
                  My Wishlist
                </h1>
                <p className="text-[0.86em] text-gray-600 md:text-[0.95em]">
                  {wishlistItems.length} items saved
                </p>
              </div>
            </div>

            <div className="relative w-full md:max-w-72">
              <IoSearchOutline className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search wishlist"
                className="h-10 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-3 text-[0.9em] text-gray-700 outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-3 md:gap-4">
          {wishlistItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm2:p-4 md:flex-row md:items-center"
            >
              <div className="relative h-28 w-full overflow-hidden rounded-lg bg-gray-50 sm2:h-32 md:h-24 md:w-32">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex flex-1 flex-col gap-1">
                <h2 className="text-[0.96em] font-medium text-gray-900 sm2:text-[1.04em]">
                  {item.name}
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-[0.82em] text-gray-600 sm2:text-[0.9em]">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5">
                    {item.category}
                  </span>
                  <span className="font-medium text-gray-900">{item.price}</span>
                  <span className="text-green-700">{item.offer}</span>
                </div>
                <span className="text-[0.8em] text-blue-700 sm2:text-[0.88em]">
                  {item.status}
                </span>
              </div>

              <div className="flex flex-row gap-2 md:flex-col">
                <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 text-[0.86em] font-medium text-white hover:bg-blue-700 sm2:flex-none">
                  <FiShoppingCart className="size-4" />
                  Add to Cart
                </button>
                <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 text-[0.86em] font-medium text-red-700 hover:bg-red-100 sm2:flex-none">
                  <FiTrash2 className="size-4" />
                  Remove
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-dashed border-gray-300 bg-white p-4 text-center text-[0.9em] text-gray-600">
          Looking for more products?
          <Link href="/Mobiles" className="ml-1 font-medium text-blue-600 hover:text-blue-700">
            Explore mobiles
          </Link>
        </section>
      </div>
    </div>
  );
}
