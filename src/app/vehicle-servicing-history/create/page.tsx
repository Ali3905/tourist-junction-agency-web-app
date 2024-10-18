"use client"
import { Form } from '@/components/Form'
import { getVehicleNumberDropdownOptions } from '@/utils/getDropdownOptions'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
    return (
        <FormContainer />
    )
}

export default page

const FormContainer = () => {
    const [vehicleOptions, setVehicleOptions] = useState([])

    const getVehicleOptions = async () => {
        setVehicleOptions(await getVehicleNumberDropdownOptions())
    }
    const formFields = [
        { name: "garageName", id: "garageName", type: "text", label: "Garage Name", validation: { required: "Garage Name is required" } },
        { name: "garageNumber", id: "garageNumber", type: "text", label: "Garage Number", validation: { required: "Garage Number is required" } },
        { name: "vehicleNumber", id: "vehicleNumber", type: "select", options: vehicleOptions, label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
        { name: "workDescription", id: "workDescription", type: "text", label: "Work Description", validation: { required: "Work description is required" } },
        { name: "date", id: "date", type: "date", label: "Date", validation: { required: "Date is required" } },
        { name: "bill", id: "bill", type: "file", label: "Bill", isMultiple: true, validation: { required: { value: true, message: "Bill Photos are required" } } },
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
                } else if (key === "date") {
                    console.log({ date: value });
                    formData.append(key, new Date(value).toISOString())
                } else if (key === "departureTime") {
                    console.log({ time: value });
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
                url: "/service",
                data: formData,
                headers: {
                    authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
                }
            })
            // return res.data.success
            alert("Vehicle service Created")
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
            <h2 className='font-bold text-[26px] text-center'>Create Vehicle Service</h2>
            <Form formFields={formFields} handler={handleSubmitTampoForm} />
        </div>
    )
}