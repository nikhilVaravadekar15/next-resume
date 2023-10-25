"use client"

import {
    Trash2,
    PlusSquare,
} from 'lucide-react';
import { z } from 'zod';
import React from 'react';
import { experience } from "@/data";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import NavigationButtons from '@/components/NavigationButtons';
import { TActiveStepContext, TFormContext } from '@/types/index';
import { FormContext } from '@/components/providers/FormContext';
import { ActiveStepContext } from '@/components/providers/ActiveStepContext';


export default function ExperienceStep() {

    const { setExperiences } = React.useContext<TFormContext>(FormContext)
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)

    const experienceFormSchema = z.object({
        experienceArray: z.object({
            position: z.string()
                .min(1, "Required")
                .max(256, "Position must be less than 256 characters"),
            org: z.string()
                .min(1, "Required")
                .max(1024, "Organization name must be less than 1024 characters"),
            location: z.string()
                .optional(),
            startDate: z.string()
                .min(1, "Required"),
            endDate: z.string()
                .optional(),
            description: z.string()
                .optional()
        }).array()
    })

    type ZExperience = z.infer<typeof experienceFormSchema>

    const {
        register,
        control,
        getFieldState,
        handleSubmit,
        formState: { errors }
    } = useForm<ZExperience>({
        resolver: zodResolver(experienceFormSchema),
        mode: "all",
        defaultValues: {
            experienceArray: [experience]
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "experienceArray",
        control
    });

    return (
        <form
            className="m-4 border rounded"
            onSubmit={handleSubmit((data: ZExperience) => {
                setExperiences(data.experienceArray)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter experience</span>
                <Button
                    onClick={() => {
                        append(experience)
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
                                    <span className="text-lg font-semibold text-slate-900">Experience No. {index + 1}</span>
                                    <Button
                                        onClick={() => {
                                            remove(index)
                                        }}
                                        variant={"link"} type="button"
                                    >
                                        <Trash2 color={"red"} />
                                    </Button>
                                </div>
                                <div className="flex gap-5 flex-col">
                                    <div className="grid gap-2 grid-cols-1">
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Position</Label>
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                placeholder="e.g.  Software Engineer"
                                                {...register(`experienceArray.${index}.position` as const, { required: true })}
                                            />
                                            {
                                                getFieldState(`experienceArray.${index}.position`).isDirty && getFieldState(`experienceArray.${index}.position`).isTouched && getFieldState(`experienceArray.${index}.position`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`experienceArray.${index}.position`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Organization</Label>
                                            <Input
                                                type="text" autoComplete="off"
                                                placeholder="e.g. Amazon"
                                                {...register(`experienceArray.${index}.org` as const, { required: true })}
                                            />
                                            {
                                                getFieldState(`experienceArray.${index}.org`).isDirty && getFieldState(`experienceArray.${index}.org`).isTouched && getFieldState(`experienceArray.${index}.org`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`experienceArray.${index}.org`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Location</Label>
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                {...register(`experienceArray.${index}.location` as const)}
                                            />
                                            {
                                                getFieldState(`experienceArray.${index}.location`).isDirty && getFieldState(`experienceArray.${index}.location`).isTouched && getFieldState(`experienceArray.${index}.location`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`experienceArray.${index}.location`).error?.message}</span>
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
                                                {...register(`experienceArray.${index}.startDate` as const, { required: true })}
                                            />
                                            {
                                                getFieldState(`experienceArray.${index}.startDate`).isDirty && getFieldState(`experienceArray.${index}.startDate`).isTouched && getFieldState(`experienceArray.${index}.startDate`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`experienceArray.${index}.startDate`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">End Date</Label>
                                            <Input
                                                type="date"
                                                autoComplete="off"
                                                {...register(`experienceArray.${index}.endDate` as const)}
                                            />
                                            {
                                                getFieldState(`experienceArray.${index}.endDate`).isDirty && getFieldState(`experienceArray.${index}.endDate`).isTouched && getFieldState(`experienceArray.${index}.endDate`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`experienceArray.${index}.endDate`).error?.message}</span>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Description</Label>
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                {...register(`experienceArray.${index}.description` as const)}
                                            />
                                            {
                                                getFieldState(`experienceArray.${index}.description`).isDirty && getFieldState(`experienceArray.${index}.description`).isTouched && getFieldState(`experienceArray.${index}.description`).error?.message && (
                                                    <span className="text-xs text-red-500">{getFieldState(`experienceArray.${index}.description`).error?.message}</span>
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
