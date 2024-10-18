"use client";
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';

const TechnicianForm = () => {
  const { control, handleSubmit, watch } = useForm();
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    // Fetch states and set options
    axios.get('https://example.com/api/states') // Replace with your API endpoint
      .then(response => {
        const statesData = response.data; // Assuming response data is an array of states
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setStateOptions(statesData.map((state: any) => ({ value: state.code, label: state.name })));
      })
      .catch(error => console.error('Error fetching states:', error));
  }, []);

  useEffect(() => {
    // Watch for changes in state and fetch cities accordingly
    const selectedState = watch('state');
    if (selectedState) {
      axios.get(`https://example.com/api/cities?state=${selectedState.value}`) // Replace with your API endpoint
        .then(response => {
          const citiesData = response.data; // Assuming response data is an array of cities
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setCityOptions(citiesData.map((city: any) => ({ value: city.code, label: city.name })));
        })
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [watch('state')]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    // Handle form submission
    console.log('Form Data:', data);
  };

  const formFields = [
    { name: "name", id: "name", type: "text", label: "Technician Name", required: true },
    { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number", required: true, validation: { minLength: { value: 10, message: "Mobile number must be 10 digits" }, maxLength: { value: 10, message: "Mobile number must be 10 digits" } } },
    { name: "alternateNumber", id: "alternateNumber", type: "text", label: "Alternate Number", validation: { minLength: { value: 10, message: "Alternate number must be 10 digits" }, maxLength: { value: 10, message: "Alternate number must be 10 digits" } } },
    { name: "vehicleType", id: "vehicleType", type: "text", label: "Vehicle Type", required: true },
    { name: "technicianType", id: "technicianType", type: "select", label: "Technician Type", options: ["Electrician", "Mechanic", "Plumber", "Carpenter"], required: true },
    { name: "state", id: "state", type: "select", label: "State", options: stateOptions },
    { name: "city", id: "city", type: "select", label: "City", options: cityOptions }
  ];

  return (
    <div className="max-w-[1400px] mx-auto">
      <h2 className="font-bold text-[26px] text-center">Technician Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {formFields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <label htmlFor={field.id} className="mb-2 font-semibold">{field.label}</label>
            {field.type === 'text' && (
              <Controller
                name={field.name}
                control={control}
                rules={{ required: field.required }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <input
                    type={field.type}
                    id={field.id}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    className="border border-gray-300 p-2 rounded"
                  />
                )}
              />
            )}
            {field.type === 'select' && (
              <Controller
                name={field.name}
                control={control}
                rules={{ required: field.required }}
                render={({ field: { onChange, value, ref } }) => (
                  <Select
                    id={field.id}
                    onChange={onChange}
                    value={field.options?.find(option => option === value)}
                    options={field.options}
                    ref={ref}
                    className="border border-gray-300 rounded"
                  />
                )}
              />
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default TechnicianForm;
