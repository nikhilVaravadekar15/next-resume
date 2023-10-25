import { z } from "zod";
import {
    formSchema,
    education, educationFormSchema,
    descriptor,
    skillsFormSchema,
    achievementsFormSchema,
    project, projectFormSchema,
    certificateFormSchema,
    experience, experienceFormSchema
} from '@/zod/index';

export type TStep = {
    title: string
}

export type TAboutSection = z.infer<typeof formSchema>

export type TEducation = z.infer<typeof education>

export type TEducations = z.infer<typeof educationFormSchema>

export type TDescriptor = z.infer<typeof descriptor>

export type TSkills = z.infer<typeof skillsFormSchema>

export type TAchievements = z.infer<typeof achievementsFormSchema>

export type TProject = z.infer<typeof project>

export type TProjects = z.infer<typeof projectFormSchema>

export type TCertification = z.infer<typeof certificateFormSchema>

export type TExperience = z.infer<typeof experience>

export type TExperiences = z.infer<typeof experienceFormSchema>

export type TActiveStepContext = {
    step: number
    setActiveStep: (index: number) => void
}

export type TFormContext = {
    aboutSection: TAboutSection
    setAboutSection: (data: TAboutSection) => void
    educations: TEducation[]
    setEducations: (data: TEducation[]) => void
    skills: TDescriptorll[]
    setSkills: (data: TDescriptor[]) => void
    achievement: TDescriptor[],
    setAchievements: (data: TDescriptor[]) => void
    project: Tproject[]
    setProjects: (data: Tproject[]) => void
    certificates: TDescriptor[]
    setCertificates: (data: TDescriptor[]) => void
    experiences: TExperience[]
    setExperiences: (data: TExperience[]) => void
}
