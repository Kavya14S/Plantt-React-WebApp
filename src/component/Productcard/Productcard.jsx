import { Link } from "react-router-dom";
const Productcard = (props) => {
  return (
    <>
      <div className="2xl:container mx-auto bg-[#FFFF] my-4">
        <div className="dropdown w-[90%] mx-auto bg-[#FFFF] flex flex-col justify-center items-center space-y-4 hover:scale-[1.15] " >
          <div className="border_radius bg-[#f7f7f7] flex flex-col justify-center items-end  px-8 pt-2">
            <p className="bg-red-500 text-white px-2 font-[Raleway] font-semibold text-sm mt-4 rounded-3xl">
              SALE
            </p>
            <img src={props.pdtimg} alt="img" className="h-48" />
            <div className="content flex flex-col justify-end items-end space-y-1 mt-28 ">
              <Link to='/shopdetails'><img src="https://ik.imagekit.io/9rldi0s2f8/Project/search%20(1).png?updatedAt=1724912901607" alt="search" className=" bg-white p-1 rounded-md hover:bg-green-200 h-5" /></Link>
            <img src="https://ik.imagekit.io/9rldi0s2f8/Project/like.png?updatedAt=1724912901551" alt="like" className=" bg-white p-1 rounded-md h-5 hover:bg-green-200" />
            <img src="https://ik.imagekit.io/9rldi0s2f8/Project/shopping-cart%20(3).png?updatedAt=1724912901537" alt="cart" className=" bg-white p-1 rounded-md hover:bg-green-200 h-5" />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <h1 className=" font-[Raleway] text-[#2D3D3A] font-semibold text-lg">
                {props.name}
              </h1>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <div>
                <p className="text-center text-[#6F736E] font-[Raleway] text-lg line-through ">
                  {props.mrpprice}
                </p>
              </div>
              <div>
                <p className="text-center text-[#081B03] font-semibold font-[Raleway] text-lg">
                  {props.sellingprice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcard;
