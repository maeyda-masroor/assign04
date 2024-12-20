import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3   gap-5 overflow-x-hidden overflow-y-auto">
    <div className="bg-purple-400 col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Header</div>
    <div className="hidden lg:block bg-green-400 row-span-2 text-[36px]  font-bold text-center content-center border-2 border-white">Sidebar</div>
    <div className="bg-blue-400  col-span-3 lg:col-span-2 lg:row-span-1 sm:col-span-3 md:col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Content-1</div>
    <div className="bg-yellow-400  col-span-3 lg:col-span-1 sm:col-span-3 md:col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Content-2</div>
    <div className="bg-orange-400 col-span-3 lg:col-span-1 sm:col-span-3 md:col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Content-3</div>
    <div className="bg-pink-400 col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Footer</div>
  </div>

    );
}
