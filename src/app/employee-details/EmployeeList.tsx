import React from 'react'
import EmployeeCard from './EmployeeCard'
import { deleteData } from '@/utils/api';
import { useRouter } from 'next/navigation';

const EmployeeList = ({ data }: { data: Employee[] }) => {
  const router = useRouter()

  return (


    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
      {data.map((item, index) => (
        <EmployeeCard
          key={index}
          data={item}
          onDelete={async () => {
            await deleteData({
              params: { employeeId: item._id },
              url: "/employee"
            });
            router.refresh(); // Refresh the page after deletion
          }}
        />

      ))}
    </div>
  )
}

export default EmployeeList