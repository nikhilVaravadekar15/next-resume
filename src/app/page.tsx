"use client"

import {
  ArrowBigLeft
} from "lucide-react";
import React from "react";
import { generateResume } from "@/http";
import { useMutation } from "react-query";
import { Button } from "@/components/ui/button";
import PdfRenderer from "@/components/PdfRenderer";
import EnterDetails from "@/components/EnterDetails";
import LoadingSpinner from "@/components/LoadingSpinner";
import { FormContext } from "@/components/providers/FormContext";
import {
  TAboutSection, TEducation, TExperience, TDescriptor, TProject, TForm, TApplyfor
} from "@/types";
import {
  aboutSection, education, skill, achievement, project, certificate, experience, applyfor
} from "@/data";


export default function Home() {

  const [aboutSectionFields, setAboutSectionFields] = React.useState<TAboutSection>(aboutSection)
  const [educationFields, setEducationFields] = React.useState<TEducation[]>([education])
  const [skillFields, setSkillsFields] = React.useState<TDescriptor[]>([skill])
  const [achievementsFields, setAchievementsFields] = React.useState<TDescriptor[]>([achievement])
  const [projectFields, setProjectFields] = React.useState<TProject[]>([project])
  const [certificatesFields, setCertificatesFields] = React.useState<TDescriptor[]>([certificate])
  const [experienceFields, setExperienceFields] = React.useState<TExperience[]>([experience])
  const [applyforFields, SetApplyforFields] = React.useState<TApplyfor>(applyfor)

  // mutation
  const { isLoading, isError, isSuccess, error, mutate, data: response } = useMutation({
    mutationFn: async (form: TForm) => {
      return await generateResume(form)
    },
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
    SetApplyforFields(data)
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
      mutation: mutation
    }}>
      <main className="h-screen w-screen flex items-center justify-center">
        <div className="h-full w-[64%]">
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
                  <PdfRenderer
                    url="http://localhost:3000/r.pdf"
                  />
                </>
              )
            )
          }
        </div>
      </main>
    </FormContext.Provider>
  )
}
