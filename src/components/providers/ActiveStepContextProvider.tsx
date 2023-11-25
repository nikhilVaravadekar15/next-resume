"use client"

import React from "react";
import { TActiveStepContext } from "@/types";


type Props = {
    children: React.ReactNode
}

export const ActiveStepContext = React.createContext<TActiveStepContext>({
    step: 0,
    setActiveStep: () => { },
});

export default function ActiveStepContextProvider({ children }: Props) {

    const [step, setStep] = React.useState<number>(0);

    function setActiveStep(index: number) {
        setStep(index)
    }

    return (
        <ActiveStepContext.Provider value={{
            step: step,
            setActiveStep: setActiveStep
        }}>
            {children}
        </ActiveStepContext.Provider>
    )
}
