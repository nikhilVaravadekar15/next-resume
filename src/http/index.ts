import { TForm } from "@/types";
import axios, { AxiosRequestConfig } from "axios";

export const API_BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!
export const axiosRequestConfig: AxiosRequestConfig = {
    withCredentials: true,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}

export async function generateResumeWithKey(key: string, form: TForm) {
    return await axios.post(
        "/api/generate-resume",
        {
            key: key,
            form: form
        },
        axiosRequestConfig
    )
}
