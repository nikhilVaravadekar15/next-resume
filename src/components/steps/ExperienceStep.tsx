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
import { experience } from "@/data";
import { experienceFormSchema } from '@/zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import NavigationButtons from '@/components/NavigationButtons';
import { TActiveStepContext, TExperiences, TFormContext } from '@/types/index';
import { FormContext } from '@/components/providers/FormContextProvider';
import { ActiveStepContext } from '@/components/providers/ActiveStepContextProvider';


export default function ExperienceStep() {

    const { setExperiences } = React.useContext<TFormContext>(FormContext)
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)

    const {
        register,
        control,
        getFieldState,
        handleSubmit,
        formState: { errors }
    } = useForm<TExperiences>({
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
            className="h-full"
            onSubmit={handleSubmit((data: TExperiences) => {
                setExperiences(data.experienceArray)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium flex gap-2 items-center justify-center">
                    Enter experience
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info className="cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent className="w-64">
                                <p className="p-2">
                                    {"Work Experience (if applicable): Include your work history, starting with the most recent job. Provide the job title, company name, dates of employment (start and end), and a brief description of your responsibilities and achievements."}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </span>
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
                                    <div className="grid gap-2 grid-cols-3">
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">
                                                Position
                                                <span className="text-red-700">*</span>
                                            </Label>
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
                                            <Label className="font-semibold text-slate-900">
                                                Organization
                                                <span className="text-red-700">*</span>
                                            </Label>
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
                                    <div className="grid gap-2 grid-cols-2">
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">
                                                Start Date
                                                <span className="text-red-700">*</span>
                                            </Label>
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
                                    </div>
                                    <div className="grid gap-2 grid-cols-1">
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
