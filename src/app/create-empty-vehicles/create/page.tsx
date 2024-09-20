"use client";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Page = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const formFields = [
    { name: "vehicleNo", id: "vehicleNo", type: "text", label: "Vehicle Number", validation: { required: { value: true, message: "Vehicle Number is required" } } },
    {
      name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number", validation: {
        required: { value: true, message: "Your mobile number is required" },
        minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
        maxLength: { value: 12, message: "Mobile number can only contain up to 12 digits" }
      }
    },
    { name: "moreInformation", id: "moreInformation", type: "textarea", label: "More Information" },
    { name: "departurePlace", id: "departurePlace", type: "text", label: "Departure Place" },
    { name: "destinationPlace", id: "destinationPlace", type: "text", label: "Destination Place" },
    { name: "departureDate", id: "departureDate", type: "date", label: "Departure Date" },
    { name: "departureTime", id: "departureTime", type: "time", label: "Departure Time" },
    { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true }
  ];

  const handleSubmitEmptyVehicleForm = async (data: any) => {
    const formData = new FormData();

    // Append form data
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];

        if (value instanceof FileList) {
          for (let i = 0; i < value.length; i++) {
            formData.append(key, value[i]);
          }
        } else {
          formData.append(key, value);
        }
      }
    }

    try {
      const res = await axios({
        method: "post",
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: "/emptyVehicle",
        data: formData,
        headers: {
          authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
        }
      });
      alert("Empty Vehicle Created");
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message);
    }
  };

  return (
    <div className="sm:max-w-[1400px] px-2 mx-auto">
      <h2 className="font-bold text-[26px] text-center">Create Empty Vehicle</h2>
      <form onSubmit={handleSubmit(handleSubmitEmptyVehicleForm)} className="space-y-6">

        {formFields.map((field) => (
          <div key={field.id}>
            <label className="block font-bold mb-1" htmlFor={field.id}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                {...control.register(field.name, field.validation)}
                className="p-2 border border-gray-300 w-full"
              />
            ) : field.type === "file" ? (
              <input
                id={field.id}
                type="file"
                {...control.register(field.name)}
                className="p-2 border border-gray-300 w-full"
                multiple={field.isMultiple}
              />
            ) : field.type === "date" ? (
              <Controller
                control={control}
                name="departureDate"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    className="p-2 border border-gray-300 w-full"
                    placeholderText="Select a date"
                    dateFormat="yyyy-MM-dd"
                  />
                )}
              />
            ) : field.type === "time" ? (
              <input
                id={field.id}
                type="time"
                {...control.register(field.name, { required: "Departure time is required" })}
                className="p-2 border border-gray-300 w-full"
              />
            ) : (
              <input
                id={field.id}
                type={field.type}
                {...control.register(field.name, field.validation)}
                className="p-2 border border-gray-300 w-full"
              />
            )}
            {errors[field.name] && <span className="text-red-500">{errors[field.name]?.message}</span>}
          </div>
        ))}

        <button type="submit" className="px-4 flex justify-center items-center py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
