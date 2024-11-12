import React from 'react'
import axios from 'axios'
import TechnicianContainer from './TechnicianContainer';
import { cookies } from 'next/headers';
import { fetchData } from '@/utils/api';

const TechnicianDataProvider = async () => {

  const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/technician", authtoken)
    
    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Technician</p> 
    }


  return (
   <TechnicianContainer data={data} />
  )
}

export default TechnicianDataProvider