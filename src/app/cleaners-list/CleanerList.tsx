import React from 'react'
import CleanerCard from './CleanerCard'
import { deleteData } from '@/utils/api';
import { useRouter } from 'next/navigation';

const CleanerList = ({ data }: { data: Cleaner[] }) => {
    const router = useRouter()
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
                        router.refresh(); // Refresh the page after deletion
                      }}
                />

            ))}
        </div>
    )
}

export default CleanerList