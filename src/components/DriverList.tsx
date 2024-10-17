import React from 'react'
import DriverCard from '@/components/DriverCard'
import { deleteData } from '@/utils/api';
import { setEditData } from '@/app/redux/editDataSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const DriverList = ({ data }: { data: Driver[] }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
      {data.map((item, index) => (
        <DriverCard
          key={index}
          data={item}
          onDelete={async () => {
            await deleteData({
              params: { driverId: item._id },
              url: "/driver"
            });
          }}
          onUpdate={() => {
            dispatch(setEditData(item))
            router.push("/mydrivers/edit")
          }}
        />
      ))}
    </div>
  )
}

export default DriverList