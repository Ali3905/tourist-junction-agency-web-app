"use client"
import { Form } from '@/components/Form'
import axios from 'axios'
import React from 'react'

const page = () => {
    const formFields = [
        { name: "number", id: "number", type: "text", label: "Vehicle Number", validation: { required: { value: true, message: "Vehicle Number is required" } } },
        { name: "seatingCapacity", id: "seatingCapacity", type: "number", label: "Seating Capacity" },
        { name: "model", id: "model", type: "text", label: "Model" },
        { name: "bodyType", id: "bodyType", type: "text", label: "Body Type" },
        { name: "chassisBrand", id: "chassisBrand", type: "text", label: "Chassis Brand" },
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
        // { name: "type", id: "type", type: "text", label: "Body Type" },
        { name: "isSeatPushBack", id: "isSeatPushBack", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is Seat Push Back" },
        { name: "isForRent", id: "isForRent", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Rent", validation: { required: { value: true, message: "This field is required" }  }},
        { name: "isForSell", id: "isForSell", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Sell",  validation: { required: { value: true, message: "This field is required" } } },
        { name: "isLuggageSpace", id: "isLuggageSpace", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is Luggage Space Available" },
        { name: "isSleeper", id: "isSleeper", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is Sleeper" },
        { name: "curtain", id: "curtain", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Curtain Available" },
        {
            name: "amenities", id: "amenities", type: "checkbox", label: "Amenities", options: [
                { label: "Wifi", value: "wifi" },
                { label: "Blanket", value: "blanket" },
                { label: "Bottle", value: "bottle" },
                { label: "Charger", value: "charger" },
                { label: "Meal", value: "meal" },
                { label: "Pillow", value: "pillow" },
                { label: "TV", value: "tv" }
            ]
        }
    ]

    const handleSubmitBusForm = async (data: any, reset: () => void) => {
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
        formData.append("type", "BUS")

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
            alert("Bus Created")
            reset()
        } catch (error: any) {
            alert(error?.response?.data?.message || error.message)
        }
    }

    return (
        <div className='max-w-[1400px] mx-auto'>
            <h2 className='font-bold text-[26px] text-center'>Create Bus</h2>
            <Form formFields={formFields} handler={handleSubmitBusForm} />
        </div>
    )
}

export default page