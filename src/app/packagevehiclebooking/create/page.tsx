"use client"
import { Form } from '@/components/Form'
import axios from 'axios'
import React from 'react'

const page = () => {
    const formFields = [
        { name: "vehicleId", id: "vehicleId", type: "text", label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
        { name: "otherVehicleId", id: "otherVehicleId", type: "text", label: "Other Vehicle Number", validation: { required: "Departure place is required" } },
        { name: "destinationPlace", id: "destinationPlace", type: "text", label: "Destination Place", validation: { required: "Destination place is required" } },
        { name: "customerName", id: "customerName", type: "text", label: "Customer Name", validation: { required: "Customer Name is required" } },
        {
            name: "mobileNumber", id: "mobileNumber", type: "number", label: "Mobile Number", validation: {
                required: { value: true, message: "Your mobile number is required" },
                minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
                maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
            }
        },
        { name: "alternateNumber", id: "alternateNumber", type: "text", label: "Alternate Number", validation: { required: "Alternate Number is required" } },
        { name: "kmStarting", id: "kmStarting", type: "text", label: "KM Starting", validation: { required: "KM Starting is required" } },
        { name: "perKmRateInINR", id: "perKmRateInINR", type: "text", label: "per KM rate in INR", validation: { required: "per KM rate is required" } },
        { name: "advanceAmountInINR", id: "advanceAmountInINR", type: "text", label: "Advance amount in INR", validation: { required: "Advance amount is required" } },
        { name: "remainingAmountInINR", id: "remainingAmountInINR", type: "text", label: "Advance amount in INR", validation: { required: "Advance amount is required" } },
        { name: "tollInINR", id: "tollInINR", type: "text", label: "Toll in INR", validation: { required: "Toll is required" } },
        { name: "otherStateTaxInINR", id: "otherStateTaxInINR", type: "text", label: "Other state tax in INR", validation: { required: "Other state tax is required" } },
        { name: "advancePlace", id: "advancePlace", type: "text", label: "Advance Place", validation: { required: "Advance Place is required" } },
        { name: "departurePlace", id: "departurePlace", type: "text", label: "Departure Place", validation: { required: "Departure Place is required" } },
        { name: "destinationPlace", id: "destinationPlace", type: "text", label: "Destination Place", validation: { required: "Departure Place is required" } },
        { name: "departureDate", id: "departureDate", type: "date", label: "Departure Date", validation: { required: "Departure Date is required" } },
        { name: "departureTime", id: "departureTime", type: "time", label: "Departure Time", validation: { required: "Departure Time is required" } },
        { name: "returnDate", id: "returnDate", type: "date", label: "Return Date", validation: { required: "Return Date is required" } },
        { name: "returnTime", id: "returnTime", type: "time", label: "Return Time", validation: { required: "Return Time is required" } },
        { name: "note", id: "note", type: "text", label: "Add Note", validation: { required: "Note is required" } },
        { name: "pickupPoint", id: "pickupPoint", type: "text", label: "Pick up point", validation: { required: "Pickup point is required" } },
    ]

    const handleSubmitTampoForm = async (data: any, reset: () => void) => {
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
                }  else if (key === "departureTime" || key === "arrivalTime") {
                    console.log({ time: value });
                    const date = new Date().toISOString().split('T')[0]
                    const dateTimeString = `${date}T${value}:00`;
                    formData.append(key, new Date(dateTimeString).toISOString())
                } else {
                    formData.append(key, value);
                }
            }
        }

        try {
            const res = await axios({
                method: "post",
                baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
                url: "/packageBooking",
                data: formData,
                headers: {
                    authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
                }
            })
            // return res.data.success
            alert("Daily Route Created")
            reset()
        } catch (error: any) {
            alert(error?.response?.data?.message || error.message)
        }
    }

    return (
        <div className='max-w-[1400px] mx-auto'>
            <h2 className='font-bold text-[26px] text-center'>Create Vehicle Booking</h2>
            <Form formFields={formFields} handler={handleSubmitTampoForm} />
        </div>
    )
}

export default page