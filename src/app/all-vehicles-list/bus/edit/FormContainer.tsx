"use client";
import { Form } from '@/components/Form';
import React from 'react';
import { busFormFields } from "@/utils/FormFields"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const FormContainer = () => {

  const editData = useSelector((state: RootState) => state.editData.editData)

  const handleSubmitBusForm = async (data: any) => {
    const formData = new FormData();

    for (const key in data) {
      const value = data[key];
      if ((typeof value === 'object' && value.length < 1) || value === undefined) {
        console.log({ [key]: value });
        console.log({ val: typeof data.services });
        console.log({ v: typeof value });

      } else if (value instanceof FileList) {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i]);
        }
      } else if (key !== "photo" && key !== "aadharCard" && key !== "photos") {
        formData.append(key, value);
      }
    }

    try {
      await axios({
        method: 'patch',
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: '/vehicle',
        params: {
          vehicleId: editData._id
        },
        data: formData,
        headers: {
          authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN,
        },
      });
      alert('Bus Updated');
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message);
    }
  };

  return (
    <div className='max-w-[1400px] mx-auto'>
      <h2 className='font-bold text-[26px] text-center'>Edit Bus Details</h2>
      <Form formFields={busFormFields} handler={handleSubmitBusForm} defaultValues={editData} />
    </div>
  );
};

export default FormContainer;