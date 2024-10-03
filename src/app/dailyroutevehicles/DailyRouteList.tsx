import React, { useState } from 'react';
import DailyRouteCard from './DailyRouteCard'; // Adjust the import path as necessary
import { deleteData } from '@/utils/api';

// Define the props for the DailyRouteList component
interface DailyRouteListProps {
  data: DailyRoute[];
}

const DailyRouteList: React.FC<DailyRouteListProps> = ({ data }) => {
  const [deletedId, setDeletedId] = useState('')
  return (
    <div className="flex gap-4">
      {data.map((route, index) => {
        if(route._id === deletedId) return;
        return <DailyRouteCard key={index} data={route} onDelete={async () => {
          await deleteData({
            params: { routeId: route._id },
            url: "/busRoute"
          });
          setDeletedId(route._id)
        }} />
      })}
    </div>
  );
};

export default DailyRouteList;
