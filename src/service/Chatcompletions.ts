/* eslint-disable import/no-anonymous-default-export */
import { OpenAIApi, Configuration, ResponseTypes, ModelError, ErrorResponse } from "openai-edge"


class Chatcompletions {
    private openai: OpenAIApi | null = null;

    constructor(key: string) {
        try {

            const OPENAI_API_KEY: string = key
            if (!OPENAI_API_KEY) {
                throw new Error("OPENAI_API_KEY is not defined")
            }
            this.openai = new OpenAIApi(new Configuration({
                apiKey: OPENAI_API_KEY,
            }))
        } catch (error) {
            console.error(error)
            throw new Error("Openai current quota exceeded, please check your plan and billing details.")
        }
    }

    async completeChat(content: string) {
        const completion = await this.openai?.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: content
                }
            ]
        })

        return completion?.status === 200 ?
            await completion?.json() as ResponseTypes["createChatCompletion"]
            : await completion?.json() as any
    }
}


export default Chatcompletions
