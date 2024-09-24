import Navbar from '@/components/Navbar'
import StickyFooter from '@/components/StickyFooter'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Navbar/>
       <div className='flex flex-col gap-4'>
       <Link href={'/vehicle-transaction/sell-vehicle'}>
          <button>
              Sell Vehicle
          </button>
      </Link>
       <Link href={'/vehicle-transaction/rent-vehicle'}>
          <button>
              Sell Vehicle
          </button>
      </Link>
       </div>
      <StickyFooter/>
    </div>
  )
}

export default page