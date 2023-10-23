import { createContext } from "react";
import { aboutSection } from "@/data";
import { TFormAboutSectionContext } from "@/types";


export const FormAboutSectionContext = createContext<TFormAboutSectionContext>({
    aboutSection: aboutSection,
    setAboutSection: () => { },
});
