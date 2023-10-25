import { createContext } from "react";
import { education } from "@/data";
import { TFormEducationContext } from "@/types";


export const FormEducationContext = createContext<TFormEducationContext>({
    educations: [education],
    setEducations: () => { },
});
