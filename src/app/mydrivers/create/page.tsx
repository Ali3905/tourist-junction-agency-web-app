"use client"
import { Form } from '@/components/Form'
import axios from 'axios'
import React from 'react'

const page = () => {
    const formFields = [
        { name: "name", id: "name", type: "text", label: "Driver Name", validation: { required: { value: true, message: "Name is required" } } },
        { name: "password", id: "password", type: "password", label: "Enter Password", validation: { required: { value: true, message: "Password is required" }, minLength: { value: 5, message: "Password must be atleast 5 characters" } } },
        {
            name: "mobileNumber", id: "mobileNumber", type: "number", label: "Mobile Number", validation: {
                required: { value: true, message: "Your mobile number is required" },
                minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
                maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
            }
        },
        { name: "city", id: "city", type: "text", label: "City", validation: { required: { value: true, message: "City is required" } } },
        { name: "state", id: "state", type: "text", label: "State", validation: { required: { value: true, message: "State is required" } } },
        {
            name: "vehicleType", id: "vehicleType", type: "select", options: [
                { "label": "Select Driver type", "value": "" },
                { "label": "CAR", "value": "CAR" },
                { "label": "BUS", "value": "BUS" },
                { "label": "TAMPO", "value": "TAMPO" },
                { "label": "TRUCK", "value": "TRUCK" },
                { "label": "ALL", "value": "ALL" }
            ], label: "Vehicle Type", validation: { required: { value: true, message: "Vehicle Type is required" } }
        },
        { name: "photo", id: "photo", type: "file", label: "Photo" },
        { name: "aadharCard", id: "aadharCard", type: "file", label: "Aadhar Card" },
        { name: "license", id: "license", type: "file", label: "License" }
    ]

    const handleSubmitDriverForm = async (data: any) => {
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
        } catch (error: any) {
            alert(error?.response?.data?.message || error.message)
        }
    }

    return (
        <div className='max-w-[1400px] mx-auto'>
            <h2 className='font-bold text-[26px] text-center'>Create Driver</h2>
            <Form formFields={formFields} handler={handleSubmitDriverForm} />
        </div>
    )
}

export default page