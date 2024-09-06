import React from "react";
import Count from "../count/Count";
import Productcard from "../Productcard/Productcard";
import { featuredData2 } from "../../api/featuredData";

const Shopdetails = () => {
  return (
    <>
      {/*Hero section start */}
      <div className="2xl:container mx-auto bg-[#F2F7F2]">
        <div className="w-[98%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2014.44.59_b8ab9385.jpg?updatedAt=1724837208241"
              alt="leaf"
              className="h-44 lg:h-60 rotate-[310deg] "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
              Shop Details
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2014.44.59_d430be2e.jpg?updatedAt=1724837145164"
              alt="flower"
              className="h-40 lg:h-48 rotate-center"
            />
          </div>
        </div>
      </div>
      {/*Hero section end */}
      <div className="2xl:container mx-auto bg-white my-8">
        <div className="w-[90%] mx-auto bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="bg-[#F2F7F2] w-[90%] rounded-md  flex flex-col justify-center items-center">
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/pdt1.png?updatedAt=1724680383779"
                alt="i1"
                className="h-80"
              />
            </div>
            <div className="flex justify-center items-center space-x-4 ">
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/p5-removebg-preview.png?updatedAt=1724689876415"
                alt="i2"
                className="h-24 md:h-40 bg-[#F2F7F2] rounded-md"
              />
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/p6-removebg-preview.png?updatedAt=1724689876621"
                alt="i3"
                className="h-24 md:h-40 bg-[#F2F7F2] rounded-md"
              />
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/pdt2.png?updatedAt=1724680410911"
                alt="i4"
                className="h-24 md:h-40 bg-[#F2F7F2] rounded-md"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-4">
              <h1 className="font-[Raleway] text-2xl text-[#081B03] font-bold">
                Houseplant Philippine
              </h1>
              <p className="font-[Raleway] text-[#081B03] text-sm">
                Each of our products is hand-selected for its unique aesthetic
                appeal, resilience, and ability to enhance your home or office
                environment. From striking foliage to delicate blooms, our
                collection encompasses a wide variety of greenery options.
              </p>

              <Count />

              <div className="flex justify-start items-center space-x-4">
                <img
                  src="https://ik.imagekit.io/9rldi0s2f8/Project/delivery.png?updatedAt=1724919771480"
                  alt="truck"
                  className="h-4"
                />
                <p className="font-[Raleway] text-[#081B03] text-sm font-semibold">
                  Free worldwide shipping on all orders over $100USD.
                </p>
              </div>

              <div className="flex justify-start items-center space-x-4">
                <img
                  src="https://ik.imagekit.io/9rldi0s2f8/Project/wall-clock.png?updatedAt=1724919235771"
                  alt="time"
                  className="h-4"
                />
                <p className="font-[Raleway] text-[#081B03] text-sm font-semibold">
                  Delivers In: 3-7 Working Days Shipping & Return.
                </p>
              </div>

              <div className="flex flex-col justify-center items-start space-y-2">
                <div className="flex justify-center items-center space-x-4">
                  <p className="font-[Raleway] text-[#081B03] text-sm ">
                    <strong>SKU : </strong>D75482
                  </p>
                  <p className="font-[Raleway] text-[#081B03] text-sm ">
                    <strong>Color : </strong> Black, White, Yellow, Orange
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <p className="font-[Raleway] text-[#081B03] text-sm ">
                    <strong>Tag : </strong>Indoor
                  </p>
                  <p className="font-[Raleway] text-[#081B03] text-sm ">
                    <strong>Size : </strong> xs , s , m , l , xl
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <p className="font-[Raleway] text-[#081B03] text-sm ">
                    <strong>Category : </strong>Indoor Plants
                  </p>
                </div>
                <p className="font-[Raleway] text-[#4D933E] underline text-xs hover:scale-110 ">
                  Free Delivery and Return Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*similiar text start*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <div className="flex flex-col justify-center items-start space-y-4">
            <div className="flex flex-col justify-center items-start space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold lg:ml-6">
                Description
              </h1>
              <p className="font-[Raleway] text-[#081B03] text-sm lg:ml-6 ">
                We offer a diverse range of bolanical wonders carefully to bring
                natural and vitality into your living spaces. Each of our
                products is hand-selectical for its unique sestheticappool
                resilienc and ability to enhance ya-jy home or office
                environment. From striking foliage to dricate blooms our
                collection encompasses a wide variety of greenery options to
                suit every taste and style Whether you're looking to create a
                lush indoor jungle add a touch of green to a sunny comer
              </p>
              <p className="font-[Raleway] text-[#081B03] text-sm lg:ml-6">
                Whether you seen to infuse a dash of green into a minimalist
                setting or create a lush retreat in a cozy comer our diverse
                range of beesures awaits your exploration Immerse yourself in
                the transformative power of nature and embark on a journey of
                enchantment with exquisite pricts
              </p>
              <ul className="font-[Raleway] text-[#081B03] text-sm lg:ml-10 list-disc font-semibold py-2">
                <li>
                  Unraveling the Mystories of Mycorrhizal Fung: How Symbiotic
                  Relationships Shape Plant Health and Ecosystem Dynamics
                </li>
                <li>
                  The art of bonsai mastering the ancient japanese practice of
                  cultivating miniature trees
                </li>
                <li>
                  Hamessing the power of plant-based remedies exploring herbal
                  medicine and traditionat healing practices
                </li>
                <li>
                  Bridging the gap integrating biophilic design principles into
                  modern architecture and interior spaces
                </li>
              </ul>
              <p className="font-[Raleway] text-[#081B03] text-sm lg:ml-6">
              Explore our curated selection of bitanical wonders each carefully chosen to enhance your living space and bring the of nature indoors. Our products are resourced from trusted proeers and runwnies ensuring the quality and houtthest fce our customers. From vibrant to delicate blooms, each plant is by detailed care instructions to help you nurture and maintains
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*similiar text end*/}

      {/*similiar text start*/}
      <div className="2xl:container mx-auto bg-[#FFFF] mt-20 mb-6">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 mt-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                Similiar Products
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*similiar text end*/}

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
};

export default Shopdetails;
