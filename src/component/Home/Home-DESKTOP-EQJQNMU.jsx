import productData from "../../api/DummyData";
import Card from "../Card/Card";

import featuredData from "../../api/featuredData";
//import { featuredData2 } from "../../api/featuredData";
import Productcard from "../Productcard/Productcard";

import Category from "../Category/Category";
import Categorydata from "../../api/Categorydata";

import Shoppingcard from "../Shoppingcard/Shoppingcard";
import Shoppingcarddata from "../../api/Shoppingcarddata";

import Feedbackcard from "../Feedbackcard/Feedbackcard";
import Feedbackdata from "../../api/Feedbackdata";

import Blogcard from "../Blogcard/Blogcard";
import Blogcarddata from "../../api/Blogcarddata";



import { v4 as uuidv4 } from "uuid";
const Home = () => {
  
  
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
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                Trees Plants to Grow in
              </h1>
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#6F736E] font-bold">
                your Living Room
              </h1>
            </div>
            <button className="bg-[#4D933E] px-4 py-1 text-center text-[#F2F7F2] heartbeat rounded-md">
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
        <div className="w-[90%] mx-auto bg-[#F2F7F2]  py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <h1 className="text-4xl font-[Raleway] font-semibold">
                    200+
                  </h1>
                  <p className=" font-[Raleway]">Plant Species</p>
                </div>
                <div>
                  <h1 className="text-4xl font-[Raleway]  font-semibold">
                    1.2k+
                  </h1>
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
      <div className="2xl:container mx-auto bg-[#FFFF]">
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
      <div className="2xl:container mx-auto bg-[#FFFF]">
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
          <div className="flex justify-center bg-[#4D933E] rounded-md heartbeat items-center mx-auto py-1 px-2 pr-4 text-white">
            <button className=" px-4 py-1 text-[#F2F7F2] " >View All</button>
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
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 mt-6">
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
          <div className="flex justify-center bg-[#4D933E] rounded-md heartbeat items-center mx-auto py-1 px-2 pr-4 text-white">
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
      <div className="2xl:container mx-auto bg-[#FFFF]">
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
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto grid grid-cols-1 border_radius gap-4">
          {Feedbackdata.map((items) => {
            
            return (
              <>
              
                <Feedbackcard
                  profile={items.profile}
                  star={items.star}
                  starcount={items.starcount}
                  feedback={items.feedback}
                  name={items.name}
                  desinationn={items.desinationn}
                />
                
              </>
            );
          })}
          ,
        </div>
      </div>
      {/*feedbackcard*/}

      {/*insta start*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 mt-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                Follow Us On Instagram
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*insta end*/}

      {/*insta end*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-27%20at%2000.11.20_e566e101.jpg?updatedAt=1724698188632"
                alt="p1"
                className="border_radius"
              />
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-27%20at%2000.11.20_60dccbcd.jpg?updatedAt=1724698172270"
                alt="p2"
                className="border_radius"
              />
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-27%20at%2000.11.20_5fe181f5.jpg?updatedAt=1724698157130"
                alt="p3"
                className="border_radius"
              />
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-27%20at%2000.11.19_be271095.jpg?updatedAt=1724698143622"
                alt="p4"
                className="border_radius"
              />
            </div>
            <div className="col-span-2">
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-27%20at%2000.11.19_fc15d480.jpg?updatedAt=1724698866255"
                alt="p5"
                className="border_radius"
              />
            </div>
          </div>
          <div className="row-span-3">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-27%20at%2000.11.19_ea529958.jpg?updatedAt=1724698127113"
              alt="long"
              className="h-[96%] border_radius"
            />
          </div>
        </div>
      </div>
      {/*insta end*/}

      

      {/*blog text start*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 mt-6">
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
        <div className="w-[90%] mx-auto p-2 bg-[#FFFF] gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

export default Home;
