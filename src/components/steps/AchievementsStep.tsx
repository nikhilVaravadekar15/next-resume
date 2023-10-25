"use client"

import {
    Trash2,
    PlusSquare,
} from 'lucide-react';
import { z } from 'zod';
import React from 'react'
import { achievement } from "@/data";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TActiveStepContext } from '@/types/index'
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import NavigationButtons from '@/components/NavigationButtons';
import { TFormAchievementsContext } from '@/types/index';
import { ActiveStepContext } from '@/components/providers/ActiveStepContext';
import { FormAchievementsContext } from '@/components/providers/FormAchievementsContext';


export default function AchievementsStep() {
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)
    const { setAchievements } = React.useContext<TFormAchievementsContext>(FormAchievementsContext)

    const achievementsFormSchema = z.object({
        achievementsArray: z.object({
            title: z.string()
                .min(1, "Required")
                .max(256, "Skill must be less than 256 characters"),
            description: z.string()
                .optional()
        }).array()
    })

    type ZAchievements = z.infer<typeof achievementsFormSchema>

    const {
        register,
        control,
        getFieldState,
        handleSubmit,
        formState: { errors }
    } = useForm<ZAchievements>({
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
            className="m-4 border rounded"
            onSubmit={handleSubmit((data: ZAchievements) => {
                setAchievements(data.achievementsArray)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter achievements</span>
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
                                <div className="grid gap-2 grid-cols-1">
                                    <div className="flex gap-1 flex-col justify-start">
                                        <Label className="font-semibold text-slate-900">Title</Label>
                                        <Input
                                            type="text"
                                            autoComplete="off"
                                            placeholder="e.g. Bravo, team player"
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
