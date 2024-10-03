import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import EmloyeeDataProvider from './EmloyeeDataProvider'
import Loader from '@/components/Loader'

const page = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <EmloyeeDataProvider />
      </Suspense>
    </div>
  )
}

export default page