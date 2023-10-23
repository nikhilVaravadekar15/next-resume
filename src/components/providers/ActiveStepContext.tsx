import { createContext } from "react";
import { TActiveStepContext } from "@/types";


export const ActiveStepContext = createContext<TActiveStepContext>({
    step: 0,
    setActiveStep: () => { },
});
