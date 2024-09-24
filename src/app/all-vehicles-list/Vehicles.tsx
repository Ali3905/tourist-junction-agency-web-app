import Link from 'next/link'
import React from 'react'

const Vehicles = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center'>
      <Link href='/all-vehicles-list/bus'>ADD Bus</Link>
      <Link href='/all-vehicles-list/truck'>ADD Truck</Link>
      <Link href='/all-vehicles-list/tampo'>ADD Tampo</Link>
      <Link href='/all-vehicles-list/car'>ADD Car</Link>
    </div>
  )
}

export default Vehicles;
