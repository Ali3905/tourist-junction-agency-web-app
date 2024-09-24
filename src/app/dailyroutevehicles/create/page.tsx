"use client"
import { Form } from '@/components/Form'
import axios from 'axios'
import React from 'react'

const page = () => {
    const formFields = [
        { name: "vehicleNo", id: "vehicleNo", type: "text", label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
        { name: "depraturePlace", id: "depraturePlace", type: "text", label: "Departure Place", validation: { required: "Departure place is required" } },
        { name: "destinationPlace", id: "destinationPlace", type: "text", label: "Destination Place", validation: { required: "Destination place is required" } },
        { name: "departureTime", id: "departureTime", type: "time", label: "Departure Time", validation: { required: "Departure time is required" } },
        { name: "arrivalTime", id: "arrivalTime", type: "time", label: "Arrival Time", validation: { required: "Arrival time is required" } },
        { name: "pickupPoint", id: "pickupPoint", type: "text", label: "Pickup Point", validation: { required: "Pickup point is required" } },
        { name: "dropoffPoint", id: "dropoffPoint", type: "text", label: "drop off Point", validation: { required: "Drop off point is required" } },
        { name: "ticketFare", id: "ticketFare", type: "number", label: "Ticket Fare", validation: { required: "Ticket Fare is required" } },
        { name: "discount", id: "discount", type: "number", label: "Discount", validation: { required: "Discount is required" } },
        { name: "isAC", id: "isAC", type: "radio", label: "Is AC", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], validation: { required: { value: true, message: "Is AC is required" } } },
        { name: "doesCarryTwoWheelers", id: "doesCarryTwoWheelers", type: "radio", label: "Does it carry two wheelers?", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], validation: { required: { value: true, message: "This is field is required" } } },
        { name: "doesProvideCourierService", id: "doesProvideCourierService", type: "radio", label: "Does it provide courier service?", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], validation: { required: { value: true, message: "This is field is required" } } },
        { name: "doesBookTrainTickets", id: "doesBookTrainTickets", type: "radio", label: "Does it book train tickets?", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], validation: { required: { value: true, message: "This is field is required" } } },
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
        },
        { name: "phonepeNumber", id: "phonepeNumber", type: "text", label: "Phone pe Number", validation: { required: "Phone pe number is required" } },
        { name: "phonepeName", id: "phonepeName", type: "text", label: "Phone pe name", validation: { required: "Phone pe name is required" } },

        { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number 1"},
        { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number 2"},
        { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number 3"},
        { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number 4"},

        // { name: "date", id: "date", type: "date", label: "Date", validation: { required: "Date is required" } },
        { name: "QR", id: "QR", type: "file", label: "QR", validation: { required: { value: true, message: "QR Photo is required" } } },
        { name: "seatingArrangement", id: "seatingArrangement", type: "file", label: "Seating Arrangement", validation: { required: { value: true, message: "Seating Arrangement Photoc is required" } } },
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
                url: "/busRoute",
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
            <h2 className='font-bold text-[26px] text-center'>Create Daily route</h2>
            <Form formFields={formFields} handler={handleSubmitTampoForm} />
        </div>
    )
}

export default page