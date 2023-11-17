import {
    TDescriptor,
    TExperience,
    TEducation,
    TStep,
    TProject,
    TApplyfor,
    TAboutSection,
    TResponsetype
} from "@/types";


export const steps: TStep[] = [
    { title: "About" },
    { title: "Education" },
    { title: "Skills" },
    { title: "Achievements" },
    { title: "Projects" },
    { title: "Certification" },
    { title: "Experience" },
    { title: "Applying for" },
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

export const skill: TDescriptor = {
    title: "",
    description: ""
}

export const achievement: TDescriptor = {
    title: "",
    description: ""
}

export const project: TProject = {
    title: "",
    link: "",
    description: ""
}

export const certificate: TDescriptor = {
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

export const applyfor: TApplyfor = {
    designation: ""
}

export const responsetype: TResponsetype = {
    type: "latex"
}
