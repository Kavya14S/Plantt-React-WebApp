const Blogcard = (props) => {
  return (
    <>
      <div className="2xl:container mx-auto bg-[#FFFF]">
        <div className="w-[90%] mx-auto bg-[#f7f7f7] rounded-lg">
          <div className="flex flex-col justify-center items-start space-x-4 pb-2">
            <div className="flex flex-col justify-center items-center">
              <img
                src={props.blogimg}
                alt="blogimg"
                className=" rounded-lg w-[100%]"
              />
            </div>
            <div className="flex flex-col justify-center items-start p-2 space-y-2 mt-4">
              <div>
                <p className="font-[Raleway] text-sm text-[#2D3D3A]">
                  {props.date}
                </p>
                <h1 className="text-[#081B03] font-[Raleway] font-semibold text-base">
                  {props.heading}
                </h1>
              </div>
              <div>
                <p className="font-[Raleway] text-sm text-[#2D3D3A]">
                  {props.content}
                </p>
              </div>
              <div className="bg-[#4D933E] rounded-md heartbeat flex justify-center items-center rounded-md py-1 px-2 pr-4 text-white">
                <button className="bg-[#4D933E]  px-4 py-1 text-[#F2F7F2]">
                  Read more
                </button>
                <img
                  src="https://ik.imagekit.io/9rldi0s2f8/Project/right-arrow%20(1).png?updatedAt=1724691165668"
                  alt="arrow"
                  className="h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogcard;
