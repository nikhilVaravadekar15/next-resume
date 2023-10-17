"use client"

import {
    Trash2, PlusSquare, ArrowBigLeft, ArrowBigRight
} from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Stepper from 'react-stepper-horizontal';
import {
    achievement, education, experience, project, skill
} from './providers/FormContext'
import {
    TAchievement, TEducation, TExperience, TSkill, Tproject
} from '@/types/index'


export default function EnterDetails() {

    const [activeStep, setActiveStep] = React.useState<number>(0);

    const steps = [
        { title: "About" },
        { title: "Achievements" },
        { title: "Experience" },
        { title: "Education" },
        { title: "Skills" },
        { title: "Projects" },
        { title: "Generate" },
    ];

    function getSectionComponent() {
        switch (activeStep) {
            case 0: return <AboutSectionItem />;
            case 1: return <AchievementsItem />;
            case 2: return <ExperienceItem />;
            case 3: return <EducationItem />;
            case 4: return <SkillsItem />;
            case 5: return <ProjectItem />;
            case 6: return <GenerateItem />;
            default: return null;
        }
    }

    return (
        <div className="w-full h-full overflow-y-scroll">
            <Stepper steps={steps} activeStep={activeStep} />
            <div>
                {getSectionComponent()}
                <div className="w-full p-4 flex gap-4 items-center justify-center">
                    {
                        (activeStep !== 0) && (
                            <Button
                                variant={"outline"}
                                className="text-gray-100 bg-blue-400 hover:text-white hover:bg-blue-500"
                                onClick={() => setActiveStep(activeStep - 1)}
                            >
                                <ArrowBigLeft />
                                Previous
                            </Button>
                        )
                    }
                    {
                        (activeStep !== steps.length - 1) && (
                            <Button
                                variant={"outline"}
                                className="text-gray-100 bg-blue-400 hover:text-white hover:bg-blue-500"
                                onClick={() => setActiveStep(activeStep + 1)}
                            >
                                Next
                                <ArrowBigRight />
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

function AboutSectionItem() {
    return (
        <div className="m-4 border rounded">
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
    )
}

function AchievementsItem() {

    const [inputFields, setInputFields] = React.useState<TAchievement[]>([achievement])

    return (
        <div className="m-4 border rounded">
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter achievements details</span>
                <Button
                    onClick={() => {
                        setInputFields((prevInputFields: TAchievement[]) => {
                            const data: TAchievement[] = [...prevInputFields]
                            data.push(achievement)

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
                                                    setInputFields((prevInputFields: TAchievement[]) => {
                                                        const data: TAchievement[] = [...prevInputFields]
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
    )
}

function ExperienceItem() {

    const [skillFields, setSkillsFields] = React.useState<TExperience[]>([experience])

    return (
        <div className="m-4 border rounded">
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter experience details</span>
                <Button
                    onClick={() => {
                        setSkillsFields((prevInputFields: TExperience[]) => {
                            const data: TExperience[] = [...prevInputFields]
                            data.push(experience)

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
    )
}

function EducationItem() {

    const [skillFields, setSkillsFields] = React.useState<TEducation[]>([education])

    return (
        <div className="m-4 border rounded">
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter education details</span>
                <Button
                    onClick={() => {
                        setSkillsFields((prevInputFields: TEducation[]) => {
                            const data: TEducation[] = [...prevInputFields]
                            data.push(education)

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
    )
}

function SkillsItem() {

    const [skillFields, setSkillsFields] = React.useState<TSkill[]>([skill])

    return (
        <div className="m-4 border rounded">
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter skills</span>
                <Button
                    onClick={() => {
                        setSkillsFields((prevInputFields: TSkill[]) => {
                            const data: TSkill[] = [...prevInputFields]
                            data.push(skill)

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
    )
}

function ProjectItem() {

    const [inputFields, setInputFields] = React.useState<Tproject[]>([project])

    return (
        <div className="m-4 border rounded">
            <div className="p-4 flex items-center justify-between">
                <span className="text-base font-medium">Enter project details</span>
                <Button
                    onClick={() => {
                        setInputFields((prevInputFields: Tproject[]) => {
                            const data: Tproject[] = [...prevInputFields]
                            data.push(project)

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
    )
}

function GenerateItem() {
    const slogans: string[] = [
        "Crafting Careers, One Word at a Time",
        "Your Gateway to Professional Success",
        "Resumes that Stand Out, Careers that Soar",
        "Elevate Your Profile, Elevate Your Career",
        "Where Ambitions Meet Opportunities",
        "Your Journey to Professional Excellence Begins Here",
        "Empowering Professionals with Impressive Resumes",
        "Unlock Your Career Potential with Tailored Resumes",
        "Building Resumes, Building Futures",
        "Your Resume, Your Success Story",
    ]

    return (
        <Card className="m-4 mt-8 h-[256px] flex flex-col items-center justify-center">
            <CardHeader className="flex gap-2 flex-col items-center justify-center">
                <CardTitle>Generate Resume</CardTitle>
                <CardDescription className="text-center">
                    {
                        slogans[Math.floor(Math.random() * slogans.length)]
                    }
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button
                    variant={"outline"}
                    className="text-gray-100 bg-red-400 hover:text-white hover:bg-red-500"
                >
                    Submit
                    <ArrowBigRight />
                </Button>
            </CardContent>
        </Card>
    )
}
