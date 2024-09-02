const Category = (props) => {
    return (
      <>
        <div className="2xl:container mx-auto bg-[#FFFF] ">
          <div className="w-[90%] mx-auto bg-[#FFFF] p-2">
            <div className="flex flex-col justify-center items-center space-y-2">
              <div className="  flex justify-center items-center">
                <img src={props.categoryimg} alt="img" className="h-72 rounded-2xl mt-4 hover:drop-shadow-2xl" />
              </div>
              <div>
                <h1 className="mt-4 font-[Raleway] text-[#2D3D3A] text-xl font-semibold">{props.categoryname}</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Category;
  