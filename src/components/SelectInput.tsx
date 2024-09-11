"use client"
import React, { useState } from 'react';

import Select from 'react-select';
import { FormField } from './Form';
type SelectInputProps = {
    field: FormField,
    value: any,
    onChange: (e: any) => void,
};
const SelectInput = ({ field, value, onChange }: SelectInputProps) => {
    const handleSelectChange = (selectedOption: any) => {
        onChange(selectedOption ? selectedOption.value : ''); // Extract the value and pass it back to react-hook-form
    };

    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={field?.options?.[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="color"
                value={field?.options?.find(option => typeof option !== "string" && option.value === value)} // Ensure the selected option is shown correctly
                onChange={handleSelectChange}
                options={field.options}
            />
        </>
    )
}

export default SelectInput