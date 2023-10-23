"use client"

import { z } from 'zod';
import React from 'react'
import { useFormik } from 'formik';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import NavigationButtons from '@/components/NavigationButtons';
import { ActiveStepContext } from '@/components/providers/ActiveStepContext';
import { FormAboutSectionContext } from '@/components/providers/FormAboutSectionContext';
import { TAboutSection, TActiveStepContext, TFormAboutSectionContext } from '@/types/index'


export default function AboutSectionStep() {
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)
    const { aboutSection, setAboutSection } = React.useContext<TFormAboutSectionContext>(FormAboutSectionContext)

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

    const formik = useFormik<TAboutSection>({
        initialValues: aboutSection,
        validate: (values: TAboutSection) => {
            const errors: Partial<TAboutSection> = {};
            const result = formSchema.safeParse(values)

            if (!result.success) {
                const formErrors = result.error.format()

                if (formErrors.firstname) {
                    errors.firstname = formErrors.firstname?._errors[0]
                }
                if (formErrors.middlename) {
                    errors.middlename = formErrors.middlename?._errors[0]
                }
                if (formErrors.lastname) {
                    errors.lastname = formErrors.lastname?._errors[0]
                }
                if (formErrors.designation) {
                    errors.designation = formErrors.designation?._errors[0]
                }
                if (formErrors.address) {
                    errors.address = formErrors.address?._errors[0]
                }
                if (formErrors.email) {
                    errors.email = formErrors.email?._errors[0]
                }
                if (formErrors.phone) {
                    errors.phone = formErrors.phone?._errors[0]
                }
                if (formErrors.summary) {
                    errors.summary = formErrors.summary?._errors[0]
                }
            }
            return errors
        },
        onSubmit: (values: TAboutSection) => {
            setAboutSection(values)
            setActiveStep(step + 1)
        },
    });


    return (
        <form
            className="m-4 border rounded"
            onSubmit={formik.handleSubmit}
        >
            <div className="p-4 grid gap-2 grid-cols-1">
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        First name
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        name="firstname"
                        type="text"
                        placeholder="e.g. John"
                        autoComplete="off"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.firstname && formik.touched.firstname && (
                            <span className="text-xs text-red-500">{formik.errors.firstname}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">Middle Name <span className="opt-text">(optional)</span></Label>
                    <Input
                        name="middlename"
                        type="text"
                        placeholder="e.g. John"
                        autoComplete="off"
                        value={formik.values.middlename}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.middlename && formik.touched.middlename && (
                            <span className="text-xs text-red-500">{formik.errors.middlename}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Last Name
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        name="lastname"
                        type="text"
                        placeholder="e.g. Doe"
                        autoComplete="off"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.lastname && formik.touched.lastname && (
                            <span className="text-xs text-red-500">{formik.errors.lastname}</span>
                        )
                    }
                </div>
            </div>
            <div className="p-4 grid gap-2 grid-cols-1">
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">Designation</Label>
                    <Input
                        name="designation"
                        type="text"
                        placeholder="e.g. Sr.Accountants"
                        autoComplete="off"
                        value={formik.values.designation}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.designation && formik.touched.designation && (
                            <span className="text-xs text-red-500">{formik.errors.designation}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Address
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        name="address"
                        type="text"
                        placeholder="e.g. Lake Street-23"
                        autoComplete="off"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.address && formik.touched.address && (
                            <span className="text-xs text-red-500">{formik.errors.address}</span>
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
                        name="email"
                        type="email"
                        placeholder="e.g. johndoe@gmail.com"
                        autoComplete="off"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.email && formik.touched.email && (
                            <span className="text-xs text-red-500">{formik.errors.email}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold">
                        Phone No:
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        name="phone"
                        type="text"
                        placeholder="e.g. 456-768-798"
                        autoComplete="off"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.phone && formik.touched.phone && (
                            <span className="text-xs text-red-500">{formik.errors.phone}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">Summary</Label>
                    <Input
                        name="summary"
                        type="text"
                        autoComplete="off"
                        value={formik.values.summary}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.summary && formik.touched.summary && (
                            <span className="text-xs text-red-500">{formik.errors.summary}</span>
                        )
                    }
                </div>
            </div>
            <NavigationButtons />
        </form>

    )
}
