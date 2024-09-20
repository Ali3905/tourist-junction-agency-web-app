import React from 'react'
import EmployeeList from './EmployeeList'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div>
          <Navbar/>
          <EmployeeList/>
    </div>
  )
}

export default page