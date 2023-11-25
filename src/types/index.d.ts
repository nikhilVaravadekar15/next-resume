import { z } from "zod";
import {
    formSchema,
    education, educationFormSchema,
    descriptor,
    skillsFormSchema,
    achievementsFormSchema,
    project, projectFormSchema,
    certificateFormSchema,
    experience, experienceFormSchema,
    applyingfor,
    apikey
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

export type TApplyfor = z.infer<typeof applyingfor>

export type TApikey = z.infer<typeof apikey>

export type TActiveStepContext = {
    step: number
    setActiveStep: (index: number) => void
}

export type TApikeyContext = {
    withKey: boolean
    setWithKey: (key: boolean) => void
    key: string
    setKey: (key: string) => void
}

export type TForm = {
    aboutSection: TAboutSection
    educations: TEducation[]
    skills?: TDescriptor[]
    achievement?: TDescriptor[],
    project?: Tproject[]
    certificates?: TDescriptor[]
    experiences?: TExperience[]
    applyingfor: TApplyfor
}

export type TFormContext = TForm & {
    setAboutSection: (data: TAboutSection) => void
    setEducations: (data: TEducation[]) => void
    setSkills: (data: TDescriptor[]) => void
    setAchievements: (data: TDescriptor[]) => void
    setProjects: (data: Tproject[]) => void
    setCertificates: (data: TDescriptor[]) => void
    setExperiences: (data: TExperience[]) => void
    setApplyingfor: (data: TApplyfor) => void
}
