import React from 'react'
import axios from 'axios'
import HolidayYatraContainer from './HolidayYatraContainer'
import { cookies } from 'next/headers';
import { fetchData } from '@/utils/api';

const HolidayYatraDataProvider = async () => {

  const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/tour", authtoken)
    
    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Holiday yatras</p> 
    }


  return (
    
   <HolidayYatraContainer data={data} />
  )
}

export default HolidayYatraDataProvider