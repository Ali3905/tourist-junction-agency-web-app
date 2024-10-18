"use client";
import { Form } from '@/components/Form';
import React from 'react';
// import { EditDataContext } from '@/context/EditDataProvider';
import { tourFormFields } from "@/utils/FormFields"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const FormContainer = () => {
  
  const editData = useSelector((state: RootState) => state.editData.editData)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitYatraForm = async (data: any) => {
    const formData = new FormData();

    for (const key in data) {
      const value = data[key];
      if (value instanceof FileList) {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i]);
        }
      } else if(key !== "photos") {
        formData.append(key, value);
      }
    }

    try {
      await axios({
        method: 'patch',
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: '/tour',
        params: {
          tourId: editData._id
        },
        data: formData,
        headers: {
          authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN,
        },
      });
      alert('Holiday yatra Updated');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message);
    }
  };

  return (
    <div className='max-w-[1400px] mx-auto'>
      <h2 className='font-bold text-[26px] text-center'>Edit Holiday Yatra</h2>
      <Form formFields={tourFormFields} handler={handleSubmitYatraForm} defaultValues={editData} />
    </div>
  );
};

export default FormContainer;
