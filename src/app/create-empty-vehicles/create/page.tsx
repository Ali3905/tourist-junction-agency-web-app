"use client"
import { Form } from '@/components/Form'
import Loader from '@/components/Loader'
import { getVehicleNumberDropdownOptions } from '@/utils/getDropdownOptions'
import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'

const page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <FormContainer/>
        </Suspense>
    )
}

export default page

const FormContainer = () => {
    const [vehicleOptions, setVehicleOptions] = useState([])

    const getVehicleOptions = async () => {
        setVehicleOptions(await getVehicleNumberDropdownOptions())
    }
    const formFields = [
        { name: "vehicleNo", id: "vehicleNo", type: "select",options: vehicleOptions, label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
        {
            name: "mobileNumber", id: "mobileNumber", type: "number", label: "Mobile Number", validation: {
                required: { value: true, message: "Your mobile number is required" },
                minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
                maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
            }
        },
        { name: "departurePlace", id: "departurePlace", type: "text", label: "Departure Place", validation: { required: "Departure Place is required" } },
        { name: "destinationPlace", id: "destinationPlace", type: "text", label: "Destination Place", validation: { required: "Destination Place is required" } },
        { name: "departureDate", id: "departureDate", type: "date", label: "Departure Date", validation: { required: "Destination Date is required" } },
        { name: "departureTime", id: "departureTime", type: "time", label: "Departure Time", validation: { required: "Destination Time is required" } },
        { name: "moreInformation", id: "moreInformation", type: "text", label: "Add Note", validation: { required: "Note is required" } },
        { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true, validation: { required: { value: true, message: "Photos are required" } } },
    ]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                } else if (key === "departureDate") {
                    console.log({ date: value });
                    formData.append(key, new Date(value).toISOString())
                } else if (key === "departureTime") {
                    const date = new Date(data.departureDate).toISOString().split('T')[0]
                    const dateTimeString = `${date}T${value}:00`;
                    formData.append(key, new Date(dateTimeString).toISOString())
                } else {
                    formData.append(key, value);
                }
            }
        }

        try {
            await axios({
                method: "post",
                baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
                url: "/emptyVehicle",
                data: formData,
                headers: {
                    authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
                }
            })
            // return res.data.success
            alert("Empty Vehicle Created")
            reset()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            alert(error?.response?.data?.message || error.message)
        }
    }

    useEffect(()=>{
        getVehicleOptions()
    }, [])

    return (
        <div className='max-w-[1400px] mx-auto'>
            <h2 className='font-bold text-[26px] text-center'>Create Empty Vehicle</h2>
            <Form formFields={formFields} handler={handleSubmitTampoForm} />
        </div>
    )
}