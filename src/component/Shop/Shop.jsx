import React from "react";
import featuredData from "../../api/featuredData";
import Productcard from "../Productcard/Productcard";
import { featuredData2 } from "../../api/featuredData";

function Shop() {
  return (
    <>
      {/*Hero section start */}
      <div className="2xl:container mx-auto bg-[#F2F7F2]">
        <div className="w-[98%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2014.44.59_b8ab9385.jpg?updatedAt=1724837208241"
              alt="leaf"
              className="h-60 rotate-[310deg] "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
              Shop
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2014.44.59_d430be2e.jpg?updatedAt=1724837145164"
              alt="flower"
              className="h-48 rotate-center"
            />
          </div>
        </div>
      </div>
      {/*Hero section end */}

      {/*Head section start */}
      <div className="hidden md:block 2xl:container mx-auto mt-6">
        <div className="w-[85%] mx-auto border border-solid border-slate-300 p-2">
          <div className="flex justify-between items-center">
            <p className="font-[Raleway] text-[#000]">All</p>
            <p className="font-[Raleway] text-[#6F736E]">House Plants</p>
            <p className="font-[Raleway] text-[#6F736E]">Potter Plants</p>
            <p className="font-[Raleway] text-[#6F736E]">Seeds</p>
            <p className="font-[Raleway] text-[#6F736E]">Smaller Plants</p>
            <p className="font-[Raleway] text-[#6F736E]">Succulents</p>
            <p className="font-[Raleway] text-[#6F736E]">Terrariums</p>
          </div>
        </div>
      </div>
      {/*Head section end */}

      {/*pdtcard start*/}
      <div className="2xl:container mx-auto bg-[#FFFF] my-4">
        <div className="w-[90%] mx-auto p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {featuredData.map((items) => {
            return (
              <>
                <Productcard
                  pdtimg={items.pdtimg}
                  name={items.name}
                  mrpprice={items.mrpprice}
                  sellingprice={items.sellingprice}
                />
              </>
            );
          })}
          ,
        </div>
      </div>
      {/*pdtcard end*/}

      {/*pdtcard start*/}
      <div className="2xl:container mx-auto bg-[#FFFF] my-4">
        <div className="w-[90%] mx-auto p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {featuredData2.map((items) => {
            return (
              <>
                <Productcard
                  pdtimg={items.pdtimg}
                  name={items.name}
                  mrpprice={items.mrpprice}
                  sellingprice={items.sellingprice}
                />
              </>
            );
          })}
          ,
        </div>
      </div>
      {/*pdtcard end*/}
    </>
  );
}

export default Shop;
