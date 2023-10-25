import {
    TSkill,
    Tproject,
    TEducation,
    TExperience,
    TAchievement,
    TStep,
    TAboutSection,
    TCertification,
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

export const aboutSection: TAboutSection = {
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    phone: ""
}

export const education: TEducation = {
    school: "",
    degree: "",
    location: "",
    startDate: "",
}

export const skill: TSkill = {
    title: "",
    description: ""
}

export const achievement: TAchievement = {
    title: "",
    description: ""
}

export const project: Tproject = {
    title: "",
    link: "",
    description: ""
}

export const certificate: TCertification = {
    title: "",
    description: ""
}

export const experience: TExperience = {
    position: "",
    org: "",
    location: "",
    startDate: "",
    endDate: "",
    description: ""
}
