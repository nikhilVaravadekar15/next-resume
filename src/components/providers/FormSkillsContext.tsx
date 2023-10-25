import { createContext } from "react";
import { skill } from "@/data";
import { TFormSkillsContext } from "@/types"

export const FormSkillsContext = createContext<TFormSkillsContext>({
    skills: [skill],
    setSkills: () => { },
});
