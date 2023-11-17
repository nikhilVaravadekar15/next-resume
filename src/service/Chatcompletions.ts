/* eslint-disable import/no-anonymous-default-export */
import { OpenAIApi, Configuration, ResponseTypes } from "openai-edge"


class Chatcompletions {
    private openai: OpenAIApi | null = null;

    constructor() {
        try {

            const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY!
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

        return await completion?.json() as ResponseTypes["createChatCompletion"]
    }
}


export default new Chatcompletions();
