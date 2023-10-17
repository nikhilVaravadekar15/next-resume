import {
    TAboutSection,
    TAchievement,
    TEducation,
    TExperience,
    TFormAboutSectionContext,
    TSkill,
    Tproject
} from "@/types";
import { createContext } from "react";

export const aboutSection: TAboutSection = {
    firstname: "",
    middlename: "",
    lastname: "",
    designation: "",
    address: "",
    email: "",
    phone: "",
    summary: "",
}

export const achievement: TAchievement = {
    title: "",
    description: ""
}

export const experience: TExperience = {
    title: "",
    org: "",
    location: "",
    startDate: "",
    description: ""
}

export const education: TEducation = {
    school: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
    description: ""
}

export const skill: TSkill = {
    title: "",
    description: ""
}

export const project: Tproject = {
    name: "",
    link: "",
    description: ""
}

export const FormAboutSectionContext = createContext<TFormAboutSectionContext>({
    aboutSection: aboutSection,
    setAboutSection: () => { },
});

// achievements: [achievement],
// experience: [experience],
// education: [education],
// skills: [skill],
// projects: [project],
//     setProjects: () => { }
