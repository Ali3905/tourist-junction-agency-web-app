"use client";
import { Form } from '@/components/Form';
import React, { useEffect, useState } from 'react';
// import { EditDataContext } from '@/context/EditDataProvider';
import { employeeFormFields, tourFormFields } from "@/utils/FormFields"
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
      { name: "name", id: "name", type: "text", label: "Name", validation: { required: { value: true, message: "Name is required" } } },
      { name: "password", id: "password", type: "password", label: "Password",  validation: { required: { value: true, message: "Password is required" }, minLength: { value: 5, message: "Password must be atleast 5 characters" } } },
      { name: "mobileNumber", id: "mobileNumber", type: "number", label: "Mobile Number", validation: {
          required: { value: true, message: "Your mobile number is required" },
          minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
          maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
      } },
      { name: "employeeType", id: "employeeType", type: "select", label: "Employee Type", options: [
          { label: "Select Employee Type", value: "" },
          { label: "Manager", value: "MANAGER" },
          { label: "Cleaner", value: "CLEANER" },
          { label: "Office Boy", value: "OFFICE-BOY" },
          { label: "Accountant", value: "ACCOUNTANT" },
          { label: "Telecaller", value: "TELECALLER" }
        ], validation: { required: { value: true, message: "Employee type is required" } } },
      { name: "state", id: "state", type: "text", label: "State", required: true, validation: { required: { value: true, message: "State is required" } } },
      { name: "city", id: "city", type: "text", label: "City", validation: { required: { value: true, message: "City is required" } } },
      { name: "aadharCard", id: "aadharCard", type: "file", label: "Aadhar Card", validation: { required: { value: true, message: "Aadhar card is required" } } },
      { name: "photo", id: "photo", type: "file", label: "Photo", validation: { required: { value: true, message: "Photo is required" } } }
    ];

  const handleSubmitYatraForm = async (data: any) => {
    const formData = new FormData();

    for (const key in data) {
      const value = data[key];
      if (value instanceof FileList) {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i]);
        }
      } else if(key !== "photo" && key !== "aadharCard") {
        formData.append(key, value);
      }
    }

    try {
      const res = await axios({
        method: 'patch',
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: '/employee',
        params: {
          employeeId: editData._id
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
      <h2 className='font-bold text-[26px] text-center'>Edit Employee Details</h2>
      <Form formFields={formFields} handler={handleSubmitYatraForm} defaultValues={editData} />
    </div>
  );
};

export default FormContainer;
