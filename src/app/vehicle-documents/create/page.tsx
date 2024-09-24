"use client"
import React from "react";
import { useForm } from "react-hook-form";

const vehicleOptions = [
  { label: "Select Vehicle Number", value: "" },
  { label: "MH 12 AB 1234", value: "MH12AB1234" },
  { label: "MH 25 XY 5678", value: "MH25XY5678" },
  { label: "DL 8C Z 9123", value: "DL8CZ9123" }
];

const formFields = [
  { name: "RC", id: "RC", type: "file", label: "RC", required: true },
  { name: "Insurance", id: "Insurance", type: "file", label: "Insurance", required: true },
  { name: "Permit", id: "Permit", type: "file", label: "Permit", required: true },
  { name: "Fitness", id: "Fitness", type: "file", label: "Fitness", required: true },
  { name: "Tax", id: "Tax", type: "file", label: "Tax", required: true },
  { name: "Puc", id: "Puc", type: "file", label: "PUC", required: true }
];

const DocumentsForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 sm:px-[100px] px-[10px]">
      {/* Dropdown for Vehicle Number */}
      <h1 className="text-center font-bold text-[40px]">Create Vehicle Documents</h1>
      <div>
        <label className="block font-bold mb-1" htmlFor="vehicleNumber">
          Vehicle Number
        </label>
        <select
          id="vehicleNumber"
          {...register("vehicleNumber", { required: "Vehicle Number is required" })}
          className="p-2 border border-gray-300 w-full"
        >
          {vehicleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.vehicleNumber && <span className="text-red-500">Vehicle Number is required</span>}
      </div>

      {/* File Inputs for Documents */}
      {formFields.map((field) => (
        <div key={field.id}>
          <label className="block font-bold mb-1" htmlFor={field.id}>
            {field.label}
          </label>
          <input
            id={field.id}
            type="file"
            {...register(field.name, { required: `${field.label} is required` })}
            className="p-2 border border-gray-300 w-full"
          />
          {errors[field.name] && <span className="text-red-500">{field.label} is required</span>}
        </div>
      ))}

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default DocumentsForm;
