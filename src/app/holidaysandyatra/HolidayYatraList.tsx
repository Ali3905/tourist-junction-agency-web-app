"use client"

import React from 'react'
import HolidayYatraCard from './HolidayYatraCard'
import { deleteData } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setEditData } from '../redux/editDataSlice'

const HolidayYatraList = ({ data }: { data: Tour[] }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    return (
        <div className="flex justify-center space-x-4 flex-wrap py-8">
            {data && data.length > 0 ? data?.map((item, index) => (
                <HolidayYatraCard
                    key={index}
                    data={item}
                    onDelete={async () => {
                        await deleteData({
                          params: { tourId: item._id },
                          url: "/tour"
                        });
                        // router.refresh(); // Refresh the page after deletion
                      }}
                      onUpdate={() => {
                        dispatch(setEditData(item))
                        router.push("/holidaysandyatra/edit")
                      }}
                />
            )): <p className='mx-auto'>No Holidays and yatras To Show</p> }
        </div>
    )
}

export default HolidayYatraList