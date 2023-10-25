"use client"

import {
    Trash2,
    PlusSquare,
} from 'lucide-react';
import { z } from 'zod';
import React from 'react';
import { skill } from "@/data";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import NavigationButtons from '@/components/NavigationButtons';
import { TActiveStepContext, TFormSkillsContext } from '@/types/index';
import { ActiveStepContext } from '@/components/providers/ActiveStepContext';
import { FormSkillsContext } from '@/components/providers/FormSkillsContext';


export default function SkillsStep() {
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)
    const { setSkills } = React.useContext<TFormSkillsContext>(FormSkillsContext)

    const skillsFormSchema = z.object({
        skillsArray: z.object({
            title: z.string()
                .min(1, "Required")
                .max(256, "Skill must be less than 256 characters"),
            description: z.string()
                .optional()
        }).array()
    })

    type ZSkills = z.infer<typeof skillsFormSchema>

    const {
        register,
        control,
        getFieldState,
        handleSubmit,
        formState: { errors }
    } = useForm<ZSkills>({
        resolver: zodResolver(skillsFormSchema),
        mode: "all",
        defaultValues: {
            skillsArray: [skill]
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "skillsArray",
        control
    });

    return (
        <form
            className="m-4 border rounded"
            onSubmit={handleSubmit((data: ZSkills) => {
                setSkills(data.skillsArray)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter skills</span>
                <Button
                    onClick={() => {
                        append(skill)
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
                                            {...register(`skillsArray.${index}.title` as const, { required: true })}
                                        />
                                        {
                                            getFieldState(`skillsArray.${index}.title`).isDirty && getFieldState(`skillsArray.${index}.title`).isTouched && getFieldState(`skillsArray.${index}.title`).error?.message && (
                                                <span className="text-xs text-red-500">{getFieldState(`skillsArray.${index}.title`).error?.message}</span>
                                            )
                                        }
                                    </div>
                                    <div className="flex gap-1 flex-col justify-start">
                                        <Label className="font-semibold text-slate-900">Description</Label>
                                        <Input
                                            type="text"
                                            autoComplete="off"
                                            {...register(`skillsArray.${index}.description` as const)}
                                        />
                                        {
                                            getFieldState(`skillsArray.${index}.description`).isDirty && getFieldState(`skillsArray.${index}.description`).isTouched && getFieldState(`skillsArray.${index}.description`).error?.message && (
                                                <span className="text-xs text-red-500">{getFieldState(`skillsArray.${index}.description`).error?.message}</span>
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
