import fs from "fs"
import path from "path"
import { TForm } from "@/types";
import { getPrompt } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import chatcompletions from "@/service/Chatcompletions";


type TBody = {
    key: string,
    form: TForm
}

export async function POST(nextRequest: NextRequest, nextResponse: NextResponse) {

    // 1. user input
    const body: TBody = await nextRequest.json()
    const { key, form } = body
    if (!form || !form.aboutSection || !form.educations || !form.applyingfor || !key) {
        return new NextResponse(
            JSON.stringify({
                message: "All fields are required"
            }),
            {
                status: 400
            }
        )
    }

    try {
        // 2. create a prompt for chatgpt
        const prompt: string = getPrompt(form);


        // 3. call openai(edge) with prompt for chatcompletions
        const chat: chatcompletions = new chatcompletions(key)
        const completion = await chat.completeChat(prompt)
        if (completion?.error?.code === "invalid_api_key") {
            return new NextResponse(
                JSON.stringify({
                    prompt: prompt,
                    content: completion?.error?.message,
                }),
                {
                    status: 200
                }
            )
        } else {
            return new NextResponse(
                JSON.stringify({
                    prompt: prompt,
                    content: completion?.choices[0].message?.content!,
                    usage: completion.usage
                }),
                {
                    status: 200
                }
            )
        }

    } catch (error: any) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({
                message: error.message
            }),
            {
                status: 500
            }
        )
    }

}
