import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import TampoDataProvider from './TampoDataProvider'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Suspense fallback={<Loader />}>
          <TampoDataProvider />
        </Suspense>
    </div>
  )
}

export default page