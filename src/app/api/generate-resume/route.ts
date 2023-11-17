import fs from "fs"
import path from "path"
import { TForm } from "@/types";
import { getPrompt } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import chatcompletions from "@/service/Chatcompletions";


export async function POST(nextRequest: NextRequest, nextResponse: NextResponse) {

    const currentTime: number = Date.now()

    // 1. user input
    const form: TForm = await nextRequest.json()
    if (!form || !form.aboutSection || !form.educations || !form.applyingfor || !form.responsetype.type) {
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
    const prompt: string = getPrompt(form);

    // 3. call openai(edge) with prompt for chatcompletions
    const { choices, usage } = await chatcompletions.completeChat(prompt)
    const content: string = choices[0].message?.content!

    console.log(content)

    // 4. return response 
    return new NextResponse(
        JSON.stringify({
            prompt: prompt,
            content: content,
            usage: usage
        }),
        {
            status: 200
        }
    )

}
