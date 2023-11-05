import fs from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server";
import { TForm } from "@/types";
import { getPrompt } from "@/lib/utils";

const NEXT_PUBLIC_DIR: string = "public"
const TEMPORARY_FILE_DIR: string = "temp"
const NEXT_PUBLIC_URL: string = "http:localhost:3000"

export async function POST(nextRequest: NextRequest, nextResponse: NextResponse) {

    // 1. user input
    const form: TForm = await nextRequest.json()
    if (!form || !form.aboutSection || !form.educations || !form.applyingfor) {
        return new NextResponse(
            JSON.stringify({
                message: "All fields are required"
            }),
            {
                status: 400
            }
        )
    }

    // 2. create a prompt for chatgpt
    const prompt = getPrompt(form);
    console.log(prompt)

    // 3. call openai (edge) with prompt
    // 4. convert response received from latex to pdf 
    // 5. save pdf to locally 
    // 6. return pdf path as nextResponse 

    const content = Date.now().toString();
    const file_name = `resume.pdf`

    const filePath = path.join(process.cwd(), `/${NEXT_PUBLIC_DIR}/${TEMPORARY_FILE_DIR}`, file_name);

    // 7. Check if the directory exists, if not, create it
    const directory = path.dirname(filePath);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    // 8. Write content to the file
    fs.writeFileSync(filePath, `hello world > ${content}`);


    return new NextResponse(
        JSON.stringify({
            path: `${NEXT_PUBLIC_URL}/${TEMPORARY_FILE_DIR}/r.pdf`,
            prompt: prompt
        }),
        {
            status: 200
        }
    )

}
