"use client"

import {
    ArrowBigLeft,
    ArrowBigRight,
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
import { TActiveStepContext } from '@/types';
import RequestKeyDialog from '@/components/RequestKeyDialog';
import { ActiveStepContext } from '@/components/providers/ActiveStepContextProvider';


export default function GenerateStep() {

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
            <Card className="h-full flex flex-col items-center justify-center border-none">
                <CardHeader className="flex gap-2 flex-col items-center justify-center">
                    <CardTitle>Generate Resume</CardTitle>
                    <CardDescription className="text-center">
                        Your Resume, your Success Story
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-full flex gap-6 flex-col items-center justify-center">
                    <RequestKeyDialog />
                </CardContent>
            </Card >
        </>
    )
}
