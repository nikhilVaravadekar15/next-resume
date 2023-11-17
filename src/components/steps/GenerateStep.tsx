"use client"

import {
    ArrowBigLeft,
    ArrowBigRight,
    Info
} from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from 'react';
import { Button } from '@/components/ui/button';
import { FormContext } from '@/components/providers/FormContext';
import { TFormContext, TActiveStepContext } from '@/types/index';
import { ActiveStepContext } from '@/components/providers/ActiveStepContext';


const slogans: string[] = [
    "Crafting Careers, One Word at a Time",
    "Your Gateway to Professional Success",
    "Resumes that Stand Out, Careers that Soar",
    "Elevate Your Profile, Elevate Your Career",
    "Where Ambitions Meet Opportunities",
    "Your Journey to Professional Excellence Begins Here",
    "Empowering Professionals with Impressive Resumes",
    "Unlock Your Career Potential with Tailored Resumes",
    "Building Resumes, Building Futures",
    "Your Resume, Your Success Story",
]

export default function GenerateStep() {

    const {
        aboutSection, educations, skills, achievement, project, certificates, experiences, applyingfor,
        responsetype, setResponsetype,
        mutation
    } = React.useContext<TFormContext>(FormContext)
    const { step, setActiveStep } = React.useContext<TActiveStepContext>(ActiveStepContext)

    return (
        <>
            {
                (step != 0) && (
                    <Button
                        variant={"outline"}
                        className="absolute left-0 top-0 h-full text-gray-600 bg-blue-100 rounded-none hover:text-white hover:bg-blue-300"
                        onClick={() => setActiveStep(step - 1)}
                    >
                        <ArrowBigLeft />
                    </Button>
                )
            }
            <Card className="m-4 mt-8 h-[256px] flex flex-col items-center justify-center">
                <CardHeader className="flex gap-2 flex-col items-center justify-center">
                    <CardTitle>Generate Resume</CardTitle>
                    <CardDescription className="text-center">
                        {
                            slogans[Math.floor(Math.random() * slogans.length)]
                        }
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-full flex gap-6 flex-col items-center justify-center">
                    <div className="w-full flex gap-2 items-center justify-evenly">
                        <div className="flex flex-col gap-2 lg:flex-row">
                            Select the appropriate response type
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="cursor-pointer" />
                                    </TooltipTrigger>
                                    <TooltipContent className="w-72">
                                        <p className="p-2">
                                            {"This will help chatgpt to make a formal, concise, and positive resume, also it will be easier for you to convert the response into a beautiful and professionally formatted document."}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <Select onValueChange={(value: string) => {
                            setResponsetype({
                                type: value
                            })
                        }}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Response type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Types</SelectLabel>
                                    <SelectItem value="latex">Latex</SelectItem>
                                    <SelectItem value="markdown">Markdown</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        variant={"outline"}
                        onClick={() => {
                            mutation({
                                aboutSection,
                                educations,
                                skills,
                                achievement,
                                project,
                                certificates,
                                experiences,
                                applyingfor,
                                responsetype
                            })
                        }}
                        className="text-gray-100 bg-red-400 hover:text-white hover:bg-red-500"
                    >
                        Submit
                        <ArrowBigRight />
                    </Button>
                </CardContent>
            </Card >
        </>
    )
}
