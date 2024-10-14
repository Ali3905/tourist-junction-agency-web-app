"use client"
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import FileInput from './FileInput'
import Checkbox from './Checkbox'
import Radio from './Radio'
import { Eye, EyeOff } from 'lucide-react'
import SelectInput from './SelectInput'


export type FormField = {
    name: string,
    id: string,
    label: string,
    type: string,
    validation?: any,
    isMultiple?: boolean,
    options?: { label: string, value: string }[]
}

type FormProps = {
    formFields: FormField[],
    handler: (data: any, reset: () => void) => void,
    defaultValues: any,
}


export const Form = ({ formFields, handler, defaultValues }: FormProps) => {
    
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
      } = useForm({
        defaultValues: defaultValues || {},
      });
      const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const submitHandler = async (data: any) => {
        await handler(data, reset)
        // reset()
    }

    return (

        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4 max-w-[60%] mx-auto'>
            {
                formFields.map((field) => {
                    if (field.type === "text" || field.type === "number") {
                        return <label className='flex flex-col gap-2'>
                            {field.label}
                            <input {...register(field.name, field.validation)} type={field.type} id={field.id} className='border-2 px-4 py-2' />

                            {errors[field.name] && errors[field.name]?.message &&
                                typeof errors[field.name]?.message === 'string' ? (
                                <span className='text-red-500'>{errors[field.name]?.message?.toString()}</span>
                            ) : null
                            }
                        </label>
                    } else if (field.type === "password") {
                        return <label className='flex flex-col gap-2'>
                            {field.label}
                            <span className='border-2 px-4 py-2 focus:outline flex'>
                                <input {...register(field.name, field.validation)} type={isPasswordVisible ? "text" : "password"} id={field.id} className='outline-none flex-grow' />
                                {!isPasswordVisible ? <Eye onClick={() => setIsPasswordVisible(prev => !prev)} /> : <EyeOff onClick={() => setIsPasswordVisible(prev => !prev)} />}
                            </span>
                            {errors[field.name] && errors[field.name]?.message &&
                                typeof errors[field.name]?.message === 'string' ? (
                                <span className='text-red-500'>{errors[field.name]?.message?.toString()}</span>
                            ) : null
                            }
                        </label>
                    } else if (field.type === "date") {
                        return <label className='flex flex-col gap-2'>
                            {field.label}
                            <span className='border-2 px-4 py-2 focus:outline flex'>
                                <input {...register(field.name, field.validation)} type={"date"} id={field.id} className='outline-none flex-grow' />
                            </span>
                            {errors[field.name] && errors[field.name]?.message &&
                                typeof errors[field.name]?.message === 'string' ? (
                                <span className='text-red-500'>{errors[field.name]?.message?.toString()}</span>
                            ) : null
                            }
                        </label>
                    } else if (field.type === "time") {
                        return <label className='flex flex-col gap-2'>
                            {field.label}
                            <span className='border-2 px-4 py-2 focus:outline flex'>
                                <input {...register(field.name, field.validation)} type={"time"} id={field.id} className='outline-none flex-grow' />
                            </span>
                            {errors[field.name] && errors[field.name]?.message &&
                                typeof errors[field.name]?.message === 'string' ? (
                                <span className='text-red-500'>{errors[field.name]?.message?.toString()}</span>
                            ) : null
                            }
                        </label>
                    } else if (field.type === "file") {
                        return <FileInput field={field} errors={errors} register={register} value={defaultValues && defaultValues[field.name] ? defaultValues[field.name] : null}  />
                    } else if (field.type === "select") {
                        return (
                            <label className='flex flex-col gap-[12px]'>
                                <span >{field.label}</span>
                                <Controller
                                    name={field.name}
                                    control={control}
                                    rules={field.validation}
                                    render={({ field: { onChange, value } }) => (
                                        <SelectInput
                                            field={field}
                                            value={value || (defaultValues && defaultValues !== undefined ? defaultValues[field.name] : null)}
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                {errors[field.name] && errors[field.name]?.message &&
                                    typeof errors[field.name]?.message === 'string' ? (
                                    <span className='text-red-500'>{errors[field.name]?.message?.toString()}</span>
                                ) : null
                                }
                            </label>
                        )
                    } else if (field.type === "checkbox") {
                        return <label className='flex flex-col gap-[12px]'>
                            <span>
                                <span className='font-semibold'>{field.label}</span>
                                {errors[field.name] && errors[field.name]?.message &&
                                    typeof errors[field.name]?.message === 'string' ? (
                                    <span className='text-red-500'>{errors[field.name]?.message?.toString()}</span>
                                ) : null
                                }
                            </span>
                            {field.options && field.options.map((option, i) => (
                                <Controller
                                    key={i}
                                    name={field.name}
                                    control={control}
                                    rules={field.validation}
                                    render={({ field: { onChange, value } }) => (
                                        <Checkbox
                                            isChecked={value ? value.includes(option.value) : false}
                                            option={option}
                                            field={field}
                                            value={option.value}
                                            onChange={(e: any) => {
                                                const newValue = e.target.checked
                                                    ? [...(value || []), option.value]
                                                    : (value || []).filter((v: string) => v !== option.value);
                                                onChange(newValue);
                                            }}
                                        />
                                    )}
                                />
                            ))}
                        </label>
                    } else if (field.type === 'radio') {
                        return <label className='flex flex-col gap-[12px]'>
                            <span className='font-semibold'>{field.label}</span>
                            {errors[field.name] && errors[field.name]?.message &&
                                typeof errors[field.name]?.message === 'string' ? (
                                <span className='text-red-500'>{errors[field.name]?.message?.toString()}</span>
                            ) : null
                            }
                            {field.options && field.options.map((option, i) => (
                                <div key={i}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <Radio
                                                isChecked={value === option.value}
                                                field={field}
                                                option={option}
                                                value={option.value}
                                                onChange={() => {
                                                    onChange(value === option.value ? '' : option.value)
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            ))}
                        </label>
                    }
                }

                )}
            <button type='submit' className='bg-gray-400 py-2 flex justify-center'>
                {
                    isSubmitting ?
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg> :
                        "Submit"
                }
            </button>
        </form>
    )
}
