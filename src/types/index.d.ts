
export type TAboutSection = {
    firstname: string
    middlename?: string
    lastname: string
    image?: File
    designation: string
    address: string
    email: string
    phone: string
    summary: string
}

export type TAchievement = {
    title: string
    description: string
}

export type TExperience = {
    title: string
    org: string
    location: string
    startDate: string
    endDate?: string
    description?: string
}

export type TEducation = {
    school: string
    degree: string
    location: string
    startDate: string
    endDate: string
    description: string
}

export type TSkill = {
    title: string
    description: string
}

export type Tproject = {
    name: string
    link?: string
    description?: string
}

export type TFormAboutSectionContext = {
    aboutSection: TAboutSection
    setAboutSection: (event: any) => void
}

export type TFormProjectsContext = {
    // achievements: TAchievement[]
    // experience: TExperience[]
    // education: TEducation[]
    // skills: TSkill[]
    projects: Tproject[]
    setProjects: (index?: number) => void
}
