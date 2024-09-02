import { Link } from "react-router-dom";
const Header = () => {
  const handleMenu = () => {
    content.classList.toggle("hidden");
    cross.classList.toggle("hidden");
    menu.classList.toggle("hidden");
  };
  const handleCross = () => {
    content.classList.toggle("hidden");
    cross.classList.toggle("hidden");
    menu.classList.toggle("hidden");
  }

  return (
    <>
      <nav>
        <div className="2xl:container mx-auto pt-2 pb-2 bg-[#081B03] h-50 lg:h-10">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3">
            <div className="flex justify-between items-center">
              <p className=" font-[Raleway] text-[#F2F7F2] text-xl font-bold">
                Plantt
              </p>

              <div className="md:hidden flex justify-end items-center space-x-4">
                <img
                  src="https://ik.imagekit.io/9rldi0s2f8/Project/search.png?updatedAt=1724593176794"
                  alt="search"
                  className="h-4"
                />
                <img
                  src="https://ik.imagekit.io/9rldi0s2f8/Project/shopping-cart%20(2).png?updatedAt=1724593825828"
                  alt="cart"
                  className="h-4"
                />
                <img
                  src="https://ik.imagekit.io/9rldi0s2f8/Project/user%20(5).png?updatedAt=1724593481357"
                  alt="user"
                  className="h-4"
                />
                <img
                  src="https://ik.imagekit.io/9rldi0s2f8/Project/dots.png?updatedAt=1724594365861"
                  alt="menu"
                  className="h-4"
                  id="menu"
                  onClick={handleMenu}
                />
                <img
                  src="https://ik.imagekit.io/9rldi0s2f8/Project/close%20(2).png?updatedAt=1724596549011"
                  alt="cross"
                  className="h-3 hidden"
                  id="cross"
                  onClick={handleCross}
                />
              </div>
            </div>
            <div
              className="hidden md:flex font-[Raleway] text-[#F2F7F2] text-base flex-col justify-center items-center md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-4 py-2 md:py-0 "
              id="content"
            >
              <Link to="/home"><p className="hover:underline" onClick={handleCross}>Home</p></Link>
              <Link to="/shop"><p className="hover:underline" onClick={handleCross}>Shop</p></Link>
              <Link to="/about"><p className="hover:underline" onClick={handleCross}>About</p></Link>
              <Link to="/faq"><p className="hover:underline" onClick={handleCross}>FAQ</p></Link>
              <Link to="/contact"><p className="hover:underline" onClick={handleCross}>Contact</p></Link>
              <Link to="/blog"><p className="hover:underline" onClick={handleCross}>Blog</p></Link>
            </div>
            <div className="hidden md:block md:flex justify-end items-center space-x-4">
              <input type="text" className="hidden lg:block rounded-md px-2 text-sm py-[2px] tracking-in-expand" placeholder="Explore Our World !" />
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/search.png?updatedAt=1724593176794"
                alt="search"
                className="h-4"
              />
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/shopping-cart%20(2).png?updatedAt=1724593825828"
                alt="cart"
                className="h-4"
              />
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/user%20(5).png?updatedAt=1724593481357"
                alt="user"
                className="h-4"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
