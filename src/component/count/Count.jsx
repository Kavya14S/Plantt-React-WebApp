import { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(1);
  let [price, setPrice] = useState(20.00);
  return (
    <>
      <h1 className="font-[Raleway] text-xl text-[#081B03] font-semibold">
              $ {price}.00 USD
              </h1>
      <div className="flex justify-start items-center">
      
      <button
        onClick={() => {
          setCount(count - 1);
          setPrice(price - 20.00);
        }}
        className="bg-[#f7f7f7] px-3 py-1 border border-solid border-2">
        -
      </button>
      <p className="text-xl font-[Raleway] m-4">{count}</p>
      
      <button
        onClick={() => {
          setCount(count + 1);
          setPrice(price + 20.00);
        }}
        className="bg-[#f7f7f7] px-3 py-1 border border-solid border-2">
        +
      </button>
      <div className="flex justify-center bg-[#4D933E] heartbeat rounded-md items-center mx-4 py-1 px-2 pr-4 text-white">
            <button className=" px-4 py-1 text-[#F2F7F2]">Add To Cart</button>
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/shopping-cart%20(2).png?updatedAt=1724593825828"
              alt="cart"
              className="h-5"
            />
          </div>

      </div>
    </>
  );
};
 export default Count;