import { createContext } from "react";
import { TFormContext } from "@/types";
import { aboutSection, achievement, certificate, education, experience, project, skill } from "@/data";


export const FormContext = createContext<TFormContext>({
    aboutSection: aboutSection,
    setAboutSection: () => { },
    educations: [education],
    setEducations: () => { },
    skills: [skill],
    setSkills: () => { },
    achievement: [achievement],
    setAchievements: () => { },
    project: [project],
    setProjects: () => { },
    certificates: [certificate],
    setCertificates: () => { },
    experiences: [experience],
    setExperiences: () => { },
    mutation: () => { }
});
