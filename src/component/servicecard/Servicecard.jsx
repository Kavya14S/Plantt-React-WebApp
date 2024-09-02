import React from 'react'
import Shoppingcard from '../Shoppingcard/Shoppingcard'
import Shoppingcarddata from '../../api/Shoppingcarddata'

const Servicecard = () => {
  return (
    <>
    {/*Servicesdstart*/}
    <div className="2xl:container mx-auto bg-[#FFFF] my-4">
        <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 bg-[#f7f7f7] rounded-md">
          {Shoppingcarddata.map((items) => {
            return (
              <>
                <Shoppingcard
                  heading={items.heading}
                  content={items.content}
                  imgsrc={items.imgsrc}
                />
              </>
            );
          })}
          ,
        </div>
      </div>
      {/*Servicesdend*/}
    </>
  )
}

export default Servicecard

