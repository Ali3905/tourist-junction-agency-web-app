import React, { useState } from 'react';
import DailyRouteCard from './DailyRouteCard'; // Adjust the import path as necessary
import { deleteData } from '@/utils/api';
import { setEditData } from '../redux/editDataSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

// Define the props for the DailyRouteList component
interface DailyRouteListProps {
  data?: DailyRoute[];
}

const DailyRouteList: React.FC<DailyRouteListProps> = ({ data }) => {
  const [deletedId, setDeletedId] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()
  return (
    <div className="flex gap-4">
      {data && data.length > 0 ? data?.map((route, index) => {
        if(route._id === deletedId) return;
        return <DailyRouteCard key={index} data={route} 
        onDelete={async () => {
          await deleteData({
            params: { routeId: route._id },
            url: "/busRoute"
          });
          setDeletedId(route._id)
        }} 
        
        onUpdate={() => {
          dispatch(setEditData(route))
          router.push("/dailyroutevehicles/edit")
        }}
        />
      }): <p className='mx-auto'>No Daily Routes To Show</p> }
    </div>
  );
};

export default DailyRouteList;
