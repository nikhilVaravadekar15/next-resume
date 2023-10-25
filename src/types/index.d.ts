export type TStep = {
    title: string
}

export type TAboutSection = {
    firstname: string
    middlename?: string
    lastname: string
    designation?: string
    address: string
    email: string
    phone: string
    summary?: string
}

export type TEducation = {
    school: string
    degree: string
    location: string
    startDate: string
    endDate?: string
    description?: string
}

export type TSkill = {
    title: string
    description?: string
}

export type TAchievement = {
    title: string
    description?: string
}

export type Tproject = {
    title: string
    link?: string
    description?: string
}

export type TCertification = {
    title: string
    description?: string
}

export type TExperience = {
    position: string
    org: string
    location?: string
    startDate: string
    endDate?: string
    description?: string
}

export type TActiveStepContext = {
    step: number
    setActiveStep: (index: number) => void
}

export type TFormContext = {
    aboutSection: TAboutSection
    setAboutSection: (data: TAboutSection) => void
    educations: TEducation[]
    setEducations: (data: TEducation[]) => void
    skills: TSkill[]
    setSkills: (data: TSkill[]) => void
    achievement: TAchievement[]
    setAchievements: (data: TAchievement[]) => void
    project: Tproject[]
    setProjects: (data: Tproject[]) => void
    certificates: TCertification[]
    setCertificates: (data: TCertification[]) => void
    experiences: TExperience[]
    setExperiences: (data: TExperience[]) => void
}
