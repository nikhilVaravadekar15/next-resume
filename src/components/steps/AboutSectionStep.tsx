"use client"

import { z } from 'zod';
import React from 'react'
import { useForm } from "react-hook-form";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { zodResolver } from "@hookform/resolvers/zod";
import NavigationButtons from '@/components/NavigationButtons';
import { TActiveStepContext, TFormAboutSectionContext } from '@/types/index'
import { ActiveStepContext } from '@/components/providers/ActiveStepContext';
import { FormAboutSectionContext } from '@/components/providers/FormAboutSectionContext';


export default function AboutSectionStep() {
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)
    const { setAboutSection } = React.useContext<TFormAboutSectionContext>(FormAboutSectionContext)

    const formSchema = z.object({
        firstname: z.string()
            .min(1, "Required")
            .max(256, "Fullname must be less than 256 characters"),
        middlename: z.string()
            .optional(),
        lastname: z.string()
            .min(1, "Required")
            .max(256, "Fullname must be less than 256 characters"),
        designation: z.string()
            .optional(),
        address: z.string()
            .min(1, "Required"),
        email: z.string()
            .min(1, "Required")
            .email("Invalid email"),
        phone: z.string()
            .min(1, "Required"),
        summary: z.string()
            .optional()
    })

    type ZAboutSection = z.infer<typeof formSchema>

    const { register, handleSubmit, getFieldState } = useForm<ZAboutSection>({
        resolver: zodResolver(formSchema)
    });


    return (
        <form
            className="m-4 border rounded"
            onSubmit={handleSubmit((data: ZAboutSection) => {
                setAboutSection(data)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 grid gap-2 grid-cols-1">
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        First name
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. John"
                        {...register("firstname", { required: true })}
                    />
                    {
                        getFieldState("firstname").isDirty && getFieldState("firstname").isTouched && getFieldState("firstname").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("firstname").error?.message}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">Middle Name</Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. J"
                        {...register("middlename")}
                    />
                    {
                        getFieldState("middlename").isDirty && getFieldState("middlename").isTouched && getFieldState("middlename").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("middlename").error?.message}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Last Name
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. Doe"
                        {...register("lastname", { required: true })}
                    />
                    {
                        getFieldState("lastname").isDirty && getFieldState("lastname").isTouched && getFieldState("lastname").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("lastname").error?.message}</span>
                        )
                    }
                </div>
            </div>
            <div className="p-4 grid gap-2 grid-cols-1">
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">Designation</Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. Sr.Accountants"
                        {...register("designation")}
                    />
                    {
                        getFieldState("designation").isDirty && getFieldState("lastname").isTouched && getFieldState("lastname").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("lastname").error?.message}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Address
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. Lake Street-23"
                        {...register("address")}
                    />
                    {
                        getFieldState("address").isDirty && getFieldState("address").isTouched && getFieldState("address").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("address").error?.message}</span>
                        )
                    }
                </div>
            </div>
            <div className="p-4 grid gap-2 grid-cols-1">
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Email
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        type="email"
                        autoComplete="off"
                        placeholder="e.g. johndoe@gmail.com"
                        {...register("email")}
                    />
                    {
                        getFieldState("email").isDirty && getFieldState("email").isTouched && getFieldState("email").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("email").error?.message}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold">
                        Phone No:
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. 456-768-798"
                        {...register("phone")}
                    />
                    {
                        getFieldState("phone").isDirty && getFieldState("phone").isTouched && getFieldState("phone").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("phone").error?.message}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">Summary</Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        {...register("summary")}
                    />
                    {
                        getFieldState("summary").isDirty && getFieldState("summary").isTouched && getFieldState("summary").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("summary").error?.message}</span>
                        )
                    }
                </div>
            </div>
            <NavigationButtons />
        </form>

    )
}
