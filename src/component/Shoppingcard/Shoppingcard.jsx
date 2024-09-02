const Shoppingcard = (props) => {
    return (
      <>
        <div className="2xl:container mx-auto bg-[#f7f7f7] ">
          <div className="w-[90%] mx-auto bg-[#f7f7f7] pt-8">
            <div className="flex flex-col justify-center items-center space-y-2">
              <div className="bg-[#FFFF] rounded-full h-20 w-20 flex justify-center items-center">
                <img src={props.imgsrc} alt="img" className="h-8" />
              </div>
              <div>
                <h1 className=" font-[Raleway] text-[#2D3D3A] text-xs font-semibold">{props.heading}</h1>
              </div>
              <div>
                <p className="text-center text-[#081B03] font-[Raleway] text-xs">{props.content}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Shoppingcard;
  