"use client"

import {
    Trash2,
    PlusSquare,
} from 'lucide-react';
import { z } from 'zod';
import React from 'react';
import { certificate } from "@/data";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import NavigationButtons from '@/components/NavigationButtons';
import { TActiveStepContext, TCertification, TFormContext } from '@/types/index';
import { FormContext } from '@/components/providers/FormContext';
import { ActiveStepContext } from '@/components/providers/ActiveStepContext';
import { certificateFormSchema } from '@/zod';


export default function CertificationStep() {

    const { setCertificates } = React.useContext<TFormContext>(FormContext)
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)

    const {
        register,
        control,
        getFieldState,
        handleSubmit,
        formState: { errors }
    } = useForm<TCertification>({
        resolver: zodResolver(certificateFormSchema),
        mode: "all",
        defaultValues: {
            certs: [certificate]
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "certs",
        control
    });


    return (
        <form
            className="m-4 border rounded"
            onSubmit={handleSubmit((data: TCertification) => {
                setCertificates(data.certs)
                setActiveStep(step + 1)
            })}
        >
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Completed Certifications</span>
                <Button
                    onClick={() => {
                        append(certificate)
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
                                    <span className="text-lg font-semibold text-slate-900">Certificate no. {index + 1}</span>
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
                                            placeholder="e.g. AWS certified cloud practitioner"
                                            {...register(`certs.${index}.title` as const, { required: true })}
                                        />
                                        {
                                            getFieldState(`certs.${index}.title`).isDirty && getFieldState(`certs.${index}.title`).isTouched && getFieldState(`certs.${index}.title`).error?.message && (
                                                <span className="text-xs text-red-500">{getFieldState(`certs.${index}.title`).error?.message}</span>
                                            )
                                        }
                                    </div>
                                    <div className="flex gap-1 flex-col justify-start">
                                        <Label className="font-semibold text-slate-900">Description</Label>
                                        <Input
                                            type="text"
                                            autoComplete="off"
                                            {...register(`certs.${index}.description` as const, { required: true })}
                                        />
                                        {
                                            getFieldState(`certs.${index}.description`).isDirty && getFieldState(`certs.${index}.description`).isTouched && getFieldState(`certs.${index}.description`).error?.message && (
                                                <span className="text-xs text-red-500">{getFieldState(`certs.${index}.description`).error?.message}</span>
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
