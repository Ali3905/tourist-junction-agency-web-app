"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'

type FormType = {
    userName: string;
    companyName: string;
    mobileNumber: string;
    whatsappNumber: string;
    city: string;
    state: string;
    email: string;
    password: string;
}

const formFields = [
    { name: "userName", label: "User Name", type: "text", validations: { required: "User name is required" } },
    { name: "companyName", label: "Company Name", type: "text", validations: { required: "Company name is required" } },
    { name: "mobileNumber", label: "Mobile Number", type: "number", validations: { required: "Mobile Number is required" } },
    { name: "whatsappNumber", label: "Whatsapp Number", type: "number", validations: { required: "Whatsapp Number is required" } },
    { name: "city", label: "City", type: "text", validations: { required: "City is required" } },
    { name: "state", label: "State", type: "text", validations: { required: "State is required" } },
    { name: "email", label: "Email", type: "text", validations: { required: "Email is required" } },
    { name: "password", label: "Password", type: "password", validations: { required: "Password is required" } },
]

const page = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
    const router = useRouter()
    const onSubmit = async (data: FormType) => {
        try {
            const res = await axios({
                method: "post",
                baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
                url: "/user",
                data: { ...data, type: "AGENCY" },
            })

            // document.cookie = `authtoken=${res.data.authToken}; path=/;`
            router.push("/verify")
            alert("You have created your account")
        } catch (error) {
            console.log(error);
            alert(error?.data?.response?.message || "Could not create your account, Check your creds")
        }

    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form className='flex flex-col gap-[20px] w-[30%]' onSubmit={handleSubmit(onSubmit)}>
                <span className='self-center text-center mb-[50px]'>
                    <p className='font-bold text-[32px]'>Welcome</p>
                    <p className='font-semibold text-[20px]'>Create your Account</p>
                </span>
                {
                    formFields.map((field) => {
                        return <label htmlFor={field.name} className='flex flex-col gap-2'>
                            {field.label}
                            {
                                (field.type === "text" || field.type === "number" || field.type === "password") ?
                                    <>
                                        <input {...register(field.name, field.validations)} type={field.type} name={field.name} id={field.name} className='border rounded-md px-4 py-2' />
                                        {errors[field.name] && errors[field.name]?.message &&
                                            typeof errors[field.name]?.message === 'string' ? (
                                            <span className='text-red-500'>{errors[field.name]?.message?.toString()}</span>
                                        ) : null
                                        }
                                    </> : null
                            }
                        </label>
                    })
                }
                {/* <label htmlFor="userName" className='flex flex-col gap-2'>
                    User Name
                    <input {...register("userName", { required: "Username is required" })} type="text" name='userName' id='userName' className='border rounded-md px-4 py-2' />
                    {errors.userName && errors.userName?.message &&
                        typeof errors.userName?.message === 'string' ? (
                        <span className='text-red-500'>{errors.userName?.message?.toString()}</span>
                    ) : null
                    }
                </label>
                <label htmlFor="password" className='flex flex-col gap-2'>
                    Password
                    <input {...register("password", { required: "Password is required" })} type="password" name='password' id='password' className='border rounded-md px-4 py-2' />
                    {errors.password && errors.password?.message &&
                        typeof errors.password?.message === 'string' ? (
                        <span className='text-red-500'>{errors.password?.message?.toString()}</span>
                    ) : null
                    }
                </label> */}
                <button type='submit' className='px-4 py-2 bg-blue-400 rounded-md'>{isSubmitting ? "Creating your account" : "Create Account"}</button>
            </form>
        </div>
    )
}

export default page