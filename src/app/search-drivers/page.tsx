import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import DriversDataProvider from './DriversDataProvider'
import Loader from '@/components/Loader'

const page = () => {
  return (
    <div>
         <Navbar/>
         <Suspense fallback={<Loader />}>
         <DriversDataProvider />
         </Suspense>
    </div>
  )
}

export default page