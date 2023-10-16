"use client"

import {
    Trash2, PlusSquare
} from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


export default function EnterDetails() {

    return (
        <form
            onSubmit={(event: any) => {
                event.preventDefault()
                console.log(event)
            }}
            className="p-6 h-full w-full flex gap-5 flex-col overflow-y-scroll"
        >
            <Accordion type="single" collapsible={true} className="flex gap-3 flex-col">
                <AboutSectionAccordion />
                <AchievementsAccordion />
                <ExperienceAccordion />
                <EducationAccordion />
                <SkillsAccordion />
                <ProjectAccordion />
            </Accordion>
            <Button
                type="submit"
                variant={"secondary"}
                className="w-fit text-base font-extrabold border bg-slate-200 hover:bg-slate-300"
            >
                Submit
            </Button>
        </form >
    )
}

function AboutSectionAccordion() {
    return (
        <AccordionItem value="about-section" className="border-none flex gap-1 flex-col">
            <AccordionTrigger className="h-12 p-2 border flex items-center rounded-md hover:no-underline">
                <div className="text-lg font-semibold">About section</div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="border rounded-md">
                    <div className="p-4 grid gap-2 grid-cols-1">
                        <div className="flex gap-1 flex-col justify-start">
                            <Label className="font-semibold text-slate-900">First name</Label>
                            <Input required={true} name="firstname" type="text" placeholder="e.g. John" autoComplete="off" />
                        </div>
                        <div className="flex gap-1 flex-col justify-start">
                            <Label className="font-semibold text-slate-900">Middle Name <span className="opt-text">(optional)</span></Label>
                            <Input name="middlename" type="text" placeholder="e.g. John" autoComplete="off" />
                        </div>
                        <div className="flex gap-1 flex-col justify-start">
                            <Label className="font-semibold text-slate-900">Last Name</Label>
                            <Input name="lastname" type="text" placeholder="e.g. John" autoComplete="off" />
                        </div>
                    </div>
                    <div className="p-4 grid gap-2 grid-cols-1">
                        <div className="flex gap-1 flex-col justify-start">
                            <Label className="font-semibold text-slate-900">Your Image</Label>
                            <Input name="image" type="file" />
                        </div>
                        <div className="flex gap-1 flex-col justify-start">
                            <Label className="font-semibold text-slate-900">Designation</Label>
                            <Input name="designation" type="text" placeholder="e.g. Sr.Accountants" autoComplete="off" />
                        </div>
                        <div className="flex gap-1 flex-col justify-start">
                            <Label className="font-semibold text-slate-900">Address</Label>
                            <Input name="address" type="text" placeholder="e.g. Lake Street-23" autoComplete="off" />
                        </div>
                    </div>
                    <div className="p-4 grid gap-2 grid-cols-1">
                        <div className="flex gap-1 flex-col justify-start">
                            <Label className="font-semibold text-slate-900">Email</Label>
                            <Input name="email" type="email" placeholder="e.g. johndoe@gmail.com" autoComplete="off" />
                        </div>
                        <div className="flex gap-1 flex-col justify-start">
                            <Label className="font-semibold">Phone No:</Label>
                            <Input name="phone" type="text" placeholder="e.g. 456-768-798" autoComplete="off" />
                        </div>
                        <div className="flex gap-1 flex-col justify-start">
                            <Label className="font-semibold text-slate-900">Summary</Label>
                            <Input name="summary" type="text" placeholder="e.g. Doe" autoComplete="off" />
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}

function AchievementsAccordion() {
    type TAchievements = {
        title: string
        description: string
    }

    const [inputFields, setInputFields] = React.useState<TAchievements[]>([
        { title: "", description: "" }
    ])

    return (
        <AccordionItem value="achievements-section" className="border-none flex gap-1 flex-col">
            <AccordionTrigger className="h-12 p-2 border flex items-center rounded-md hover:no-underline">
                <div className="text-lg font-semibold">Achievements</div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="border rounded-md">
                    <div className="p-4 flex items-center justify-between">
                        <span className="text-base font-medium">Enter achievements details</span>
                        <Button
                            onClick={() => {
                                setInputFields((prevInputFields: TAchievements[]) => {
                                    const data: TAchievements[] = [...prevInputFields]
                                    data.push({
                                        title: "", description: ""
                                    })

                                    return data
                                })
                            }}
                            variant={"outline"} type="button"
                            className="flex gap-1 items-center justify-center"
                        >
                            <PlusSquare />
                            <span className="font-bold">Add</span>
                        </Button>
                    </div>
                    <div className="mx-2 my-2 flex gap-1 flex-col">
                        {
                            inputFields.map((field, index: number) => {
                                return (
                                    <div key={index} className="mx-2 p-4 flex gap-4 flex-col border rounded-md">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold text-slate-900">Achievement no. {index + 1}</span>
                                            {
                                                index != 0 && (
                                                    <Button
                                                        onClick={() => {
                                                            setInputFields((prevInputFields: TAchievements[]) => {
                                                                const data: TAchievements[] = [...prevInputFields]
                                                                data.splice(index, 1)
                                                                return data
                                                            })
                                                        }}
                                                        variant={"link"} type="button"
                                                    >
                                                        <Trash2 color={"red"} />
                                                    </Button>
                                                )
                                            }
                                        </div>
                                        <div className="grid gap-2 grid-cols-1">
                                            <div className="flex gap-1 flex-col justify-start">
                                                <Label className="font-semibold text-slate-900">Title</Label>
                                                <Input name="achieve_title" type="text" placeholder="e.g. Bravo, team player" autoComplete="off" />
                                            </div>
                                            <div className="flex gap-1 flex-col justify-start">
                                                <Label className="font-semibold text-slate-900">Description</Label>
                                                <Input name="achieve_description" type="text" autoComplete="off" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}

function ExperienceAccordion() {
    type TExperience = {
        title: string
        org: string
        location: string
        startDate: string
        endDate: string
        description: string
    }

    const [skillFields, setSkillsFields] = React.useState<TExperience[]>([
        {
            title: "",
            org: "",
            location: "",
            startDate: "",
            endDate: "",
            description: ""
        }
    ])

    return (
        <AccordionItem value="experience-section" className="border-none flex gap-1 flex-col">
            <AccordionTrigger className="h-12 p-2 border flex items-center rounded-md hover:no-underline">
                <div className="text-lg font-semibold">Experience</div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="border rounded-md">
                    <div className="p-4 flex items-center justify-between">
                        <span className="text-base font-medium">Enter experience details</span>
                        <Button
                            onClick={() => {
                                setSkillsFields((prevInputFields: TExperience[]) => {
                                    const data: TExperience[] = [...prevInputFields]
                                    data.push({
                                        title: "",
                                        org: "",
                                        location: "",
                                        startDate: "",
                                        endDate: "",
                                        description: ""
                                    })

                                    return data
                                })
                            }}
                            variant={"outline"} type="button"
                            className="flex gap-1 items-center justify-center"
                        >
                            <PlusSquare />
                            <span className="font-bold">Add</span>
                        </Button>
                    </div>
                    <div className="mx-2 my-2 flex gap-1 flex-col">
                        {
                            skillFields.map((skill, index: number) => {
                                return (
                                    <div key={index} className="mx-2 p-4 flex gap-4 flex-col border rounded-md">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold text-slate-900">Experience No. {index + 1}</span>
                                            {
                                                index != 0 && (
                                                    <Button
                                                        onClick={() => {
                                                            setSkillsFields((prevInputFields: TExperience[]) => {
                                                                const data: TExperience[] = [...prevInputFields]
                                                                data.splice(index, 1)
                                                                return data
                                                            })
                                                        }}
                                                        variant={"link"} type="button"
                                                    >
                                                        <Trash2 color={"red"} />
                                                    </Button>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-5 flex-col">
                                            <div className="grid gap-2 grid-cols-1">
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">School / College</Label>
                                                    <Input name="education_school" type="text" placeholder="e.g. Bravo, team player" autoComplete="off" />
                                                </div>
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">Degree</Label>
                                                    <Input name="education_degree" type="text" autoComplete="off" />
                                                </div>
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">Location</Label>
                                                    <Input name="education_location" type="text" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="grid gap-2 grid-cols-1">
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">Start Date</Label>
                                                    <Input name="education_start_date" type="date" autoComplete="off" />
                                                </div>
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">End Date</Label>
                                                    <Input name="education_end_date" type="date" autoComplete="off" />
                                                </div>
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">Description</Label>
                                                    <Input name="education_description" type="text" autoComplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}

function EducationAccordion() {
    type TEducation = {
        school: string
        degree: string
        location: string
        startDate: string
        endDate: string
        description: string
    }

    const [skillFields, setSkillsFields] = React.useState<TEducation[]>([
        {
            school: "",
            degree: "",
            location: "",
            startDate: "",
            endDate: "",
            description: ""
        }
    ])

    return (
        <AccordionItem value="education-section" className="border-none flex gap-1 flex-col">
            <AccordionTrigger className="h-12 p-2 border flex items-center rounded-md hover:no-underline">
                <div className="text-lg font-semibold">Education</div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="border rounded-md">
                    <div className="p-4 flex items-center justify-between">
                        <span className="text-base font-medium">Enter education details</span>
                        <Button
                            onClick={() => {
                                setSkillsFields((prevInputFields: TEducation[]) => {
                                    const data: TEducation[] = [...prevInputFields]
                                    data.push({
                                        school: "",
                                        degree: "",
                                        location: "",
                                        startDate: "",
                                        endDate: "",
                                        description: ""
                                    })

                                    return data
                                })
                            }}
                            variant={"outline"} type="button"
                            className="flex gap-1 items-center justify-center"
                        >
                            <PlusSquare />
                            <span className="font-bold">Add</span>
                        </Button>
                    </div>
                    <div className="mx-2 my-2 flex gap-1 flex-col">
                        {
                            skillFields.map((skill, index: number) => {
                                return (
                                    <div key={index} className="mx-2 p-4 flex gap-4 flex-col border rounded-md">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold text-slate-900">No. {index + 1}</span>
                                            {
                                                index != 0 && (
                                                    <Button
                                                        onClick={() => {
                                                            setSkillsFields((prevInputFields: TEducation[]) => {
                                                                const data: TEducation[] = [...prevInputFields]
                                                                data.splice(index, 1)
                                                                return data
                                                            })
                                                        }}
                                                        variant={"link"} type="button"
                                                    >
                                                        <Trash2 color={"red"} />
                                                    </Button>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-5 flex-col">
                                            <div className="grid gap-2 grid-cols-1">
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">School / College</Label>
                                                    <Input name="education_school" type="text" placeholder="e.g. Bravo, team player" autoComplete="off" />
                                                </div>
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">Degree</Label>
                                                    <Input name="education_degree" type="text" autoComplete="off" />
                                                </div>
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">Location</Label>
                                                    <Input name="education_location" type="text" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="grid gap-2 grid-cols-1">
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">Start Date</Label>
                                                    <Input name="education_start_date" type="date" autoComplete="off" />
                                                </div>
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">End Date</Label>
                                                    <Input name="education_end_date" type="date" autoComplete="off" />
                                                </div>
                                                <div className="flex gap-1 flex-col justify-start">
                                                    <Label className="font-semibold text-slate-900">Description</Label>
                                                    <Input name="education_description" type="text" autoComplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}

function SkillsAccordion() {
    type TSkill = {
        title: string
        description: string
    }

    const [skillFields, setSkillsFields] = React.useState<TSkill[]>([
        { title: "", description: "" }
    ])

    return (
        <AccordionItem value="skills-section" className="border-none flex gap-1 flex-col">
            <AccordionTrigger className="h-12 p-2 border flex items-center rounded-md hover:no-underline">
                <div className="text-lg font-semibold">Skills</div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="border rounded-md">
                    <div className="p-4 flex items-center justify-between">
                        <span className="text-base font-medium">Enter skills</span>
                        <Button
                            onClick={() => {
                                setSkillsFields((prevInputFields: TSkill[]) => {
                                    const data: TSkill[] = [...prevInputFields]
                                    data.push({
                                        title: "", description: ""
                                    })

                                    return data
                                })
                            }}
                            variant={"outline"} type="button"
                            className="flex gap-1 items-center justify-center"
                        >
                            <PlusSquare />
                            <span className="font-bold">Add</span>
                        </Button>
                    </div>
                    <div className="mx-2 my-2 flex gap-1 flex-col">
                        {
                            skillFields.map((skill, index: number) => {
                                return (
                                    <div key={index} className="mx-2 p-4 flex gap-4 flex-col border rounded-md">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold text-slate-900">No. {index + 1}</span>
                                            {
                                                index != 0 && (
                                                    <Button
                                                        onClick={() => {
                                                            setSkillsFields((prevInputFields: TSkill[]) => {
                                                                const data: TSkill[] = [...prevInputFields]
                                                                data.splice(index, 1)
                                                                return data
                                                            })
                                                        }}
                                                        variant={"link"} type="button"
                                                    >
                                                        <Trash2 color={"red"} />
                                                    </Button>
                                                )
                                            }
                                        </div>
                                        <div className="grid gap-2 grid-cols-1">
                                            <div className="flex gap-1 flex-col justify-start">
                                                <Label className="font-semibold text-slate-900">Title</Label>
                                                <Input name="skill_title" type="text" placeholder="e.g. Bravo, team player" autoComplete="off" />
                                            </div>
                                            <div className="flex gap-1 flex-col justify-start">
                                                <Label className="font-semibold text-slate-900">Description</Label>
                                                <Input name="skill_description" type="text" autoComplete="off" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}

function ProjectAccordion() {
    type Tproject = {
        name: string
        link: string
        description: string
    }

    const [inputFields, setInputFields] = React.useState<Tproject[]>([
        { name: "", link: "", description: "" }
    ])

    return (
        <AccordionItem value="projects-section" className="border-none flex gap-1 flex-col">
            <AccordionTrigger className="h-12 p-2 border flex items-center rounded-md hover:no-underline">
                <div className="text-lg font-semibold">Projects</div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="border rounded-md">
                    <div className="p-4 flex items-center justify-between">
                        <span className="text-base font-medium">Enter project details</span>
                        <Button
                            onClick={() => {
                                setInputFields((prevInputFields: Tproject[]) => {
                                    const data: Tproject[] = [...prevInputFields]
                                    data.push({
                                        name: "", link: "", description: ""
                                    })

                                    return data
                                })
                            }}
                            variant={"outline"} type="button"
                            className="flex gap-1 items-center justify-center"
                        >
                            <PlusSquare />
                            <span className="font-bold">Add</span>
                        </Button>
                    </div>
                    <div className="mx-2 my-2 flex gap-1 flex-col">
                        {
                            inputFields.map((field, index: number) => {
                                return (
                                    <div key={index} className="mx-2 p-4 flex gap-4 flex-col border rounded-md">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold text-slate-900">Project no. {index + 1}</span>
                                            {
                                                index != 0 && (
                                                    <Button
                                                        onClick={() => {
                                                            setInputFields((prevInputFields: Tproject[]) => {
                                                                const data: Tproject[] = [...prevInputFields]
                                                                data.splice(index, 1)
                                                                return data
                                                            })
                                                        }}
                                                        variant={"link"} type="button"
                                                    >
                                                        <Trash2 color={"red"} />
                                                    </Button>
                                                )
                                            }
                                        </div>
                                        <div className="grid gap-2 grid-cols-1">
                                            <div className="flex gap-1 flex-col justify-start">
                                                <Label className="font-semibold text-slate-900">Project Name</Label>
                                                <Input name="project_title" type="text" placeholder="e.g. next-resume" autoComplete="off" />
                                            </div>
                                            <div className="flex gap-1 flex-col justify-start">
                                                <Label className="font-semibold text-slate-900">Project link</Label>
                                                <Input name="project_url" type="url" autoComplete="off" />
                                            </div>
                                            <div className="flex gap-1 flex-col justify-start">
                                                <Label className="font-semibold text-slate-900">Description</Label>
                                                <Input name="project_description" type="text" autoComplete="off" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}
