"use client"

import React from "react";
import { TAboutSection } from "@/types";
import EnterDetails from "@/components/EnterDetails";
import {
  FormAboutSectionContext, aboutSection
} from "@/components/providers/FormContext";


export default function Home() {
  const [aboutSectionFields, setAboutSectionFields] = React.useState<TAboutSection>(aboutSection)

  function setAboutSection(event: any) {
    setAboutSectionFields((prevState: TAboutSection) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <FormAboutSectionContext.Provider value={{
      aboutSection: aboutSectionFields,
      setAboutSection: setAboutSection
    }}>
      <main className="h-screen w-screen flex items-center justify-center">
        <EnterDetails />
        <div className="bg-blue-400 h-full w-full"></div>
      </main>
    </FormAboutSectionContext.Provider>
  )
}
