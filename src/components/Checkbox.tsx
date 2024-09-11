import { Check } from 'lucide-react';
import React from 'react';
import { FormField } from './Form';

type CheckBoxProps = {
    field: FormField,
    option: { label: string, value: string | boolean }
    isChecked: boolean,
    onChange: (event: any) => void,
    value: string
}

const Checkbox = ({ isChecked, onChange, value, field, option }: CheckBoxProps) => {
    const { name } = field
    return (
        <label className="flex items-center gap-4 cursor-pointer">
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChange}
                className="hidden"
            />
            <span className={`w-5 h-5 border-2 border-gray-300 rounded-sm flex items-center justify-center ${isChecked ? 'bg-[#72B5EC]' : 'bg-white'}`}>
                {isChecked && (
                    <Check color='#ffffff' />
                )}
            </span>
            <span className="text-gray-700">{option.label}</span>
        </label>
    );
};

export default Checkbox;