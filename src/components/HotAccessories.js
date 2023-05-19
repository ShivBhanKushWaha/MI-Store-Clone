import React from 'react'

const HotAccessories = (music,musicCover) => {
  return (
           <div className='HotAccessories'>
            <div>
                <img src={musicCover || smartDeviceCover} alt = "Cover" />
            </div>
            {/*.........................2nd */}
            <div>
              {music && music.map((item,index)=>(
              <HotItemCard key={item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
              ))}
              {smartDevice.map((item,index)=>(
              <HotItemCard key={item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
              ))}
            </div>
           </div>

  )
}

export default HotAccessories