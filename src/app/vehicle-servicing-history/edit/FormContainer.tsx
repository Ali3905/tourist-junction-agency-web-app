"use client";
import { Form } from '@/components/Form';
import React, { useEffect, useState } from 'react';
// import { EditDataContext } from '@/context/EditDataProvider';
import { vehicleServiceFormFields } from "@/utils/FormFields"
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
    { name: "garageName", id: "garageName", type: "text", label: "Garage Name", validation: { required: "Garage Name is required" } },
    { name: "garageNumber", id: "garageNumber", type: "text", label: "Garage Number", validation: { required: "Garage Number is required" } },
    { name: "vehicleNumber", id: "vehicleNumber", type: "select", options: vehicleOptions, label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
    { name: "workDescription", id: "workDescription", type: "text", label: "Work Description", validation: { required: "Work description is required" } },
    { name: "date", id: "date", type: "date", label: "Date", validation: { required: "Date is required" } },
    { name: "bill", id: "bill", type: "file", label: "Bill", isMultiple: true, validation: { required: { value: true, message: "Bill Photos are required" } } },
  ]

  const handleSubmitServiceForm = async (data: any) => {
    const formData = new FormData();

    for (const key in data) {
      const value = data[key];
      if (value instanceof FileList) {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i]);
        }
      } else if (key !== "photos") {
        formData.append(key, value);
      }
    }

    try {
      const res = await axios({
        method: 'patch',
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: '/service',
        params: {
          serviceId: editData._id
        },
        data: formData,
        headers: {
          authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN,
        },
      });
      alert('Holiday yatra Updated');
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message);
    }
  };

  useEffect(()=>{
    getVehicleOptions()
  }, [])
  return (
    <div className='max-w-[1400px] mx-auto'>
      <h2 className='font-bold text-[26px] text-center'>Edit Vehicle Service</h2>
      <Form formFields={formFields} handler={handleSubmitServiceForm} defaultValues={editData} />
    </div>
  );
};

export default FormContainer;
