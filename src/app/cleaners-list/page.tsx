import React, { Suspense } from 'react'
import CleanerList from './CleanerContainer'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import CleanerDataProvider from './CleanerDataProvider'

const page = () => {
  return (
    <div>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <CleanerDataProvider />
        </Suspense>
    </div>
  )
}

export default page
