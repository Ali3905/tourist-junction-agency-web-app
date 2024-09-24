import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Link href={'/vehicle-inspection/daily-route'}> <button className=''>Daily Route vehicle</button></Link>
        <button>Package Vehicle Boking</button>
    </div>
  )
}

export default page