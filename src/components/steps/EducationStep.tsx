"use client"

import {
    Trash2,
    PlusSquare,
} from 'lucide-react';
import { z } from 'zod';
import React from 'react';
import { education } from "@/data";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import NavigationButtons from '@/components/NavigationButtons';
import { TActiveStepContext, TFormEducationContext } from '@/types/index'
import { ActiveStepContext } from '@/components/providers/ActiveStepContext';
import { FormEducationContext } from '@/components/providers/FormEducationContext';


export default function EducationStep() {

    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)
    const { setEducations } = React.useContext<TFormEducationContext>(FormEducationContext)

    const educationFormSchema = z.object({
        educationArray: z.object({
            school: z.string()
                .min(1, "Required"),
            degree: z.string()
                .min(1, "Required")
                .max(256, "Fullname must be less than 256 characters"),
            location: z.string()
                .min(1, "Required"),
            startDate: z.string()
                .min(1, "Required"),
            endDate: z.string()
                .optional(),
            description: z.string()
                .optional()
        }).array()
    })

    type ZEducation = z.infer<typeof educationFormSchema>

    const {
        register,
        control,
        handleSubmit,
        getFieldState,
        formState: { errors }
    } = useForm<ZEducation>({
        resolver: zodResolver(educationFormSchema),
        mode: "all",
        defaultValues: {
            educationArray: [education]
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "educationArray",
        control
    });


    return (
        <form
            className="m-4 border rounded"
            onSubmit={handleSubmit((data: ZEducation) => {
                setEducations(data.educationArray)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter education details</span>
                <Button
                    onClick={() => {
                        append(education)
                    }}
                    variant={"outline"} type="button"
                    className="flex gap-1 items-center justify-center"
                >
                    <PlusSquare />
                    <span className="font-bold">Add</span>
                </Button>
            </div>
            <div className="mx-2 my-2 flex gap-1 flex-col">
                {
                    fields.map((field, index: number) => {
                        return (
                            <div key={field.id} className="mx-2 p-4 flex gap-4 flex-col border rounded-md">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-slate-900">No. {index + 1}</span>
                                    {
                                        index != 0 && (
                                            <Button
                                                onClick={() => {
                                                    remove(index)
                                                }}
                                                variant={"link"} type="button"
                                            >
                                                <Trash2 color={"red"} />
                                            </Button>
                                        )
                                    }
                                </div>
                                <div className="flex gap-5 flex-col">
                                    <div className="grid gap-2 grid-cols-1">
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">School / College</Label>
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                {...register(`educationArray.${index}.school` as const, { required: true })}
                                            />
                                            {
                                                getFieldState(`educationArray.${index}.school`).isDirty && getFieldState(`educationArray.${index}.school`).isTouched && getFieldState(`educationArray.${index}.school`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`educationArray.${index}.school`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Degree</Label>
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                {...register(`educationArray.${index}.degree` as const, { required: true })}
                                            />
                                            {
                                                getFieldState(`educationArray.${index}.degree`).isDirty && getFieldState(`educationArray.${index}.degree`).isTouched && getFieldState(`educationArray.${index}.degree`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`educationArray.${index}.degree`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Location</Label>
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                {...register(`educationArray.${index}.location` as const, { required: true })}
                                            />
                                            {
                                                getFieldState(`educationArray.${index}.location`).isDirty && getFieldState(`educationArray.${index}.location`).isTouched && getFieldState(`educationArray.${index}.location`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`educationArray.${index}.location`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="grid gap-2 grid-cols-1">
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Start Date</Label>
                                            <Input
                                                type="date"
                                                autoComplete="off"
                                                {...register(`educationArray.${index}.startDate` as const, { required: true })}
                                            />
                                            {
                                                getFieldState(`educationArray.${index}.startDate`).isDirty && getFieldState(`educationArray.${index}.startDate`).isTouched && getFieldState(`educationArray.${index}.startDate`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`educationArray.${index}.startDate`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">End Date</Label>
                                            <Input
                                                type="date"
                                                autoComplete="off"
                                                {...register(`educationArray.${index}.endDate` as const)}
                                            />
                                            {
                                                getFieldState(`educationArray.${index}.endDate`).isDirty && getFieldState(`educationArray.${index}.endDate`).isTouched && getFieldState(`educationArray.${index}.endDate`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`educationArray.${index}.endDate`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Description</Label>
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                {...register(`educationArray.${index}.description` as const)}
                                            />
                                            {
                                                getFieldState(`educationArray.${index}.description`).isDirty && getFieldState(`educationArray.${index}.description`).isTouched && getFieldState(`educationArray.${index}.description`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`educationArray.${index}.description`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <NavigationButtons />
        </form>
    )
}
