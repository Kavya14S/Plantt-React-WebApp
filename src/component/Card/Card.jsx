const Card = (props) => {
  return (
    <>
      <div className="2xl:container mx-auto bg-[#FFFF] my-2">
        <div className="w-[90%] mx-auto bg-[#FFFF] p-2">
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="bg-[#f7f7f7] hover:bg-[#679567] rounded-full h-24 w-24 flex justify-center items-center">
              <img src={props.imgsrc} alt="img" className="h-20  mt-4 hover:mt-0" />
            </div>
            <div>
              <h1 className=" font-[Raleway] text-[#2D3D3A] font-semibold">{props.heading}</h1>
            </div>
            <div>
              <p className="text-center text-[#081B03] font-[Raleway] text-sm lg:text-[10px]">{props.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
