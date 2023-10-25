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

export type TFormAboutSectionContext = {
    aboutSection: TAboutSection
    setAboutSection: (data: TAboutSection) => void
}

export type TFormEducationContext = {
    educations: TEducation[]
    setEducations: (data: TEducation[]) => void
}

export type TFormSkillsContext = {
    skills: TSkill[]
    setSkills: (data: TSkill[]) => void
}

export type TFormAchievementsContext = {
    achievement: TAchievement[]
    setAchievements: (data: TAchievement[]) => void
}

export type TFormProjectsContext = {
    project: Tproject[]
    setProjects: (data: Tproject[]) => void
}

export type TFormCertificationContext = {
    certificates: TCertification[]
    setCertificates: (data: TCertification[]) => void
}

export type TFormExperienceContext = {
    experiences: TExperience[]
    setExperiences: (data: TExperience[]) => void
}
