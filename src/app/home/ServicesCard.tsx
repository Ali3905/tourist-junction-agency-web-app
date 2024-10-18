import Link from 'next/link'
import React from 'react'

type ServiceProps = {
  title: string;
  imageSrc: string;
  link: string;
}

const ServicesCard = ({ title, imageSrc, link }: ServiceProps) => {
  return (
    <Link href={link}>
    <div className="max-w-sm flex flex-col items-center justify-center rounded-lg overflow-hidden sm:shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
      <img className="sm:w-full sm:h-48 h-10 w-10 rounded-md object-cover" src={imageSrc} alt={title} />
      <div className="sm:p-4">
        <h2 className="sm:font-semibold p-1 text-center sm:text-lg text-[12px]">{title}</h2>
      </div>
    </div>
  </Link>
    
  )
}

export default ServicesCard
