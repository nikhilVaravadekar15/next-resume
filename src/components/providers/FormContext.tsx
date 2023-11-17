import {
    aboutSection,
    achievement,
    applyfor,
    certificate,
    education,
    experience,
    project,
    skill,
    responsetype
} from "@/data";
import { createContext } from "react";
import { TFormContext } from "@/types";


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
    applyingfor: applyfor,
    setApplyingfor: () => { },
    responsetype: responsetype,
    setResponsetype: () => { },
    mutation: () => { }
});
