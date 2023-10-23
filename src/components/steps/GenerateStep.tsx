"use client"

import {
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

export default function GenerateStep() {
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

    return (
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
                    className="text-gray-100 bg-red-400 hover:text-white hover:bg-red-500"
                >
                    Submit
                    <ArrowBigRight />
                </Button>
            </CardContent>
        </Card>
    )
}
