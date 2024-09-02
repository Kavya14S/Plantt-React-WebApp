
const Feedbackcard = (props) => {
  
  return (
    <>
    
      <div className="2xl:container mx-auto bg-white">
        <div className="w-[90%] mx-auto bg-[#f7f7f7] border_radius grid grid-cols-1 md:grid-cols-2 flex justify-center items-center p-4">
          <div className="flex   justify-center items-center">
            <img src="https://ik.imagekit.io/9rldi0s2f8/Project/quotes%20(1).png?updatedAt=1725256890928" alt="quotes" className="h-14 md:h-40 static pr-60 mb-40" />
            <img
              src={props.profile}
              alt="profile"
              className="h-52 absolute rounded-full "
            />
          </div>
          <div className="flex flex-col justify-center items-start space-y-8 pr-8 pl-6 md:pl-0">
            <div className="flex justify-center items-center space-x-2">
              <img src={props.star} alt="star" className="h-10" />
              <p className="font-semibold text-base text-[#081B03]">{props.starcount}</p>
            </div>
            <div>
              <p className="font-[Raleway] text-sm text-[#081B03]">{props.feedback}</p>
            </div>
            <div className="flex flex-col ">
              <h1 className="font-[Raleway] text-xl text-[#081B03] font-bold">{props.name}</h1>
              <h1 className="font-[Raleway] text-lg text-[#081B03] font-semibold">{props.desinationn}</h1>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
};
export default Feedbackcard;
