const Footer = () => {
    return(
      <>
      <div className="2xl:container mx-auto bg-green-950">
        <div className="w-[90%] mx-auto bg-green-950 grid grid-cols-1 md:grid-cols-3 p-4 gap-4">
          <div className="flex flex-col justify-center items-center order-2 md:order-1 space-y-1">
            <div>
            <h1 className=" font-[Raleway] text-[#F2F7F2] text-sm font-bold">Contact</h1>
            </div>
            <div>
              <p className="font-[Raleway] text-sm text-[#bbc7bd]">Golden Care</p>
            </div>
            <div>
              <p className="font-[Raleway] text-sm text-[#bbc7bd]">123 Bang Street Leviko, CA 8034, USA</p>
            </div>
            <div>
              <p className="font-[Raleway] text-sm text-[#bbc7bd]">9965088858</p>
            </div>
            <div>
              <p className="font-[Raleway] text-sm text-[#bbc7bd]">info@plantt.com</p>
            </div>
            
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 order-1">
            <div>
              <h1 className=" font-[Raleway] text-[#F2F7F2] text-xl font-bold">Plantt</h1>
            </div>
            <div>
              <p className="font-[Raleway] text-sm text-[#bbc7bd] text-center">The seed of gardening is a love that never dies, but it never grows to the enduring happiness that the love of gardening provides to the nature.</p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <img src="https://ik.imagekit.io/9rldi0s2f8/Project/instagram%20(1).png?updatedAt=1724828439223" alt="insta" className="h-3"/>
              <img src="https://ik.imagekit.io/9rldi0s2f8/Project/twitter%20(3).png?updatedAt=1724828439223" alt="twitter" className="h-3 " />
              <img src="https://ik.imagekit.io/9rldi0s2f8/Project/facebook-logo.png?updatedAt=17248283 " alt="fb" className="h-3 " />
            </div>

          </div>
          <div className="flex justify-center items-center space-x-6 order-3">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className=" font-[Raleway] text-[#F2F7F2] text-sm font-bold">Pages Here</h1>
              <ul className="font-[Raleway] text-xs text-[#bbc7bd]">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>contact</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className=" font-[Raleway] text-[#F2F7F2] text-sm font-bold">Utility Pages</h1>
              <ul className="font-[Raleway] text-xs text-[#bbc7bd]">
                <li>Style Guide</li>
                <li>Not Found</li>
                <li>Protected</li>
                <li>Licenses</li>
                <li>Changeing</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">

            </div>


          </div>

        </div>

      </div>
      
      <div className="2xl:container mx-auto bg-green-950 ">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <hr />
          <div className="flex space-x-1  justify-center items-center py-4 ">
            <p className="font-[Raleway] text-sm text-[#bbc7bd]">Copyright</p>
            <img src="https://ik.imagekit.io/9rldi0s2f8/Project/copyright.png?updatedAt=1725008090822" alt="cr" className="h-3" />
            <p className="font-[Raleway] text-sm text-[#bbc7bd]">2024 Plantt . All Rights Reserved</p>
          </div>

        </div>

      </div>
      </>
    );
  };

export default Footer;