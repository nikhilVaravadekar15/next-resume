import {
  TDescriptor,
  TEducation,
  TExperience,
  TForm, TProject
} from "@/types"
import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPrompt(form: TForm) {

  let prompt: string = ""

  const startinginfo: string = `
  I want you to act as my resueme builder that will help me secure a job.
    
  I will provide you with two sets of information. The first set includes my work experience, educational background, skills, and any relevant certifications or awards. The second set is a detailed description of the job I'm applying for, including the company name, job title, responsibilities, and required qualifications.
  
  Based on this information, create a resume that highlights the skills and experiences that align most closely with the job requirements. Emphasize the value I can bring to the company and how my qualifications make me a strong candidate for the position. The language should be formal, concise, and positive.
  
  Include feedback on the following points:
  - add appropriate sections for making my resume more readable. 
  - add appropriate action verbs.
  - make my resume easier to scan.
  - add appropriate buzzwords based on the context

  then provide me the response in latex format, This will make it easier for me to convert the information into a beautiful and professionally formatted document.

  Here's my information delimited by triple backticks:
  \`\`\`
  `
  prompt = prompt + startinginfo

  const constactInfo: string = `1. Contact Information: ${form.aboutSection.firstname} ${form.aboutSection?.middlename} ${form.aboutSection.lastname}, Email: ${form.aboutSection.email}, Phone: ${form.aboutSection.phone}, ${form.aboutSection?.designation ? `current designation: ${form.aboutSection.designation}` : ""}, address: ${form.aboutSection.address}, ${form.aboutSection?.summary}`
  prompt = prompt + constactInfo + `\n`

  let educationInfo: string = "Education: \n"
  for (let index = 0; index < form.educations.length; index++) {
    const education: TEducation = form.educations[index];
    educationInfo = educationInfo + `${index + 1}: school/college: ${education.school}, degree: ${education.degree}, location: ${education.location}, start-date:  ${education.startDate}, end-date: ${education?.endDate ? education.endDate : "ongoing"},  ${education.description} \n`
  }
  prompt = prompt + educationInfo

  if (form.skills != undefined && form?.skills.length != 0) {
    let skillsInfo: string = "Skills: \n"
    for (let index = 0; index < form.skills.length; index++) {
      const skill: TDescriptor = form.skills[index];
      skillsInfo = skillsInfo + `${index + 1}: title: ${skill.title}, ${skill?.description ? skill.description : ""} \n`
    }
    prompt = prompt + skillsInfo + `\n`
  }

  if (form.achievement != undefined && form?.achievement.length != 0) {
    let achievementsInfo: string = "Achievements: \n"
    for (let index = 0; index < form.achievement.length; index++) {
      const achievement: TDescriptor = form.achievement[index];
      achievementsInfo = achievementsInfo + `${index + 1}: title: ${achievement.title}, ${achievement?.description ? achievement.description : ""} \n`
    }
    prompt = prompt + achievementsInfo
  }

  if (form.project != undefined && form?.project.length != 0) {
    let projectsInfo: string = "Projects: \n"
    for (let index = 0; index < form.project.length; index++) {
      const project: TProject = form.project[index];
      projectsInfo = projectsInfo + `${index + 1}: title: ${project.title},  ${project?.link ? `Link: ${project.link},` : ""} ${project?.description ? `Description: ${project.description}` : ""} \n`
    }
    prompt = prompt + projectsInfo + `\n`
  }

  if (form.certificates != undefined && form?.certificates.length != 0) {
    let certificatesInfo: string = "Certifications: \n"
    for (let index = 0; index < form.certificates.length; index++) {
      const certificate: TDescriptor = form.certificates[index];
      certificatesInfo = certificatesInfo + `${index + 1}: title: ${certificate.title},  ${certificate?.description ? `Description: ${certificate.description}` : ""} \n`
    }
    prompt = prompt + certificatesInfo + `\n`
  }

  if (form.experiences != undefined && form?.experiences.length != 0) {
    let experiencesInfo: string = "Work experience: \n"
    for (let index = 0; index < form.experiences.length; index++) {
      const experience: TExperience = form.experiences[index];
      experiencesInfo = experiencesInfo + `${index + 1}: Position: ${experience.position}, Organization: ${experience.org}, Location: ${experience.location}, start-date: ${experience.startDate}, end-date: ${experience?.endDate ? experience.endDate : "ongoing"},  ${experience.description} \n`
    }
    prompt = prompt + experiencesInfo + `\n`
  }

  prompt = prompt + "\n ``` \n"

  let applyingfor: string = `
  Here's the job I'm applying for delimited by triple backticks: \n 
  \`\`\`
  Role: ${form.applyingfor.designation}, ${form.applyingfor?.org ? `Organization: ${form.applyingfor.org},` : ""} ${form.applyingfor?.location ? `Location: ${form.applyingfor.location}, ` : ""} ${form.applyingfor?.description ? `Description: ${form.applyingfor.description}` : ""} \n
  \`\`\` \n
  `
  prompt = prompt + applyingfor

  return prompt
}
