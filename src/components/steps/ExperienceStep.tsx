"use client"

import {
    Trash2,
    PlusSquare,
} from 'lucide-react';
import { z } from 'zod';
import React from 'react';
import { useFormik } from 'formik';
import { TExperience } from '@/types/index';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { experience } from "@/data";
import { Button } from '@/components/ui/button';


export default function ExperienceStep() {

    const [skillFields, setSkillsFields] = React.useState<TExperience[]>([experience])

    return (
        <div className="m-4 border rounded">
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter experience details</span>
                <Button
                    onClick={() => {
                        setSkillsFields((prevInputFields: TExperience[]) => {
                            const data: TExperience[] = [...prevInputFields]
                            data.push(experience)

                            return data
                        })
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
                    skillFields.map((skill, index: number) => {
                        return (
                            <div key={index} className="mx-2 p-4 flex gap-4 flex-col border rounded-md">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-slate-900">Experience No. {index + 1}</span>
                                    {
                                        index != 0 && (
                                            <Button
                                                onClick={() => {
                                                    setSkillsFields((prevInputFields: TExperience[]) => {
                                                        const data: TExperience[] = [...prevInputFields]
                                                        data.splice(index, 1)
                                                        return data
                                                    })
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
                                            <Input name="education_school" type="text" placeholder="e.g. Bravo, team player" autoComplete="off" />
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Degree</Label>
                                            <Input name="education_degree" type="text" autoComplete="off" />
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Location</Label>
                                            <Input name="education_location" type="text" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="grid gap-2 grid-cols-1">
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Start Date</Label>
                                            <Input name="education_start_date" type="date" autoComplete="off" />
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">End Date</Label>
                                            <Input name="education_end_date" type="date" autoComplete="off" />
                                        </div>
                                        <div className="flex gap-1 flex-col justify-start">
                                            <Label className="font-semibold text-slate-900">Description</Label>
                                            <Input name="education_description" type="text" autoComplete="off" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
