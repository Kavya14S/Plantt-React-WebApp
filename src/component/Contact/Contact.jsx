import React from "react";
import Instagram from "../Instagram/Instagram";

const Contact = () => {
  return (
    <>
      <div>
        {/*Hero section start */}
        <div className="2xl:container mx-auto bg-[#F2F7F2]">
          <div className="w-[98%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2014.44.59_b8ab9385.jpg?updatedAt=1724837208241"
                alt="leaf"
                className="h-60 rotate-[310deg] "
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                Contact
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2014.44.59_d430be2e.jpg?updatedAt=1724837145164"
                alt="flower"
                className="h-48 rotate-center"
              />
            </div>
          </div>
        </div>
        {/*Hero section end */}
      </div>

      <div className="2xl:container mx-auto bg-[#FFFF] my-4">
        <div className="w-[90%] mx-auto bg-[#f7f7f7] rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="flex flex-col justify-center items-start  space-y-2  order-2 lg:order-1">
            <h1 className="font-[Raleway] text-2xl text-[#081B03] font-bold">
              Get in Touch
            </h1>
            <p className="font-[Raleway] text-[#081B03] text-sm">
              Do you have an inquiry or some feedback for us? Please fill out
              the form below to contact our team.
            </p>
            <form >
                <div className="flex md:space-x-4 space-y-2 md:space-y-0  grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col space-y-2">
                <label htmlFor="fn" className="font-[Raleway] text-[#081B03] font-semibold ">First Name</label>
                <input type="text" placeholder="First Name" itemID="fn" className="px-2 py-1 rounded-sm " />
                </div>
                <div className="flex flex-col space-y-2">
                <label htmlFor="ln" className="font-[Raleway] text-[#081B03] font-semibold ">Last Name</label>
                <input type="text" placeholder="Last Name" id="ln" className="px-2 py-1 rounded-sm " />
                </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email"  className="font-[Raleway] text-[#081B03] font-semibold mt-4">Email Address</label>
                    <input type="text" name="email" id="email" className="px-2 py-1 rounded-sm " placeholder="Email Address" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="message"  className="font-[Raleway] text-[#081B03] font-semibold mt-4">Message</label>
                    <textarea name="message" rows={6} id="message" className="px-2 py-1 rounded-sm " placeholder="Any Additional Information..."></textarea>
                    
                </div>
                <div className="flex flex-col justify-center items-center bg-[#4D933E] p-2 mt-4">
                    <button className="text-white font-[Raleway]">Send Message</button>
                </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center order-1 lg:order-2">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2021.24.00_1b7a1a30.jpg?updatedAt=1724861522716"
              alt="octus"
              className="h-[495px] rounded-lg"
            />
          </div>
        </div>
      </div>


      <div className="2xl:container mx-auto bg-[#FFFF] mt-10">
        <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 m-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
                Visit Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.776573627422!2d80.11629207375772!3d13.049888887272715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261124150321d%3A0x2e3809c1330b58f1!2s12%2F166%2C%20VGN%20Ave%2C%20Jeevan%20Prakash%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600056!5e0!3m2!1sen!2sin!4v1725083678166!5m2!1sen!2sin" width="1140" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <Instagram />
    </>
  );
};

export default Contact;
