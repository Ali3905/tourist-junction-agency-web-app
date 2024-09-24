"use client"
import { Form } from '@/components/Form'
import axios from 'axios'
import React from 'react'

const page = () => {
  const formFields = [
    { name: "name", id: "name", type: "text", label: "Name of the Tour" },
    { name: "officeAddress", id: "officeAddress", type: "text", label: "Office Address" },
    { name: "location", id: "location", type: "text", label: "Location" },
    { name: "primaryMobileNumber", id: "primaryMobileNumber", type: "number", label: "Primary Mobile Number" },
    { name: "secondaryMobileNumber", id: "secondaryMobileNumber", type: "number", label: "Secondary Mobile Number" },
    { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true }
  ]

  const handleSubmitYatraForm = async (data: any) => {
    // Create a new FormData instance
    const formData = new FormData();

    // Loop through the form data and append each field to the FormData object
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];

        if (value instanceof FileList) {
          for (let i = 0; i < value.length; i++) {
            formData.append(key, value[i]);
          }
        } else {
          formData.append(key, value);
        }
      }
    }

    try {
      const res = await axios({
        method: "post",
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: "/tour",
        data: formData,
        headers: {
          authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
        }
      })
      alert("Holiday yatra Created")
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message)
    }
  }

  return (
    <div className='max-w-[1400px] mx-auto'>
      <h2 className='font-bold text-[26px] text-center'>Create Holiday Yatra</h2>
      <Form formFields={formFields} handler={handleSubmitYatraForm} />
    </div>
  )
}

export default page




