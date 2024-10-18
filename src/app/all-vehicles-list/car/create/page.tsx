"use client"
import { Form } from '@/components/Form'
import axios from 'axios'
import React from 'react'

const page = () => {
    const formFields = [
        { name: "number", id: "number", type: "text", label: "Vehicle Number", validation: { required: { value: true, message: "Vehicle Number is required" } } },
        { name: "seatingCapacity", id: "seatingCapacity", type: "number", label: "Seating Capacity" },
        { name: "model", id: "model", type: "text", label: "Model" },
        { name: "location", id: "location", type: "text", label: "Location" },
        {
            name: "contactNumber", id: "contactNumber", type: "number", label: "Contact Number", validation: {
                required: { value: true, message: "Your mobile number is required" },
                minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
                maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
            }
        },
        { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true, validation: { required: { value: true, message: "Photos are required" } } },
        { name: "isAC", id: "isAC", type: "radio", label: "Is AC", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], validation: { required: { value: true, message: "Is AC is required" } } },
        { name: "isForRent", id: "isForRent", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Rent", validation: { required: { value: true, message: "This field is required" } } },
        { name: "isForSell", id: "isForSell", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Sell", validation: { required: { value: true, message: "This field is required" } } },
    ]

    const handleSubmitCarForm = async (data: any, reset: () => void) => {
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                } else if (Array.isArray(value)) {
                    value.forEach((val) => {
                        formData.append(key, val)
                    })
                } else {
                    formData.append(key, value);
                }
            }
        }
        formData.append("type", "CAR")

        try {

            await axios({
                method: "post",
                baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
                url: "/vehicle",
                data: formData,
                headers: {
                    authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
                }
            })
            // return res.data.success
            alert("Car Created")
            reset()
        } catch (error: any) {
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
            alert(error?.response?.data?.message || error.message)
        }
    }

    return (
        <div className='max-w-[1400px] mx-auto'>
            <h2 className='font-bold text-[26px] text-center'>Create Car</h2>
            <Form formFields={formFields} handler={handleSubmitCarForm} />
        </div>
    )
}

export default page