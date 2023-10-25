import { createContext } from "react";
import { project } from "@/data";
import { TFormProjectsContext } from "@/types"

export const FormProjectsContext = createContext<TFormProjectsContext>({
    project: [project],
    setProjects: () => { },
});
