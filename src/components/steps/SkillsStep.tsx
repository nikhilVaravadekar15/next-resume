"use client"

import {
    Trash2,
    PlusSquare,
} from 'lucide-react';
import { z } from 'zod';
import React from 'react';
import { useFormik } from 'formik';
import { TSkill } from '@/types/index';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { skill } from "@/data";


export default function SkillsStep() {

    const [skillFields, setSkillsFields] = React.useState<TSkill[]>([skill])

    return (
        <div className="m-4 border rounded">
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter skills</span>
                <Button
                    onClick={() => {
                        setSkillsFields((prevInputFields: TSkill[]) => {
                            const data: TSkill[] = [...prevInputFields]
                            data.push(skill)

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
                                    <span className="text-lg font-semibold text-slate-900">No. {index + 1}</span>
                                    {
                                        index != 0 && (
                                            <Button
                                                onClick={() => {
                                                    setSkillsFields((prevInputFields: TSkill[]) => {
                                                        const data: TSkill[] = [...prevInputFields]
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
                                <div className="grid gap-2 grid-cols-1">
                                    <div className="flex gap-1 flex-col justify-start">
                                        <Label className="font-semibold text-slate-900">Title</Label>
                                        <Input name="skill_title" type="text" placeholder="e.g. Bravo, team player" autoComplete="off" />
                                    </div>
                                    <div className="flex gap-1 flex-col justify-start">
                                        <Label className="font-semibold text-slate-900">Description</Label>
                                        <Input name="skill_description" type="text" autoComplete="off" />
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
