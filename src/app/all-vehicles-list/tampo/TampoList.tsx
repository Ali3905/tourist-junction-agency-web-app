"use client";
import React, { useState } from 'react';
import VehicleCard from '../VehicleCard';
import { TampoData } from '../../data'; // Import the dummy data
import SearchBar from '@/components/SearchBar';
import AddButton from '@/components/AddButton';
import { deleteData } from '@/utils/api';

const TampoList = ({ data }: { data: Vehicle[] }) => {
  const [deletedId, setDeletedId] = useState('')
  return (

    <div className="flex justify-center space-x-4 flex-wrap py-8">
      {data.map((item, index) => {
        if (item._id === deletedId) return;
        return <VehicleCard key={index} data={item} onDelete={async () => {
          await deleteData({
            params: { vehicleId: item._id },
            url: "/vehicle"
          });
          setDeletedId(item._id)
        }} />
      })}
    </div>
  );
};

export default TampoList;
