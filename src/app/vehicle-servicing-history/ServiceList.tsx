import React from 'react'
import ServiceHistoryCard from './ServiceHistoryCard'
import { deleteData } from '@/utils/api';
import { useRouter } from 'next/navigation';

const ServiceList = ({ data }: { data: VehicleService[] }) => {
  const router = useRouter()
  return (
    <div className="flex justify-center space-x-4 flex-wrap py-8">
        {data?.map((item, index) => (
          <ServiceHistoryCard key={index} data={item} onDelete={async () => {
            await deleteData({
              params: { serviceId: item._id },
              url: "/service"
            });
            router.refresh(); // Refresh the page after deletion
          }} />
        ))}
      </div>
  )
}

export default ServiceList