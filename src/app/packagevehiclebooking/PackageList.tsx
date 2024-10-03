import React, { useState } from 'react'
import PackageCard from './PackageCard'
import { deleteData } from '@/utils/api';


const PackageList = ({ data }: { data: Package[] }) => {
  const [deletedId, setDeletedId] = useState('')
  return (
    <div className="flex gap-[20px]">
      {data.map((pkg, index) => {
        if(pkg._id === deletedId) return;
        return <PackageCard key={index} pkg={pkg} onDelete={async () => {
          await deleteData({
            params: { packageId: pkg._id },
            url: "/packageBooking"
          });
          setDeletedId(pkg._id)
        }} />
      })}
    </div>
  );
}

export default PackageList







