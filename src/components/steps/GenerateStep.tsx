"use client"

import {
    ArrowBigLeft,
    ArrowBigRight
} from 'lucide-react'
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
        aboutSection, educations, skills, achievement, project, certificates, experiences,
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
                <CardContent>
                    <Button
                        variant={"outline"}
                        onClick={() => {
                            mutation({
                                aboutSection, educations, skills, achievement, project, certificates, experiences
                            })
                        }}
                        className="text-gray-100 bg-red-400 hover:text-white hover:bg-red-500"
                    >
                        Submit
                        <ArrowBigRight />
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}
