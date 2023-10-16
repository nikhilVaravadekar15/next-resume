"use client"

import React from 'react'
import Split from 'react-split'
import EnterDetails from './EnterDetails'


type Props = {}

export default function Divider({ }: Props) {
    return (
        <Split
            minSize={0}
            direction="horizontal"
            className="split h-full w-full overflow-hidden"
        >
            <EnterDetails />
            <div className="bg-blue-400 h-full w-full"></div>
        </Split>
    )
}
