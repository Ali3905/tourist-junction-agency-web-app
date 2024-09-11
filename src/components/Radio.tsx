import { Circle } from 'lucide-react';
import React from 'react';
import { FormField } from './Form';

type RadioProps = {
    field: FormField,
    option: { label: string, value: string | boolean }
    isChecked: boolean,
    onChange: (event: any) => void,
    value: string
}

const Radio = ({ isChecked, onChange, value, field, option }: RadioProps) => {
    const { name } = field

    return (
        <>
            <label className="flex items-center gap-4 cursor-pointer">
                <input
                    type="radio"
                    checked={isChecked}
                    onChange={onChange}
                    name={name}
                    value={value}
                    className="hidden"
                />
                <span
                    className={`w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center ${isChecked ? 'bg-[#87cefa]' : 'bg-white'
                        }`}
                >
                    {isChecked && (
                        <Circle color='white' fill='white' size={5} />
                    )}
                </span>
                <span className="text-gray-700">{option.label}</span>
            </label>
        </>
    );
};

export default Radio;