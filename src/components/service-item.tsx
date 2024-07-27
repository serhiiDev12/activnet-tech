"use client"
import Image from "next/image";
import Link from "next/link";
import {ArrowForward} from "@mui/icons-material";

export interface Content {
    title: string,
    body: string
}

interface ServiceItem {
    contentOne: Content,
    contentTwo: string,
    classes: string
}

export default function ServiceItem(props: ServiceItem) {
    return (
        <div className={`flex flex-wrap flex-1 lg:${props.classes}`}>
            <div className={`item lg:w-1/2 p-4 flex flex-col justify-between lg:p-12`}>
                <div>
                    <h1 className="text-4xl font-bold">{props.contentOne.title}</h1>
                    <p className="text-xl">{props.contentOne.body}</p>
                </div>
                <Link href="/plans" className="w-fit flex items-center gap-2 hover:gap-8 px-8 py-3 text-white rounded-md border-2 border-transparent bg-black hover:border-black hover:bg-white hover:text-black duration-300">Select a plan <ArrowForward /></Link>
            </div>
            <div className={"flex justify-center items-center lg:h-[500px] h-[200px] w-full lg:w-1/2 h-full photo " + props.contentTwo}>
            </div>
        </div>
    )
}