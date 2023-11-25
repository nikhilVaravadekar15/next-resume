"use client"

import React from 'react'
import { TFormContext } from "@/types";
import {
    TAboutSection, TEducation, TExperience, TDescriptor, TProject, TApplyfor
} from "@/types";
import {
    aboutSection, education, skill, achievement, project, certificate, experience, applyfor
} from "@/data";

type Props = {
    children: React.ReactNode
}

export const FormContext = React.createContext<TFormContext>({
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
    setApplyingfor: () => { }
});


export default function FormContextProvider({ children }: Props) {

    const [aboutSectionFields, setAboutSectionFields] = React.useState<TAboutSection>(aboutSection)
    const [educationFields, setEducationFields] = React.useState<TEducation[]>([education])
    const [skillFields, setSkillsFields] = React.useState<TDescriptor[]>([skill])
    const [achievementsFields, setAchievementsFields] = React.useState<TDescriptor[]>([achievement])
    const [projectFields, setProjectFields] = React.useState<TProject[]>([project])
    const [certificatesFields, setCertificatesFields] = React.useState<TDescriptor[]>([certificate])
    const [experienceFields, setExperienceFields] = React.useState<TExperience[]>([experience])
    const [applyforFields, setApplyforFields] = React.useState<TApplyfor>(applyfor)

    function setAboutSection(data: TAboutSection) {
        setAboutSectionFields(data)
    }

    function setEducations(data: TEducation[]) {
        setEducationFields(data)
    }

    function setSkills(data: TDescriptor[]) {
        setSkillsFields(data)
    }

    function setAchievements(data: TDescriptor[]) {
        setAchievementsFields(data)
    }

    function setProjects(data: TProject[]) {
        setProjectFields(data)
    }

    function setCertificates(data: TDescriptor[]) {
        setCertificatesFields(data)
    }

    function setExperiences(data: TExperience[]) {
        setExperienceFields(data)
    }

    function setApplyingfor(data: TApplyfor) {
        setApplyforFields(data)
    }

    return (
        <FormContext.Provider value={{
            aboutSection: aboutSectionFields, setAboutSection: setAboutSection,
            educations: educationFields, setEducations: setEducations,
            skills: skillFields, setSkills: setSkills,
            achievement: achievementsFields, setAchievements: setAchievements,
            project: projectFields, setProjects: setProjects,
            certificates: certificatesFields, setCertificates: setCertificates,
            experiences: experienceFields, setExperiences: setExperiences,
            applyingfor: applyforFields, setApplyingfor: setApplyingfor
        }}>
            {children}
        </FormContext.Provider>
    )
}
