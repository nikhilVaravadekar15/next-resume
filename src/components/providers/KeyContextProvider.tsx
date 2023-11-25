"use client"

import React from "react";
import { TApikeyContext } from "@/types";


type Props = {
    children: React.ReactNode
}

export const KeyContext = React.createContext<TApikeyContext>({
    withKey: false,
    setWithKey: () => { },
    key: "",
    setKey: () => { },
});

export default function KeyContextProvider({ children }: Props) {

    const [keyDetails, setKeyDetails] = React.useState<string>("");
    const [withKeyStatus, setWithKeyStatus] = React.useState<boolean>(false);

    function setKey(key: string) {
        setKeyDetails(key)
    }

    function setWithKey(key: boolean) {
        setWithKeyStatus(key)
    }

    return (
        <KeyContext.Provider value={{
            withKey: withKeyStatus,
            setWithKey: setWithKey,
            key: keyDetails,
            setKey: setKey
        }}>
            {children}
        </KeyContext.Provider>
    )
}
