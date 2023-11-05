import { z } from 'zod';

export const formSchema = z.object({
    firstname: z.string()
        .min(1, "Required")
        .max(256, "Fullname must be less than 256 characters"),
    middlename: z.string()
        .optional(),
    lastname: z.string()
        .min(1, "Required")
        .max(256, "Fullname must be less than 256 characters"),
    designation: z.string()
        .optional(),
    address: z.string()
        .min(1, "Required"),
    email: z.string()
        .min(1, "Required")
        .email("Invalid email"),
    phone: z.string()
        .min(1, "Required"),
    summary: z.string()
        .optional()
})

export const education = z.object({
    school: z.string()
        .min(1, "Required"),
    degree: z.string()
        .min(1, "Required")
        .max(256, "Fullname must be less than 256 characters"),
    location: z.string()
        .min(1, "Required"),
    startDate: z.string()
        .min(1, "Required"),
    endDate: z.string()
        .optional(),
    description: z.string()
        .optional()
})

export const educationFormSchema = z.object({
    educationArray: education.array()
})

export const descriptor = z.object({
    title: z.string()
        .min(1, "Required")
        .max(256, "Title must be less than 256 characters"),
    description: z.string()
        .optional()
})

export const skillsFormSchema = z.object({
    skillsArray: descriptor.array()
})

export const achievementsFormSchema = z.object({
    achievementsArray: descriptor.array()
})

export const project = z.object({
    title: z.string()
        .min(1, "Required")
        .max(1024, "Project title must be less than 1024 characters"),
    link: z.string()
        .optional(),
    description: z.string()
        .optional()
})

export const projectFormSchema = z.object({
    projectsArray: project.array()
})

export const certificateFormSchema = z.object({
    certs: descriptor.array()
})

export const experience = z.object({
    position: z.string()
        .min(1, "Required")
        .max(256, "Position must be less than 256 characters"),
    org: z.string()
        .min(1, "Required")
        .max(1024, "Organization name must be less than 1024 characters"),
    location: z.string()
        .optional(),
    startDate: z.string()
        .min(1, "Required"),
    endDate: z.string()
        .optional(),
    description: z.string()
        .optional()
})

export const experienceFormSchema = z.object({
    experienceArray: experience.array()
})

export const applyingfor = z.object({
    designation: z.string()
        .min(1, "Required")
        .max(256, "Designation must be less than 256 characters"),
    org: z.string()
        .optional(),
    location: z.string()
        .optional(),
    description: z.string()
        .optional()
})
