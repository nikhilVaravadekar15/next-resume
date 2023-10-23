"use client"

import React from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import NavigationButtons from '@/components/NavigationButtons';


export default function AboutSectionStep() {

    return (
        <form className="m-4 border rounded">
            <div className="p-4 grid gap-2 grid-cols-1">
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        First name
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        name="firstname"
                        type="text"
                        placeholder="e.g. John"
                        autoComplete="off"
                    />
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">Middle Name <span className="opt-text">(optional)</span></Label>
                    <Input
                        name="middlename"
                        type="text"
                        placeholder="e.g. John"
                        autoComplete="off"
                    />
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Last Name
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        name="lastname"
                        type="text"
                        placeholder="e.g. Doe"
                        autoComplete="off"
                    />
                </div>
            </div>
            <div className="p-4 grid gap-2 grid-cols-1">
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">Designation</Label>
                    <Input
                        name="designation"
                        type="text"
                        placeholder="e.g. Sr.Accountants"
                        autoComplete="off"
                    />
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Address
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        name="address"
                        type="text"
                        placeholder="e.g. Lake Street-23"
                        autoComplete="off"
                    />
                </div>
            </div>
            <div className="p-4 grid gap-2 grid-cols-1">
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">
                        Email
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="e.g. johndoe@gmail.com"
                        autoComplete="off"
                    />
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold">
                        Phone No:
                        <span className="text-red-700">*</span>
                    </Label>
                    <Input
                        name="phone"
                        type="text"
                        placeholder="e.g. 456-768-798"
                        autoComplete="off"
                    />
                </div>
                <div className="flex gap-1 flex-col justify-start">
                    <Label className="font-semibold text-slate-900">Summary</Label>
                    <Input
                        name="summary"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>
            <NavigationButtons />
        </form>

    )
}
