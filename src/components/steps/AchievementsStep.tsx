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
import React from 'react'
import { achievement } from "@/data";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import NavigationButtons from '@/components/NavigationButtons';
import { TAchievements, TActiveStepContext, TFormContext } from '@/types/index'
import { FormContext } from '@/components/providers/FormContextProvider';
import { ActiveStepContext } from '@/components/providers/ActiveStepContextProvider';
import { achievementsFormSchema } from '@/zod';


export default function AchievementsStep() {
    const { setAchievements } = React.useContext<TFormContext>(FormContext)
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)

    const {
        register,
        control,
        getFieldState,
        handleSubmit,
        formState: { errors }
    } = useForm<TAchievements>({
        resolver: zodResolver(achievementsFormSchema),
        mode: "all",
        defaultValues: {
            achievementsArray: [achievement]
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "achievementsArray",
        control
    });

    return (
        <form
            className="h-full"
            onSubmit={handleSubmit((data: TAchievements) => {
                setAchievements(data.achievementsArray)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium flex gap-2 items-center justify-center">
                    Enter achievements
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info className="cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent className="w-64">
                                <p className="p-2">
                                    {"Achievements (if applicable): Highlight any awards, recognitions, or notable achievements in your career."}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </span>
                <Button
                    onClick={() => {
                        append(achievement)
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
                                    <span className="text-lg font-semibold text-slate-900">Achievement no. {index + 1}</span>
                                    <Button
                                        onClick={() => {
                                            remove(index)
                                        }}
                                        variant={"link"} type="button"
                                    >
                                        <Trash2 color={"red"} />
                                    </Button>
                                </div>
                                <div className="grid gap-2 grid-cols-2">
                                    <div className="flex gap-1 flex-col justify-start">
                                        <Label className="font-semibold text-slate-900">
                                            Title
                                            <span className="text-red-700">*</span>
                                        </Label>
                                        <Input
                                            type="text"
                                            autoComplete="off"
                                            placeholder="e.g. Bravo"
                                            {...register(`achievementsArray.${index}.title` as const, { required: true })}
                                        />
                                        {
                                            getFieldState(`achievementsArray.${index}.title`).isDirty && getFieldState(`achievementsArray.${index}.title`).isTouched && getFieldState(`achievementsArray.${index}.title`).error?.message && (
                                                <span className="text-xs text-red-500">{getFieldState(`achievementsArray.${index}.title`).error?.message}</span>
                                            )
                                        }
                                    </div>
                                    <div className="flex gap-1 flex-col justify-start">
                                        <Label className="font-semibold text-slate-900">Description</Label>
                                        <Input
                                            type="text"
                                            autoComplete="off"
                                            {...register(`achievementsArray.${index}.description` as const, { required: true })}
                                        />
                                        {
                                            getFieldState(`achievementsArray.${index}.description`).isDirty && getFieldState(`achievementsArray.${index}.description`).isTouched && getFieldState(`achievementsArray.${index}.description`).error?.message && (
                                                <span className="text-xs text-red-500">{getFieldState(`achievementsArray.${index}.description`).error?.message}</span>
                                            )
                                        }
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
