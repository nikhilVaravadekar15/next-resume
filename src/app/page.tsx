"use client"

import {
  ArrowBigLeft
} from "lucide-react";
import React from "react";
import { aboutSection, education, skill, achievement, project, certificate, experience } from "@/data";
import { TAboutSection, TAchievement, TCertification, TEducation, TExperience, TSkill, Tproject } from "@/types";
import { Button } from "@/components/ui/button";
import PdfRenderer from "@/components/PdfRenderer";
import EnterDetails from "@/components/EnterDetails";
import { FormAboutSectionContext } from "@/components/providers/FormAboutSectionContext";
import { FormEducationContext } from "@/components/providers/FormEducationContext";
import { FormSkillsContext } from "@/components/providers/FormSkillsContext";
import { FormAchievementsContext } from "@/components/providers/FormAchievementsContext";
import { FormProjectsContext } from "@/components/providers/FormProjectsContext";
import { FormCertificationContext } from "@/components/providers/FormCertificationContext";
import { FormExperienceContext } from "@/components/providers/FormExperienceContext";

export default function Home() {
  const [state, setState] = React.useState<boolean>(true);
  const [aboutSectionFields, setAboutSectionFields] = React.useState<TAboutSection>(aboutSection)
  const [educationFields, setEducationFields] = React.useState<TEducation[]>([education])
  const [skillFields, setSkillsFields] = React.useState<TSkill[]>([skill])
  const [achievementsFields, setAchievementsFields] = React.useState<TAchievement[]>([achievement])
  const [projectFields, setProjectFields] = React.useState<Tproject[]>([project])
  const [certificatesFields, setCertificatesFields] = React.useState<TCertification[]>([certificate])
  const [experienceFields, setExperienceFields] = React.useState<TExperience[]>([experience])

  function setAboutSection(data: TAboutSection) {
    setAboutSectionFields(data)
  }

  function setEducations(data: TEducation[]) {
    setEducationFields(data)
  }

  function setSkills(data: TSkill[]) {
    setSkillsFields(data)
  }

  function setAchievements(data: TAchievement[]) {
    setAchievementsFields(data)
  }

  function setProjects(data: Tproject[]) {
    setProjectFields(data)
  }

  function setCertificates(data: TCertification[]) {
    setCertificatesFields(data)
  }

  function setExperiences(data: TExperience[]) {
    setExperienceFields(data)
  }

  return (
    <FormAboutSectionContext.Provider value={{ aboutSection: aboutSectionFields, setAboutSection: setAboutSection }}>
      <FormEducationContext.Provider value={{ educations: educationFields, setEducations: setEducations }}>
        <FormSkillsContext.Provider value={{ skills: skillFields, setSkills: setSkills }}>
          <FormAchievementsContext.Provider value={{ achievement: achievementsFields, setAchievements: setAchievements }}>
            <FormProjectsContext.Provider value={{ project: projectFields, setProjects: setProjects }}>
              <FormCertificationContext.Provider value={{ certificates: certificatesFields, setCertificates: setCertificates }}>
                <FormExperienceContext.Provider value={{ experiences: experienceFields, setExperiences: setExperiences }}>
                  <main className="h-screen w-screen flex items-center justify-center">
                    <div className="h-full w-[50%]">
                      {
                        state ? (
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
                      }
                    </div>
                  </main>
                </FormExperienceContext.Provider>
              </FormCertificationContext.Provider>
            </FormProjectsContext.Provider>
          </FormAchievementsContext.Provider>
        </FormSkillsContext.Provider>
      </FormEducationContext.Provider>
    </FormAboutSectionContext.Provider>
  )
}
