"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'

type FormType = {
    password: string;
}

const page = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
    const router = useRouter()
    const onSubmit = async (data: FormType) => {
        try {
            await axios({
                method: "post",
                baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
                url: "/user/reset",
                data,
            })

            router.push("/profile")
            alert("Your password has been changed")
        } catch (error) {
            console.log(error);
            alert(error?.data?.response?.message || "Could not change your password")
        }

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form className='flex flex-col gap-[20px] w-[30%]' onSubmit={handleSubmit(onSubmit)}>
                <span className='self-center text-center mb-[50px]'>
                    {/* <p className='font-bold text-[32px]'>Welcom Back!</p> */}
                    <p className='font-semibold text-[20px]'>Enter new password</p>
                </span>
                <label htmlFor="mobileNumber" className='flex flex-col gap-2'>
                    Mobile Number
                    <input {...register("mobileNumber", { required: "Mobile Number is required" })} type="text" name='mobileNumber' id='mobileNunber' className='border rounded-md px-4 py-2' />
                    {errors.mobileNumber && errors.mobileNumber?.message &&
                        typeof errors.mobileNumber?.message === 'string' ? (
                        <span className='text-red-500'>{errors.mobileNumber?.message?.toString()}</span>
                    ) : null
                    }
                </label>
                <label htmlFor="otp" className='flex flex-col gap-2'>
                    New Password
                    <input {...register("newPassword", { required: "New Password is required" })} type="text" name='newPassword' id='newPassword' className='border rounded-md px-4 py-2' />
                    {errors.otp && errors.otp?.message &&
                        typeof errors.otp?.message === 'string' ? (
                        <span className='text-red-500'>{errors.otp?.message?.toString()}</span>
                    ) : null
                    }
                </label>
                <button type='submit' className='px-4 py-2 bg-blue-400 rounded-md'>{isSubmitting ? "Changing Password" : "Change Password"}</button>
            </form>
        </div>
    )
}

export default page