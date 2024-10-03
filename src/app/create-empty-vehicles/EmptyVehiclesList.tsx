import React, { useState } from 'react'
import EmptyVehicleCard from './EmptyVehicleCard'
import { deleteData } from '@/utils/api';

const EmptyVehiclesList = ({ data }: { data: EmptyVehicle[] }) => {
  const [deletedId, setDeletedId] = useState('')
  return (
    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
      {data.map((item, index) => {
        if(item._id === deletedId) return;
       return <EmptyVehicleCard
          key={index}
          data={item}
          onDelete={async () => {
            await deleteData({
              params: { emptyVehicleId: item._id },
              url: "/emptyVehicle"
            });
            setDeletedId(item._id)
          }}
        />

})}
    </div>
  )
}

export default EmptyVehiclesList