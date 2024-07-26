"use client"

import Link from "next/link";
import {ArrowForward} from "@mui/icons-material";

export interface ServiceItemForSelectProps {
    id: number
    title: string,
    description: string,
    style: string,
    link: string,
    header: string
}

export default function ServiceItemForSelect({id, link, style, title, description, header}: ServiceItemForSelectProps) {
    const selectedService = (header) => {
        localStorage.setItem("service", header);
    }

    return (
        <div className="flex min-w-52 max-w-96 flex-col rounded-xl shadow-xl">
            <div className={`${style} w-full rounded-t-xl`}></div>
            <div className="flex flex-col h-[57%] justify-between gap-8 items-center p-12">
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-3xl font-light">{title}</h1>
                    <p className="text-md">{description}</p>
                </div>
                <Link href={link}
                      onClick={() => selectedService(header)}
                      className="w-full px-8 py-3 flex items-center gap-2 hover:gap-8 text-white rounded-md border-2 border-transparent bg-black hover:border-black hover:bg-white hover:text-black duration-300">
                    Select a service <ArrowForward />
                </Link>
            </div>
        </div>
    );
}