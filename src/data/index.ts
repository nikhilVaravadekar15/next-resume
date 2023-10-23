import {
    TSkill,
    Tproject,
    TEducation,
    TExperience,
    TAchievement,
    TStep,
} from "@/types";

export const steps: TStep[] = [
    { title: "About" },
    { title: "Achievements" },
    { title: "Experience" },
    { title: "Education" },
    { title: "Skills" },
    { title: "Certification" },
    { title: "Projects" },
    { title: "Generate" },
];


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