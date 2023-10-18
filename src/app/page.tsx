"use client"

import {
  ArrowBigLeft
} from "lucide-react";
import React from "react";
import { TAboutSection } from "@/types";
import {
  FormAboutSectionContext, aboutSection
} from "@/components/providers/FormContext";
import { Button } from "@/components/ui/button";
import PdfRenderer from "@/components/PdfRenderer";
import EnterDetails from "@/components/EnterDetails";
import Link from "next/link";


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
        <div className="h-full w-[50%]">
          <EnterDetails />
        </div>
      </main>
    </FormAboutSectionContext.Provider>
  )
}
