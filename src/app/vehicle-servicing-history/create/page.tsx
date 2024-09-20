"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const formFields = [
  { name: "garageName", id: "garageName", type: "text", label: "Garage Name", required: true },
  {
    name: "garageNumber", id: "garageNumber", type: "text", label: "Mobile Number", validation: {
      required: { value: true, message: "Your mobile number is required" },
      minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
      maxLength: { value: 12, message: "Mobile number can only contain up to 12 digits" }
    }
  },
  { name: "date", id: "date", type: "date", label: "Date", required: true },
  { name: "workDescription", id: "workDescription", type: "text", label: "Work Description" },
  { name: "photo", id: "photo", type: "file", label: "Bill Photo", required: true }
];

const page = () => {
  const { handleSubmit, register, control, formState: { errors } } = useForm();
  const [vehicleList, setVehicleList] = useState([]);

  // Fetch vehicle numbers from the API
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/vehicle`, {
          headers: { authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN },
        });
        const vehicles = res.data.data.vehicles;
        setVehicleList(vehicles.map(vehicle => ({ id: vehicle._id, number: vehicle.number })));
      } catch (error) {
        console.error("Failed to fetch vehicles", error);
      }
    };

    fetchVehicles();
  }, []);

  // Handling form submission
  const onSubmit = async (data: any) => {
    const formData = new FormData();

    // Append form data and handle file uploads
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        if (value instanceof FileList) {
          formData.append(key, value[0]); // Handling single file input
        } else {
          formData.append(key, value);
        }
      }
    }

    try {
      // Making the POST request to the /api/service endpoint
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/api/service`,
        formData,
        {
          headers: {
            authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN, // Use auth token if required
            // "Content-Type" is automatically set to "multipart/form-data" by Axios
          },
        }
      );

      alert("Vehicle service record submitted successfully!");
    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert(error?.response?.data?.message || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 sm:px-[100px]">
      <h1 className="text-center font-bold text-[40px]">Vehicle Servicing Form</h1>
      
      {/* Vehicle Dropdown */}
      <div>
        <label className="block font-bold mb-1" htmlFor="vehicle">
          Vehicle Number
        </label>
        <select
          id="vehicle"
          {...register("vehicle", { required: true })}
          className="p-2 border border-gray-300 w-full"
        >
          <option value="">Select Vehicle</option>
          {vehicleList.map(vehicle => (
            <option key={vehicle.id} value={vehicle.number}>
              {vehicle.number}
            </option>
          ))}
        </select>
        {errors.vehicle && <span className="text-red-500">Vehicle Number is required</span>}
      </div>

      {/* Other form fields */}
      {formFields.map((field) => (
        <div key={field.id}>
          <label className="block font-bold mb-1" htmlFor={field.id}>
            {field.label}
          </label>

          {/* Handling file, date, and other inputs */}
          {field.type === "file" ? (
            <input
              id={field.id}
              type="file"
              {...register(field.name, { required: field.required })}
              className="p-2 border border-gray-300 w-full"
            />
          ) : field.type === "date" ? (
            <Controller
              control={control}
              name={field.name}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={field.onChange}
                  className="p-2 border border-gray-300 w-full"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                />
              )}
            />
          ) : (
            <input
              id={field.id}
              type={field.type}
              {...register(field.name, { required: field.required })}
              className="p-2 border border-gray-300 w-full"
            />
          )}

          {/* Display validation errors */}
          {errors[field.name] && <span className="text-red-500">{field.label} is required</span>}
        </div>
      ))}

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default page;
