import React, { useState } from 'react'
import PackageCard from './PackageCard'
import { deleteData } from '@/utils/api';
import { setEditData } from '../redux/editDataSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';


const PackageList = ({ data }: { data: Package[] }) => {
  const [deletedId, setDeletedId] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <div className="flex gap-[20px]">
      {data && data.length > 0 ?data.map((pkg, index) => {
        if(pkg._id === deletedId) return;
        return <PackageCard key={index} pkg={pkg} onDelete={async () => {
          await deleteData({
            params: { packageId: pkg._id },
            url: "/packageBooking"
          });
          setDeletedId(pkg._id)
        }} 
        
        onUpdate={() => {
          dispatch(setEditData(pkg))
          router.push("/packagevehiclebooking/edit")
        }}
        />
      }): <p className='mx-auto'>No Package Bookings To Show</p> }
    </div>
  );
}

export default PackageList







