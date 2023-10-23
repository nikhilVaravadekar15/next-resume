import {
    TSkill,
    Tproject,
    TEducation,
    TExperience,
    TAchievement,
    TStep,
    TAboutSection,
} from "@/types";

export const steps: TStep[] = [
    { title: "About" },
    { title: "Education" },
    { title: "Skills" },
    { title: "Achievements" },
    { title: "Projects" },
    { title: "Certification" },
    { title: "Experience" },
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

export const aboutSection: TAboutSection = {
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    phone: ""
}
