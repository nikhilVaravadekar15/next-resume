import { createContext } from "react";
import { certificate, } from "@/data";
import { TFormCertificationContext } from "@/types"

export const FormCertificationContext = createContext<TFormCertificationContext>({
    certificates: [certificate],
    setCertificates: () => { },
});
