import React from 'react'
import EmployeeCard from './EmployeeCard'
import { deleteData } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setEditData } from '../redux/editDataSlice';

const EmployeeList = ({ data }: { data: Employee[] }) => {
  const router = useRouter()
  const dispatch = useDispatch()

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
          }}
          onUpdate={() => {
            dispatch(setEditData(item))
            router.push("/employee-details/edit")
          }}
        />

      ))}
    </div>
  )
}

export default EmployeeList