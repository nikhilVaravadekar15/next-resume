import { createContext } from "react";
import { experience } from "@/data";
import { TFormExperienceContext } from "@/types";


export const FormExperienceContext = createContext<TFormExperienceContext>({
    experiences: [experience],
    setExperiences: () => { },
});
