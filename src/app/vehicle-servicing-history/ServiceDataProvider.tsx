import axios from 'axios';
import React from 'react'
import ServiceContainer from './ServiceContainer';
import { cookies } from 'next/headers';
import { fetchData } from '@/utils/api';

const ServiceDataProvider = async() => {
  const authtoken = cookies().get('authtoken')?.value;
  const data = await fetchData("/service", authtoken)
  
  if (data.success === false) {
     return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Service</p> 
  }
  return (
    <ServiceContainer data={data} />
  )
}

export default ServiceDataProvider