"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'

type FormType = {
    mobileNumber: string;
    otp: string;
}

const page = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
    const router = useRouter()
    const onSubmit = async (data: FormType) => {
        try {
            const res = await axios({
                method: "post",
                baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
                url: "/user/verify",
                data,
            })  
            
            document.cookie = `authtoken=${res.data.authToken}; path=/;`
            router.push("/home")
            alert("Your mobile number have been verified")
        } catch (error) {
            console.log(error);
            alert(error?.data?.response?.message || "Could not verify your account, Check your creds")
        }

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form className='flex flex-col gap-[20px] w-[30%]' onSubmit={handleSubmit(onSubmit)}>
                <span className='self-center text-center mb-[50px]'>
                    {/* <p className='font-bold text-[32px]'>Welcom Back!</p> */}
                    <p className='font-semibold text-[20px]'>Enter OTP send to your mobileNumber to verify</p>
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
                    OTP
                    <input {...register("otp", { required: "OTP is required" })} type="text" name='otp' id='otp' className='border rounded-md px-4 py-2' />
                    {errors.otp && errors.otp?.message &&
                        typeof errors.otp?.message === 'string' ? (
                        <span className='text-red-500'>{errors.otp?.message?.toString()}</span>
                    ) : null
                    }
                </label>
                <button type='submit' className='px-4 py-2 bg-blue-400 rounded-md'>{isSubmitting ? "Verifing you otp" : "Verify"}</button>
            </form>
        </div>
    )
}

export default page