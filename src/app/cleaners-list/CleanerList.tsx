import React from 'react'
import CleanerCard from './CleanerCard'
import { deleteData } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setEditData } from '../redux/editDataSlice';

const CleanerList = ({ data }: { data: Cleaner[] }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    return (
        <div className="flex justify-center space-x-4 flex-wrap py-8 ">
            {data.map((item, index) => (
                <CleanerCard
                    key={index}
                    data={item}
                    onDelete={async () => {
                        await deleteData({
                          params: { cleanerId: item._id },
                          url: "/cleaner"
                        });
                      }}
                      onUpdate={() => {
                        dispatch(setEditData(item))
                        router.push("/cleaners-list/edit")
                      }}
                />

            ))}
        </div>
    )
}

export default CleanerList