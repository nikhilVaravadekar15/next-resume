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
import { project } from "@/data";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import NavigationButtons from '@/components/NavigationButtons';
import { TActiveStepContext, TFormContext, TProjects } from '@/types/index';
import { FormContext } from '@/components/providers/FormContext';
import { ActiveStepContext } from '@/components/providers/ActiveStepContext';
import { projectFormSchema } from '@/zod';


export default function ProjectStep() {

    const { setProjects } = React.useContext<TFormContext>(FormContext)
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)

    const {
        register,
        control,
        getFieldState,
        handleSubmit,
        formState: { errors }
    } = useForm<TProjects>({
        resolver: zodResolver(projectFormSchema),
        mode: "all",
        defaultValues: {
            projectsArray: [project]
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "projectsArray",
        control
    });


    return (
        <form
            className="m-4 border rounded"
            onSubmit={handleSubmit((data: TProjects) => {
                setProjects(data.projectsArray)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium flex gap-2 items-center justify-center">
                    Enter project details
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info className="cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent className="w-64">
                                <p className="p-2">
                                    {"Projects (if applicable): Mention projects you have worked on if any, that are applicable to the job you're targeting."}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </span>
                <Button
                    onClick={() => {
                        append(project)
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
                                    <span className="text-lg font-semibold text-slate-900">Project no. {index + 1}</span>
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
                                        <Label className="font-semibold text-slate-900">
                                            Project Name
                                            <span className="text-red-700">*</span>
                                        </Label>
                                        <Input
                                            type="text"
                                            autoComplete="off"
                                            placeholder="e.g. next-resume"
                                            {...register(`projectsArray.${index}.title` as const, { required: true })}
                                        />
                                        {
                                            getFieldState(`projectsArray.${index}.title`).isDirty && getFieldState(`projectsArray.${index}.title`).isTouched && getFieldState(`projectsArray.${index}.title`).error?.message && (
                                                <span className="text-xs text-red-500">{getFieldState(`projectsArray.${index}.title`).error?.message}</span>
                                            )
                                        }
                                    </div>
                                    <div className="flex gap-1 flex-col justify-start">
                                        <Label className="font-semibold text-slate-900">Project link</Label>
                                        <Input
                                            type="url"
                                            autoComplete="off"
                                            placeholder="https://github.com/nikhilVaravadekar15/next-resume.git"
                                            {...register(`projectsArray.${index}.link` as const)}
                                        />
                                        {
                                            getFieldState(`projectsArray.${index}.link`).isDirty && getFieldState(`projectsArray.${index}.link`).isTouched && getFieldState(`projectsArray.${index}.link`).error?.message && (
                                                <span className="text-xs text-red-500">{getFieldState(`projectsArray.${index}.link`).error?.message}</span>
                                            )
                                        }
                                    </div>
                                    <div className="flex gap-1 flex-col justify-start">
                                        <Label className="font-semibold text-slate-900">Description</Label>
                                        <Input
                                            type="text"
                                            autoComplete="off"
                                            {...register(`projectsArray.${index}.description` as const)}
                                        />
                                        {
                                            getFieldState(`projectsArray.${index}.description`).isDirty && getFieldState(`projectsArray.${index}.description`).isTouched && getFieldState(`projectsArray.${index}.description`).error?.message && (
                                                <span className="text-xs text-red-500">{getFieldState(`projectsArray.${index}.description`).error?.message}</span>
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
