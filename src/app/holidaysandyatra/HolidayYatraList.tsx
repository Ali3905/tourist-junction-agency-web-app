"use client"

import React from 'react'
import HolidayYatraCard from './HolidayYatraCard'
import { deleteData } from '@/utils/api'
import { useRouter } from 'next/navigation'

const HolidayYatraList = ({ data }: { data: Tour[] }) => {
    const router = useRouter()
    return (
        <div className="flex justify-center space-x-4 flex-wrap py-8">
            {data.map((item, index) => (
                <HolidayYatraCard
                    key={index}
                    data={item}
                    onDelete={async () => {
                        await deleteData({
                          params: { tourId: item._id },
                          url: "/tour"
                        });
                        router.refresh(); // Refresh the page after deletion
                      }}
                />
            ))}
        </div>
    )
}

export default HolidayYatraList