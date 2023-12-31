"use client"

import {
    Info
} from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from 'react'
import { useForm } from "react-hook-form";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { applyingfor } from '@/zod/index'
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import NavigationButtons from '@/components/NavigationButtons';
import { FormContext } from '@/components/providers/FormContextProvider';
import { TApplyfor, TActiveStepContext, TFormContext } from '@/types/index'
import { ActiveStepContext } from '@/components/providers/ActiveStepContextProvider';



export default function ApplyingforStep() {
    const { setApplyingfor } = React.useContext<TFormContext>(FormContext)
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)

    const { register, handleSubmit, getFieldState } = useForm<TApplyfor>({
        resolver: zodResolver(applyingfor)
    });


    return (
        <form
            className="h-full"
            onSubmit={handleSubmit((data: TApplyfor) => {
                setApplyingfor(data)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium flex gap-2 items-center justify-center">
                    Applying for job
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info className="cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent className="w-64">
                                <p className="p-2">
                                    {"The description of the job you're applying for"}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </span>
            </div>
            <div className="p-4 grid gap-4 grid-cols-1">
                <div className="flex gap-2 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Job designation
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. Senior software engineer"
                        {...register("designation", { required: true })}
                    />
                    {
                        getFieldState("designation").isDirty && getFieldState("designation").isTouched && getFieldState("designation").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("designation").error?.message}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Organization
                    </Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. Google"
                        {...register("org")}
                    />
                    {
                        getFieldState("org").isDirty && getFieldState("org").isTouched && getFieldState("org").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("org").error?.message}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Location
                    </Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        {...register("location")}
                    />
                    {
                        getFieldState("location").isDirty && getFieldState("location").isTouched && getFieldState("location").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("location").error?.message}</span>
                        )
                    }
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">description</Label>
                    <Textarea
                        autoComplete="off"
                        {...register("description")}
                        className="h-64 resize-none"
                    />
                    {
                        getFieldState("description").isDirty && getFieldState("description").isTouched && getFieldState("description").error?.message && (
                            <span className="text-xs text-red-500">{getFieldState("description").error?.message}</span>
                        )
                    }
                </div>
            </div>
            <NavigationButtons />
        </form>

    )
}
