/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import {
  ArrowBigLeft, Copy, Download
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react";
import { steps } from '@/data';
import copy from 'copy-to-clipboard'
import { generateResumeWithKey } from "@/http";
import { useMutation } from "react-query";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import Stepper from 'react-stepper-horizontal';
import LoadingSpinner from "@/components/LoadingSpinner";
import AboutSectionStep from '@/components/steps/AboutSectionStep';
import AchievementsStep from '@/components/steps/AchievementsStep';
import ExperienceStep from '@/components/steps/ExperienceStep';
import EducationStep from '@/components/steps/EducationStep';
import SkillsStep from '@/components/steps/SkillsStep';
import ProjectStep from '@/components/steps/ProjectStep';
import GenerateStep from '@/components/steps/GenerateStep';
import ApplyingforStep from '@/components/steps/ApplyingforStep';
import CertificationStep from '@/components/steps/CertificationStep';
import { KeyContext } from "@/components/providers/KeyContextProvider";
import { ActiveStepContext } from '@/components/providers/ActiveStepContextProvider';
import { FormContext } from "@/components/providers/FormContextProvider";
import { TActiveStepContext, TApikeyContext, TForm, TFormContext } from '@/types';


export default function Home() {

  const { toast } = useToast()
  const { step } = React.useContext<TActiveStepContext>(ActiveStepContext)
  const { withKey, key, setWithKey } = React.useContext<TApikeyContext>(KeyContext)
  const {
    aboutSection, educations, skills, achievement, project, certificates, experiences, applyingfor
  } = React.useContext<TFormContext>(FormContext)

  React.useEffect(() => {
    if (withKey && key) {
      mutate({
        key: key,
        form: {
          aboutSection,
          educations,
          skills,
          achievement,
          project,
          certificates,
          experiences,
          applyingfor
        }
      })
    }
  }, [withKey, key]);

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
    mutationFn: async ({ key, form }: { key: string, form: TForm }) => {
      return await generateResumeWithKey(key, form)
    },
    onError: (error) => {
      console.log(error)
      setWithKey(false)
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

  function getSectionComponent() {
    switch (step) {
      case 0: return <AboutSectionStep />;
      case 1: return <EducationStep />;
      case 2: return <SkillsStep />;
      case 3: return <AchievementsStep />;
      case 4: return <ProjectStep />;
      case 5: return <CertificationStep />;
      case 6: return <ExperienceStep />;
      case 7: return <ApplyingforStep />;
      case 8: return <GenerateStep />;
      default: return null;
    }
  }

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="h-full w-[80%]">
        {
          isLoading ? (
            <div className="h-full w-full flex gap-2 flex-col items-center justify-center">
              <LoadingSpinner />
              <span className="text-sm text-slate-700">GPT is working hard</span>
            </div>
          ) : (
            withKey && !isError && isSuccess ? (
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
                                copy(response?.data?.prompt)
                              }}
                            >
                              <Copy className="h-full w-full" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="p-2">
                              Copy the Chatgpt prompt
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Textarea
                      readOnly={true}
                      value={response?.data?.prompt}
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
                                const file = new Blob([response?.data?.content]);
                                element.href = URL.createObjectURL(file);
                                element.download = "response.tex"
                                document.body.appendChild(element); // Required for this to work in FireFox
                                element.click();
                              }}
                            >
                              <Download className="h-full w-full" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="w-64">
                            <p className="p-2">
                              Download and convert the latex file to pdf using any latex-to-pdf converter of your choice.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Textarea
                      readOnly={true}
                      value={response?.data?.content}
                      className="h-full text-base ring-1 resize-none"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="p-2 h-full w-full flex gap-1 flex-col overflow-y-scroll">
                <div className="h-[96px] border rounded shadow">
                  <Stepper
                    steps={steps}
                    activeStep={step}
                    titleFontSize={14}
                  />
                </div>
                <div className="h-[calc(100%-96px)]">
                  {getSectionComponent()}
                </div>
              </div>
            )
          )
        }
      </div>
    </main >
  )
}
