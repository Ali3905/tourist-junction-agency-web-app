"use client"
import { Form } from '@/components/Form'
import axios from 'axios'
import React from 'react'

const page = () => {
  const formFields = [
    { name: "name", id: "name", type: "text", label: "Name of the Driver" },
    { name: "password", id: "password", type: "password", label: "Password", validation: { required: { value: true, message: "Password is required" }, minLength: { value: 5, message: "Password must be atleast 5 characters" } } },
    {
      name: "mobileNumber", id: "mobileNumber", type: "number", label: "Mobile Number", validation: {
        required: { value: true, message: "Your mobile number is required" },
        minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
        maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
      }
    },
    {
      name: "vehicleType", id: "vehicleType", type: "select", label: "Vehicle Type", options: [
        { label: "Select Vehicle Type", value: "" },
        { label: "All", value: "ALL" },
        { label: "Car", value: "CAR" },
        { label: "Bus", value: "BUS" },
        { label: "Tampo", value: "TAMPO" },
        { label: "Truck", value: "TRUCK" },
      ], validation: { required: { value: true, message: "Employee type is required" } }
    },
    { name: "state", id: "state", type: "text", label: "State", required: true, validation: { required: { value: true, message: "State is required" } } },
    { name: "city", id: "city", type: "text", label: "City", validation: { required: { value: true, message: "City is required" } } },
    { name: "aadharCard", id: "aadharCard", type: "file", label: "Aadhar Card", validation: { required: { value: true, message: "Aadhar card is required" } } },
    { name: "photo", id: "photo", type: "file", label: "Photo", validation: { required: { value: true, message: "Photo is required" } } },
    { name: "license", id: "license", type: "file", label: "License", validation: { required: { value: true, message: "License is required" } } },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      await axios({
        method: "post",
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: "/driver",
        data: formData,
        headers: {
          authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
        }
      })
      alert("Driver Created")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message)
    }
  }

  return (
    <div className='max-w-[1400px] mx-auto'>
      <h2 className='font-bold text-[26px] text-center'>Create Driver</h2>
      <Form formFields={formFields} handler={handleSubmitYatraForm} />
    </div>
  )
}

export default page




