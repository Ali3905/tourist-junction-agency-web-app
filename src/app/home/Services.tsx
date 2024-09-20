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
          link: "/employee-details",
        },
        {
          title: "Search Drivers",
          imageSrc: "/dummy-car.jpeg",
          link: "/search-drivers"
        },
        {
          title: "My Driver",
          imageSrc: "/dummy-car.jpeg",
        },
        {
          title: "Cleaner's List",
          imageSrc: "/dummy-car.jpeg",
          link:"/cleaners-list"
        },
        {
          title: "Vehicle Documents",
          imageSrc: "/dummy-car.jpeg",
          link:"/vehicle-documents"
        },
        {
          title: "All Vehicles List",
          imageSrc: "/dummy-car.jpeg",
          link:"/all-vehicles-list"
        },
        {
          title: "Technician Support",
          imageSrc: "/dummy-car.jpeg",
          link: "/technician-support",
        },
        {
          title: "Create Empty Vehicle Routes",
          imageSrc: "/dummy-car.jpeg",
          link:'/create-empty-vehicles'
        },
        {
          title: "Search Empty Vehicle",
          imageSrc: "/dummy-car.jpeg",
          link:'/search-empty-vehicles'
        },

      ];



  return ( 
  <div className='sm:max-w-[1400px] mx-auto'>
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 ">
    {servicesData.map((card, index) => (
      <ServicesCard 
        key={index}
        title={card.title}
        imageSrc={card.imageSrc}
        link={card.link || '#'}
      />
    ))}
  </div>
  </div>
  )
}

export default Services
