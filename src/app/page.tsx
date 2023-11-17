"use client"

import {
  ArrowBigLeft, Download
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react";
import { generateResume } from "@/http";
import { useMutation } from "react-query";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import EnterDetails from "@/components/EnterDetails";
import LoadingSpinner from "@/components/LoadingSpinner";
import { FormContext } from "@/components/providers/FormContext";
import {
  TAboutSection, TEducation, TExperience, TDescriptor, TProject, TForm, TApplyfor, TResponsetype
} from "@/types";
import {
  aboutSection, education, skill, achievement, project, certificate, experience, applyfor, responsetype
} from "@/data";


export default function Home() {

  const { toast } = useToast()
  const [aboutSectionFields, setAboutSectionFields] = React.useState<TAboutSection>(aboutSection)
  const [educationFields, setEducationFields] = React.useState<TEducation[]>([education])
  const [skillFields, setSkillsFields] = React.useState<TDescriptor[]>([skill])
  const [achievementsFields, setAchievementsFields] = React.useState<TDescriptor[]>([achievement])
  const [projectFields, setProjectFields] = React.useState<TProject[]>([project])
  const [certificatesFields, setCertificatesFields] = React.useState<TDescriptor[]>([certificate])
  const [experienceFields, setExperienceFields] = React.useState<TExperience[]>([experience])
  const [applyforFields, setApplyforFields] = React.useState<TApplyfor>(applyfor)
  const [responsetypeField, setResponsetypeField] = React.useState<TResponsetype>(responsetype)

  React.useEffect(() => {
    const unloadCallback = (event: any) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  // mutation
  const { isLoading, isError, isSuccess, error, mutate, data: response } = useMutation({
    mutationFn: async (form: TForm) => {
      return await generateResume(form)
    },
    onError: (error) => {
      console.log(error)
      toast({
        variant: "destructive",
        title: "Something went wrong, please try again later",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    },
    onSuccess: (response) => {
      const usage = response?.data?.usage
      if (usage) {
        console.log(`%c chatgpt api usage`, 'background: #222; color: white; font-size:16px;');
        console.log(`%c prompt-tokens ${usage?.prompt_tokens}`, 'background: #222; color: red; font-size:16px;')
        console.log(`%c completion-tokens ${usage?.completion_tokens}`, 'background: #222; color: green; font-size:16px;')
        console.log(`%c total-tokens ${usage?.total_tokens}`, 'background: #222; color: blue; font-size:16px;')
      }
      toast({
        title: "Your resume has been generated successfully",
      })
    }
  })

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

  function setResponsetype(data: TResponsetype) {
    setResponsetypeField(data)
  }

  async function mutation(form: TForm) {
    mutate(form)
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
      applyingfor: applyforFields, setApplyingfor: setApplyingfor,
      responsetype: responsetypeField, setResponsetype: setResponsetype,
      mutation: mutation
    }}>
      <main className="h-screen w-screen flex items-center justify-center">
        <div className="h-full w-[80%]">
          {
            isLoading ? (
              <div className="h-full w-full flex gap-2 flex-col items-center justify-center">
                <LoadingSpinner />
                <span className="text-sm text-slate-700">GPT is working hard</span>
              </div>
            ) : (
              !isSuccess ? (
                <>
                  <EnterDetails />
                </>
              ) : (
                <>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      window.location.reload();
                    }}
                    className="absolute left-0 top-0 h-full w-[48px] flex items-center justify-center text-gray-600 bg-blue-100 rounded-none hover:text-white hover:bg-blue-300"
                  >
                    <ArrowBigLeft />
                  </Button>
                  <div className="p-2 h-full w-full flex gap-1 items-center justify-center">
                    <div className="h-full w-full flex gap-1 flex-col justify-center">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="w-fit cursor-pointer"
                        >
                          Prompt
                        </Badge>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                className="h-8 rounded-full"
                                onClick={() => {
                                  const element = document.createElement("a");
                                  const file = new Blob([response?.data.prompt]);
                                  element.href = URL.createObjectURL(file);
                                  element.download = "prompt.md";
                                  document.body.appendChild(element); // Required for this to work in FireFox
                                  element.click();
                                }}
                              >
                                <Download className="h-full w-full" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Download the Chatgpt prompt</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Textarea
                        readOnly={true}
                        value={response?.data.prompt}
                        className="h-full resize-none ring-1"
                      />
                    </div>
                    <div className="h-full w-full flex gap-1 flex-col justify-center">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="w-fit cursor-pointer"
                        >
                          Response
                        </Badge>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                className="h-8 rounded-full"
                                onClick={() => {
                                  const element = document.createElement("a");
                                  const file = new Blob([response?.data.content]);
                                  element.href = URL.createObjectURL(file);
                                  element.download = responsetype.type === "latex" ? "response.tex" : "response.md";
                                  document.body.appendChild(element); // Required for this to work in FireFox
                                  element.click();
                                }}
                              >
                                <Download className="h-full w-full" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Download the {responsetype.type} to your desired file format.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Textarea
                        readOnly={true}
                        value={response?.data.content}
                        className="h-full text-base ring-1 resize-none"
                      />
                    </div>
                  </div>
                </>
              )
            )
          }
        </div>
      </main>
    </FormContext.Provider>
  )
}
