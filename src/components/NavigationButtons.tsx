"use client"

import {
    ArrowBigLeft,
    ArrowBigRight
} from 'lucide-react';
import React from 'react'
import { steps } from '@/data';
import { Button } from '@/components/ui/button';
import { TActiveStepContext } from '@/types/index';
import { ActiveStepContext } from '@/components/providers/ActiveStepContextProvider';


export default function NavigationButtons() {
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
            {
                (step !== steps.length - 1) && (
                    <Button
                        variant={"outline"}
                        type={"submit"}
                        className="absolute top-0 right-0 h-full text-gray-600 bg-blue-100 rounded-none hover:text-white hover:bg-blue-300"
                    >
                        <ArrowBigRight />
                    </Button>
                )
            }
        </>
    )
}
