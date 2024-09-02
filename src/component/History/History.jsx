import React from 'react'

const History = (props) => {
  return (
    <>
    <div className='2xl:container mx-auto my-4'>
        <div className=' mx-auto bg-[#F2F7F2] p-8 rounded-md drop-shadow-xl'>
            <div className='flex flex-col justify-center items-center space-y-4'>
                <h1 className="font-[Raleway] text-base text-[#000] font-semibold">{props.year}</h1>
                <p className="font-[Raleway] text-sm text-[#2D3D3A]">{props.history}</p>
                <div className="flex justify-center bg-[#4D933E] heartbeat rounded-md items-center mx-auto py-1 px-2 pr-4 text-white">
            <button className=" px-2  py-1 text-[#F2F7F2]">View All</button>
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/right-arrow%20(1).png?updatedAt=1724691165668"
              alt="arrow"
              className="h-5"
            />
          </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default History
