import React from 'react'
import axios from 'axios'
import HolidayYatraContainer from './HolidayYatraContainer'

const HolidayYatraDataProvider = async () => {

  let data;
  try {
    const res = await axios({
      method: "get",
      baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
      url: "/tour",
      headers: {
        authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
      }
    })
    data = res.data.data
  } catch (error: any) {
    console.log(error.response);
    
    return <p className='flex items-center justify-center h-[80vh] w-full'>Could not fetch the Holiday yatra data</p>
  }


  return (
    
   <HolidayYatraContainer data={data} />
  )
}

export default HolidayYatraDataProvider