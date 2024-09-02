import productData from "../../api/DummyData";
import Card from "../Card/Card";

import featuredData from "../../api/featuredData";
import Productcard from "../Productcard/Productcard";

import Category from "../Category/Category";
import Categorydata from "../../api/Categorydata";

import Blogcard from "../Blogcard/Blogcard";
import Blogcarddata from "../../api/Blogcarddata";

import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import Fbcard from "../fbcard/Fbcard";

import { useSpring, animated } from "react-spring";

function Number({n}) {
  const {number} = useSpring(
    {
      from: {number: 0},
      number: n,
      delay: 200,
      config: {mass: 1, tension: 20, friction: 10},
    }
  )
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  
}

const Hero = () => {
  
  return (
    <>
      {/*herostart*/}
      <div className="2xl:container mx-auto bg-[#F2F7F2]">
        <div className="w-[90%] mx-auto bg-[#F2F7F2] py-4 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/pot-removebg-preview.png?updatedAt=1724603294819"
              alt="pot"
              className="h-40"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-[Raleway] text-3xl lg:text-4xl text-[#081B03] font-bold">
                Plants to Grow in
              </h1>
              <h1 className="font-[Raleway] text-2xl lg:text-3xl text-[#6F736E] font-bold">
                your Living Room
              </h1>
            </div>
            <button className="bg-[#4D933E] heartbeat rounded-md px-4 py-1 text-center text-[#F2F7F2]">
              Shop Now
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/leaf-removebg-preview.png?updatedAt=1724603294741"
              alt="leaf"
              className="h-40"
            />
          </div>
        </div>
        <div className="w-[90%] mx-auto bg-[#F2F7F2]  py-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="order-2 md:order-1">
            <div className="bg-[#FFFF] p-6 rounded-xl space-y-2 lg:space-y-12">
              <div className="flex flex-col justify-center items-start space-y-4">
                <p className="text-[#081B03] font-[Raleway] text-base">
                  Tree-planting is the process of transplanting tree seedlings.
                  generally for forestry, land reclamation. It differs from the
                  transplantation of larger trees in arboriculture.
                </p>
                <div className="flex space-x-2 items-center">
                  <p className="text-[#4D933E] font-[Raleway] text-base">
                    Learn More
                  </p>
                  <img
                    src="https://ik.imagekit.io/9rldi0s2f8/Project/right-arrow.png?updatedAt=1724605271735"
                    alt="arrow"
                    className="h-5"
                  />
                </div>
              </div>
              <div className="flex space-x-10">
                <div>
                  <div className="flex  items-center">
                  <h1 className="text-4xl font-[Raleway] font-semibold">
                    <Number n={200} />
                  </h1>
                  <h1 className="text-4xl font-[Raleway] font-semibold">
                    +
                  </h1>
                  </div>
                  <p className=" font-[Raleway]">Plant Species</p>
                </div>
                <div>
                <div className="flex  items-center">
                  <h1 className="text-4xl font-[Raleway] font-semibold">
                    <Number n={1100} />
                  </h1>
                  <h1 className="text-4xl font-[Raleway] font-semibold">
                    +
                  </h1>
                  </div>
                  <p className=" font-[Raleway]">Member Joined</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center col-span-1 md:col-span-2 order-1 md:order-2 ">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/freepik-export-20240825175748TOnd.jpeg?updatedAt=1724608688381"
              alt="flowrist"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/*heroend*/}

      {/*Smallcardstart*/}
      <div className="2xl:container mx-auto bg-[#FFFF] my-10">
        <div className="w-[90%] mx-auto p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {productData.map((items) => {
            return (
              <>
                <Card
                  key={uuidv4()}
                  heading={items.heading}
                  content={items.content}
                  imgsrc={items.imgsrc}
                />
              </>
            );
          })}
          ,
        </div>
      </div>
      {/*Smallcardend*/}

      {/*text start*/}
      <div className="2xl:container mx-auto bg-[#FFFF] my-10">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                Featured Products
              </h1>
              <p className="text-center font-[Raleway] text-[#081B03]">
                Discover our top trees, chosen for their beauty and resilience.
                Add color, fruit, or greenery to your garden with these customer
                favorites. Bring nature's charm home today.
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <p className="font-[Raleway] text-[#081B03]">All Plants</p>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/fluency-systems-regular/48/vertical-line.png"
                alt="vertical-line"
              />
              <p className="font-[Raleway] text-[#6F736E]">New Arrivals</p>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/fluency-systems-regular/48/vertical-line.png"
                alt="vertical-line"
              />
              <p className="font-[Raleway] text-[#6F736E]">Sale</p>
            </div>
          </div>
        </div>
      </div>
      {/*text end*/}

      {/*pdtcard start*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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

      {/*viewall start*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto bg-[#FFFF] grid grid-cols-1 my-auto">
          <div className="flex justify-center bg-[#4D933E] heartbeat rounded-md items-center mx-auto py-1 px-2 pr-4 text-white">
            <Link to="/shop"><button className=" px-4 py-1 text-[#F2F7F2]">View All</button></Link>
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/right-arrow%20(1).png?updatedAt=1724691165668"
              alt="arrow"
              className="h-5"
            />
          </div>
        </div>
      </div>
      {/*viewall end*/}

      {/*shop by category start*/}
      <div className="2xl:container mx-auto bg-[#FFFF] my-10">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                Shop by Category
              </h1>
              <p className="text-center font-[Raleway] text-[#081B03]">
                Shop by category to find the perfect plants, tools, and
                accessories for your garden. Discover a wide range of products
                tailored to your gardening needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*shop by category end*/}

      {/*category start*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {Categorydata.map((items) => {
            return (
              <>
                <Category
                  categoryimg={items.categoryimg}
                  categoryname={items.categoryname}
                />
              </>
            );
          })}
          ,
        </div>
      </div>
      {/*category end*/}

      {/*viewall start*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto bg-[#FFFF] grid grid-cols-1 my-auto">
          <div className="flex justify-center bg-[#4D933E] heartbeat rounded-md items-center mx-auto py-1 px-2 pr-4 text-white">
            <button className=" px-4 py-1 text-[#F2F7F2]">View All</button>
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/right-arrow%20(1).png?updatedAt=1724691165668"
              alt="arrow"
              className="h-5"
            />
          </div>
        </div>
      </div>
      {/*viewall end*/}

      {/*feedback start*/}
      <div className="2xl:container mx-auto bg-[#FFFF] mt-4 mb-6">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 mt-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                Our Customer Feedback
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*sfeedback end*/}

      {/*feedbackcard*/}
      <Fbcard />
      {/*feedbackcard*/}

      

       {/*blog text start*/}
      <div className="2xl:container mx-auto bg-[#FFFF] mt-0 md:mt-4 mb-4">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 mt-0 md:mt-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                From Our Blog
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*blog test end*/}

      {/*blog card start*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto p-2 bg-[#FFFF] gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Blogcarddata.map((items) => {
            return (
              <>
                <Blogcard
                  blogimg={items.blogimg}
                  date={items.date}
                  heading={items.heading}
                  content={items.content}
                />
              </>
            );
          })}
          ,
        </div>
      </div>
      {/*blog card end*/}  
    </>
  );
};

export default Hero;
