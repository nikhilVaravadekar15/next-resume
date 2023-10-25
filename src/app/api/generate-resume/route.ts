import fs from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server";
import { TForm } from "@/types";

const NEXT_PUBLIC_DIR: string = "public"
const TEMPORARY_FILE_DIR: string = "temp"
const NEXT_PUBLIC_URL: string = "http:localhost:3000"

export async function POST(nextRequest: NextRequest, nextResponse: NextResponse) {

    // 1. user input
    // 2. sanitize and parse user input 
    // 3. create a prompt for chatgpt
    // 4. call openai (edge) with prompt
    // 5. convert prompt ie from latex to pdf 
    // 6. save pdf to locally 
    // 7. return pdf path as response 
    return new NextResponse(
        JSON.stringify({
            path: `${NEXT_PUBLIC_URL}/${TEMPORARY_FILE_DIR}/r.pdf`
        }),
        {
            status: 200
        }
    )

}
