import React from 'react'
import Blogcard from '../Blogcard/Blogcard'
import Blogcarddata from '../../api/Blogcarddata'

const Blog = () => {
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
              Blog
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


    {/*blog text start*/}
    <div className="2xl:container mx-auto bg-[#FFFF] my-4">
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
  )
}

export default Blog
