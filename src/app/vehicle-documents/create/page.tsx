"use client"
import { Form } from '@/components/Form'
import { getVehicleIdDropdownOptions } from '@/utils/getDropdownOptions'
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
        setVehicleOptions(await getVehicleIdDropdownOptions())
    }
    const formFields = [
        { name: "vehicleId", id: "vehicleId", type: "select", options: vehicleOptions, label: "Vehicle", validation: { required: "Vehicle Id is required" } },
        { name: "RC", id: "RC", type: "file", label: "RC", validation: { required: { value: true, message: "RC Photo is required" } } },
        { name: "insurance", id: "insurance", type: "file", label: "Insurance", validation: { required: { value: true, message: "Insurance Photo is required" } } },
        { name: "permit", id: "permit", type: "file", label: "Permit", validation: { required: { value: true, message: "Permit Photo is required" } } },
        { name: "fitness", id: "fitness", type: "file", label: "Fitness", validation: { required: { value: true, message: "Fitness Photo is required" } } },
        { name: "tax", id: "tax", type: "file", label: "Tax", validation: { required: { value: true, message: "Tax Photo is required" } } },
        { name: "PUC", id: "PUC", type: "file", label: "PUC", validation: { required: { value: true, message: "PUC Photo is required" } } },
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
                method: "patch",
                baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
                url: "/vehicle/addDocuments",
                params: {
                  vehicleId: data.vehicleId
                },
                data: formData,
                headers: {
                    authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
                }
            })
            // return res.data.success
            alert("Vehicle documents added")
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
            <h2 className='font-bold text-[26px] text-center'>Add Vehicle Documents</h2>
            <Form formFields={formFields} handler={handleSubmitTampoForm} />
        </div>
    )
}