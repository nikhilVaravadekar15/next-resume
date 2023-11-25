"use client"

import {
    Info,
    Trash2,
    PlusSquare,
} from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from 'react';
import { education } from "@/data";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import NavigationButtons from '@/components/NavigationButtons';
import { TActiveStepContext, TEducations, TFormContext } from '@/types/index'
import { FormContext } from '@/components/providers/FormContextProvider';
import { ActiveStepContext } from '@/components/providers/ActiveStepContextProvider';
import { educationFormSchema } from '@/zod';


export default function EducationStep() {

    const { setEducations } = React.useContext<TFormContext>(FormContext)
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)

    const {
        register,
        control,
        handleSubmit,
        getFieldState,
        formState: { errors }
    } = useForm<TEducations>({
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
            className="h-full"
            onSubmit={handleSubmit((data: TEducations) => {
                setEducations(data.educationArray)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium flex gap-2 items-center justify-center">
                    Enter education details
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info className="cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent className="w-64">
                                <p className="p-2">
                                    {"Education: List your educational background, including the degrees you've earned, the institutions you attended, and the graduation dates."}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </span>
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
                                    <div className="grid gap-2 grid-cols-3">
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">
                                                School / College
                                                <span className="text-red-700">*</span>
                                            </Label>
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
                                            <Label className="font-semibold text-slate-900">
                                                Degree
                                                <span className="text-red-700">*</span>
                                            </Label>
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
                                            <Label className="font-semibold text-slate-900">
                                                Location
                                                <span className="text-red-700">*</span>
                                            </Label>
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
                                    <div className="grid gap-2 grid-cols-2">
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">
                                                Start Date
                                                <span className="text-red-700">*</span>
                                            </Label>
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
                                    </div>
                                    <div className="grid gap-2 grid-cols-1">
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
