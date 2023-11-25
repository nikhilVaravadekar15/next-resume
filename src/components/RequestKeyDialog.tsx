"use client"

import {
    ArrowBigRight,
} from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from 'react'
import { apikey } from '@/zod'
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'
import { TApikey, TApikeyContext, TFormContext } from '@/types/index';
import { FormContext } from "./providers/FormContextProvider"
import { KeyContext } from './providers/KeyContextProvider'



type Props = {}

export default function RequestKeyDialog({ }: Props) {

    const { register, handleSubmit, getFieldState } = useForm<TApikey>({
        resolver: zodResolver(apikey)
    });
    const { setWithKey, setKey } = React.useContext<TApikeyContext>(KeyContext)
    const {
        aboutSection, educations, skills, achievement, project, certificates, experiences, applyingfor,
    } = React.useContext<TFormContext>(FormContext)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={"outline"}
                    className="text-gray-100 bg-red-400 hover:text-white hover:bg-red-500"
                >
                    Generate
                    <ArrowBigRight />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Openai api key</DialogTitle>
                    <DialogDescription>
                        Add your openai api key here and lets create a stunning resume
                    </DialogDescription>
                </DialogHeader>
                <form
                    className="h-full grid gap-4 py-2"
                    onSubmit={handleSubmit((data: TApikey) => {
                        setKey(data.key)
                        setWithKey(true)
                    })}
                >
                    <div className="flex gap-2 flex-col">
                        <Label htmlFor="key">
                            Key
                        </Label>
                        <Input
                            id="key"
                            type="password"
                            autoComplete="off"
                            {...register("key", { required: true })}
                        />
                        {
                            getFieldState("key").isDirty && getFieldState("key").isTouched && getFieldState("key").error?.message && (
                                <span className="text-xs text-red-500">{getFieldState("key").error?.message}</span>
                            )
                        }
                    </div>
                    <div className="flex items-center justify-end">
                        <Button
                            type="submit"
                            variant={"outline"}
                            className="w-fit text-gray-100 bg-red-400 hover:text-white hover:bg-red-500"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
                <DialogFooter className="text-xs">
                    {"Note: If you do not have openai api-key, type \"key\" and submit."}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
