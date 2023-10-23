"use client"

import {
  ArrowBigLeft
} from "lucide-react";
import React from "react";
import { aboutSection } from "@/data";
import { TAboutSection } from "@/types";
import { Button } from "@/components/ui/button";
import PdfRenderer from "@/components/PdfRenderer";
import EnterDetails from "@/components/EnterDetails";
import { FormAboutSectionContext } from "@/components/providers/FormAboutSectionContext";

export default function Home() {
  const [state, setState] = React.useState<boolean>(true);
  const [aboutSectionFields, setAboutSectionFields] = React.useState<TAboutSection>(aboutSection)

  function setAboutSection(data: TAboutSection) {
    setAboutSectionFields(data)
  }

  return (
    <FormAboutSectionContext.Provider value={{
      aboutSection: aboutSectionFields, setAboutSection: setAboutSection
    }}>
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
    </FormAboutSectionContext.Provider>
  )
}
