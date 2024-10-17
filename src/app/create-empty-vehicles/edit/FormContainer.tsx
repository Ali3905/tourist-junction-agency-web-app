"use client";
import { Form } from '@/components/Form';
import React, { useEffect, useState } from 'react';
// import { EditDataContext } from '@/context/EditDataProvider';
import { driverFormFields } from "@/utils/FormFields"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { getVehicleNumberDropdownOptions } from '@/utils/getDropdownOptions';

const FormContainer = () => {

  const editData = useSelector((state: RootState) => state.editData.editData)
  const [vehicleOptions, setVehicleOptions] = useState([])

  const getVehicleOptions = async () => {
    setVehicleOptions(await getVehicleNumberDropdownOptions())
  }
  const formFields = [
    { name: "vehicleNo", id: "vehicleNo", type: "select", options: vehicleOptions, label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
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


  const handleSubmitYatraForm = async (data: any) => {
    const formData = new FormData();

    for (const key in data) {
      const value = data[key];
      if (value instanceof FileList) {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i]);
        }
      } else if (key === "departureDate") {
        console.log({ date: value });
        formData.append(key, new Date(value).toISOString())
      } else if (key === "departureTime") {
        const date = new Date(data.departureDate).toISOString().split('T')[0]
        const dateTimeString = `${date}T${value}:00`;
        formData.append(key, new Date(dateTimeString).toISOString())
      } else if (key !== "photo" && key !== "aadharCard" && key !== "photos") {
        formData.append(key, value);
      }
    }

    try {
      const res = await axios({
        method: 'patch',
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: '/emptyVehicle',
        params: {
          emptyVehicleId: editData._id
        },
        data: formData,
        headers: {
          authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN,
        },
      });
      alert('Driver Updated');
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message);
    }
  };
  useEffect(() => {
    getVehicleOptions()
  }, [])

  return (
    <div className='max-w-[1400px] mx-auto'>
      <h2 className='font-bold text-[26px] text-center'>Edit Empty Vehicle Details</h2>
      <Form formFields={formFields} handler={handleSubmitYatraForm} defaultValues={editData} />
    </div>
  );
};

export default FormContainer;
