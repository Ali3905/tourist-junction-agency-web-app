import React from 'react'
import ServicesCard from './ServicesCard';



const Services = () => {
    const servicesData = [
        {
          title: "Daily Route Vehicles",
          imageSrc: "/dummy-car.jpeg",
          link: "/dailyroutevehicles", 
        },
        {
          title: "Package Vehicle booking",
          imageSrc: "/dummy-car.jpeg",
          link: "/packagevehiclebooking",
        },
        {
          title: "Create Holidays and Yatra",
          imageSrc: "/dummy-car.jpeg",
          link: "/holidaysandyatra ",
        },
        {
          title: "Vehilce Servicing History",
          imageSrc: "/dummy-car.jpeg",
          link: "/vehicle-servicing-history",
        }, 
        {
          title: "Employee Details",
          imageSrc: "/dummy-car.jpeg",
        },
        {
          title: "Search Drivers",
          imageSrc: "/dummy-car.jpeg",
        },
        {
          title: "My Driver",
          imageSrc: "/dummy-car.jpeg",
        },
        {
          title: "Cleaner's List",
          imageSrc: "/dummy-car.jpeg",
        },
        {
          title: "Vehicle Documents",
          imageSrc: "/dummy-car.jpeg",
        },
        {
          title: "All Vehicles List",
          imageSrc: "/dummy-car.jpeg",
        },
        {
          title: "Technician Support",
          imageSrc: "/dummy-car.jpeg",
          link: "/technician-support",
        },
        {
          title: "Create Empty Vehicle Routes",
          imageSrc: "/dummy-car.jpeg",
        },
        {
          title: "Search Empty Vehicle",
          imageSrc: "/dummy-car.jpeg",
        },

      ];



  return ( 
  <div className='max-w-[1400px] mx-auto'>
    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
    {servicesData.map((card, index) => (
      <ServicesCard 
        key={index}
        title={card.title}
        description={card.description}
        imageSrc={card.imageSrc}
        link={card.link || '#'}
      />
    ))}
  </div>
  </div>
  )
}

export default Services
