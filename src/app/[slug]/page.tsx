import {
    ArrowBigLeft
} from "lucide-react";
import React from "react";
import Link from "next/link";
import PdfRenderer from "@/components/PdfRenderer";


type Props = {}

export default function page({ }: Props) {
    return (
        <main className="h-screen w-screen flex items-center justify-center">
            <div className="absolute flex items-center justify-center h-full w-full">
                <Link href={"/"}
                    className="absolute left-0 top-0 h-full w-[48px] flex items-center justify-center text-gray-600 bg-blue-100 rounded-none hover:text-white hover:bg-blue-300"
                >
                    <ArrowBigLeft />
                </Link>
                <div className="h-full w-[50%]">
                    <PdfRenderer
                        url="http://localhost:3000/r.pdf"
                    />
                </div>
            </div>
        </main>
    )
}
