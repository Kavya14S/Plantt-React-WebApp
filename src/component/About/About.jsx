import React from "react";
import History from "../History/History";
import Historydata from "../../api/Historydata";
const About = () => {
  return (
    <>
      {/*Hero section start */}
      <div className="2xl:container mx-auto bg-[#F2F7F2]">
        <div className="w-[98%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2014.44.59_b8ab9385.jpg?updatedAt=1724837208241"
              alt="leaf"
              className="h-44 lg:h-60 rotate-[310deg] "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
              About
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

      {/*history*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 mt-6 ">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                Our Company History
              </h1>
              <p className="text-center font-[Raleway] text-[#081B03]">
                Established in 2019. Plant Haven started as a local nursery and
                has blossomed into a global online community for plant lovers.
                Our dedication to quality and passion for plants drives us to
                continually innovate and inspire green living.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*history*/}

      {/*history start*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto p-2 bg-[#FFFF] gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Historydata.map((items) => {
            return (
              <>
                <History year={items.year} history={items.history} />
              </>
            );
          })}
          ,
        </div>
      </div>
      {/*history end*/}
    {/*What we do start*/}
      <div className="2xl:container mx-auto ">
        <div className="w-[90%] mx-auto bg-[#F2F7F2] grid grid-cols-1 md:grid-cols-2 p-6 gap-4">
          <div className="flex flex-col justify-center items-start space-y-4 md:pl-14 order-2 md:order-1">
            <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
              What We Do{" "}
            </h1>
            <p className="font-[Raleway] text-[#081B03]">
              We bring the beauty of nature to your home with a curated
              selection of vibrant, healthy plants and expert care advice. Let
              us help you create a thriving green space, one plant at a time.
            </p>
            <div className="flex justify-center bg-[#4D933E]  rounded-md items-center  py-1 px-2 pr-4 text-white">
              <button className=" px-2  py-1 text-[#F2F7F2]">Read More</button>
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/right-arrow%20(1).png?updatedAt=1724691165668"
                alt="arrow"
                className="h-5"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center order-1 md:order-2">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/pot-removebg-preview.png?updatedAt=1724603294819"
              alt="pot"
              className="h-48"
            />
          </div>
        </div>
      </div>
      {/*What we do end*/}

      {/*team*/}
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 mt-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
              Our Team
              </h1>
              <p className="text-center font-[Raleway] text-[#081B03]">
              Our team is a dedicated group of plant enthusiasts and experts passionate about helping you create a thriving, beautiful garden
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*team*/}
      {/*team*/}
      <div className="2xl:container mx-auto bg-[#FFFF] my-2 lg:my-6">
          <div className="w-[90%] mx-auto bg-[#FFFF] p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <div className="  flex justify-center items-center">
                <img src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2019.13.26_15d9f837.jpg?updatedAt=1724852678167" alt="img" className="h-60  rounded-full mt-4" />
              </div>
              <div>
                <h1 className="mt-4 font-[Raleway] text-[#2D3D3A] text-xl font-semibold">Dr. Kathryn Murphy</h1>
              </div>
              <div>
                <p className="text-center font-[Raleway] text-[#081B03]">Neuro Expert</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <div className="  flex justify-center items-center ">
                <img src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2019.13.26_d5f1fcd8.jpg?updatedAt=1724852656333" alt="img" className="h-60  rounded-full mt-4" />
              </div>
              <div>
                <h1 className="mt-4 font-[Raleway] text-[#2D3D3A] text-xl font-semibold">Dr. Kathry Murpy</h1>
              </div>
              <div>
                <p className="text-center font-[Raleway] text-[#081B03]"> Ophthalrnology</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <div className="  flex justify-center items-center">
                <img src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2019.13.26_088206f1.jpg?updatedAt=1724852692802" alt="img" className="h-60 rounded-full mt-4" />
              </div>
              <div>
                <h1 className="mt-4 font-[Raleway] text-[#2D3D3A] text-xl font-semibold">Dr. Albert Flores</h1>
              </div>
              <div>
                <p className="text-center font-[Raleway] text-[#081B03]">Gynecology</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <div className="  flex justify-center items-center ">
                <img src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2019.13.26_11017b2e.jpg?updatedAt=1724852713249" alt="img" className="h-60 rounded-full mt-4" />
              </div>
              <div>
                <h1 className="mt-4 font-[Raleway] text-[#2D3D3A] text-xl font-semibold">Dr. Annette Black</h1>
              </div>
              <div>
                <p className="text-center font-[Raleway] text-[#081B03]"> Ophthalrnology</p>
              </div>
            </div>
          </div>
        </div>

      {/*team*/}
    </>
  );
};

export default About;
