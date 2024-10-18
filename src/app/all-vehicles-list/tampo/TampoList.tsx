"use client";
import React, { useState } from 'react';
import VehicleCard from '../VehicleCard';
import { deleteData } from '@/utils/api';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setEditData } from '@/app/redux/editDataSlice';

const TampoList = ({ data }: { data: Vehicle[] }) => {
  const [deletedId, setDeletedId] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()
  return (

    <div className="flex justify-center space-x-4 flex-wrap py-8">
      {data.map((item, index) => {
        if (item._id === deletedId) return;
        return <VehicleCard key={index} data={item} 
        onDelete={async () => {
          await deleteData({
            params: { vehicleId: item._id },
            url: "/vehicle"
          });
          setDeletedId(item._id)
        }} 
        onUpdate={() => {
          dispatch(setEditData(item))
          router.push("/all-vehicles-list/tampo/edit")
        }}
        />
      })}
    </div>
  );
};

export default TampoList;
