import React from 'react'

const FAQ = () => {
  return (
    <>
    {/*Hero section start */}
    <div className="2xl:container mx-auto bg-[#F2F7F2]">
        <div className="w-[98%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2014.44.59_b8ab9385.jpg?updatedAt=1724837208241"
              alt="leaf"
              className="h-44 lg:h-60  rotate-[310deg] "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">
              FAQ
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2014.44.59_d430be2e.jpg?updatedAt=1724837145164"
              alt="flower"
              className="h-40 lg:h-48 rotate-center"
            />
          </div>
        </div>
      </div>
      {/*Hero section end */}

      <div className='2xl:container mx-auto my-4'>
        <div className='w-[90%] lg:w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center items-center'>
                <img src="https://ik.imagekit.io/9rldi0s2f8/Project/WhatsApp%20Image%202024-08-28%20at%2020.02.32_55224d67.jpg?updatedAt=1724855563545" alt="plant" className='h-80 rounded-xl' />
            </div>
            <div className='flex flex-col justify-center items-start space-y-4'>
                <h1 className="font-[Raleway] text-2xl md:text-3xl text-[#081B03] font-bold">Frequently Answered Questions</h1>
                <details>
                    <summary className="font-[Raleway] text-lg text-[#081B03] font-bold">Propagation methods using cuttings?</summary>
                    <p className="font-[Raleway] text-base text-slate-600 ">Propagation using cuttings is a popular method for reproducing plants, including trees by taking a piece of the parent plant and encouraging it to grow into a new plant. This technique is widely used because it can produce new plants faster and maintain the characteristics of the parent plant.</p>
                </details>
                <details>
                    <summary className="font-[Raleway] text-lg text-[#081B03] font-bold">How often should I water my plants?</summary>
                    <p className="font-[Raleway] text-base text-slate-600 ">Water your plants when the top 1-2 inches of soil feels dry to the touch. Avoid overwatering, which can lead to root rot.</p>
                </details>
                <details>
                    <summary className="font-[Raleway] text-lg text-[#081B03] font-bold">Best location for indoor plants to thrive?</summary>
                    <p className="font-[Raleway] text-base text-slate-600 ">Place indoor plants near bright, indirect light sources, like east- or west-facing windows. Avoid direct sunlight, which can cause burning.</p>
                </details>
                <details>
                    <summary className="font-[Raleway] text-lg text-[#081B03] font-bold">Effective ways to control plant pests?</summary>
                    <p className="font-[Raleway] text-base text-slate-600 ">Use neem oil, insecticidal soap, or horticultural oil to control pests. Isolate infected plants, and introduce beneficial insects like ladybugs or lacewings.</p>
                </details>
                <details>
                    <summary className="font-[Raleway] text-lg text-[#081B03] font-bold">Plants suitable for low-light indoor spaces?</summary>
                    <p className="font-[Raleway] text-base text-slate-600 ">Choose low-light tolerant plants like Chinese Evergreen, Pothos, Snake Plant, Peace Lily, or Dracaena. These plants can thrive in conditions with limited natural light. </p>
                </details>
            </div>

        </div>

      </div>
    
    </>
  )
}

export default FAQ
