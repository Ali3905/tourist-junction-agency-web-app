import React from 'react'
import DriverCard from '@/components/DriverCard'

const DriverList = ({ data }: { data: Driver[] }) => {

  return (
    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
      {data.map((item, index) => (
        <DriverCard
          key={index}
          data={item}
        />
      ))}
    </div>
  )
}

export default DriverList