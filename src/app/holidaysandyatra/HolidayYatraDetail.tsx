import React from 'react'
import HolidayYatraCard from './HolidayYatraCard'

const HolidayYatraDetail = () => {
    const HolidayYatraData = [
        
            {
                tourName: "Beautiful Bali",
                mobNoOne: "123-456-7890",
                mobNoTwo: "098-765-4321",
                address: "123 Beach Road, Bali",
                location: "Bali, Indonesia",
                imageSrc: "/dummy-car.jpeg",
              },
        
            {
                tourName: "Beautiful Bali",
                mobNoOne: "123-456-7890",
                mobNoTwo: "098-765-4321",
                address: "123 Beach Road, Bali",
                location: "Bali, Indonesia",
                imageSrc: "/dummy-car.jpeg",
              },

            {
                tourName: "Beautiful Bali",
                mobNoOne: "123-456-7890",
                mobNoTwo: "098-765-4321",
                address: "123 Beach Road, Bali",
                location: "Bali, Indonesia",
                imageSrc: "/dummy-car.jpeg",
              },
         
    ]
  return (
    <div className='max-w-[1400px] mx-auto'>
    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
    {HolidayYatraData.map((item, index) => (
      <HolidayYatraCard 
        key={index}
        tourName={item.tourName}
        mobNoOne={item.mobNoOne}
        mobNoTwo={item.mobNoTwo}
        address={item.address}
        location={item.location}
        imageSrc={item.imageSrc}
      />
    ))}
  </div>
  </div>
  )
}

export default HolidayYatraDetail