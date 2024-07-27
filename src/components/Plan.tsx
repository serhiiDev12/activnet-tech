"use client"

import {ArrowForward, Close, Star} from "@mui/icons-material";
import Link from "next/link";
import {useEffect} from "react";

export interface PlanProps {

    id: number,
    title: string,
    description: string,
    price: string,
    link: string,
    listed: string[]

}

export default function Plan({description, listed, price, title, link}: PlanProps) {
    const flag = 1;

    useEffect(() => {
        localStorage.removeItem("plan");
    }, [flag])

    const selectPlan = () => {
        localStorage.setItem("plan", title);
    }

    return (
        <div className="flex flex-col justify-between border-2 rounded-xl shadow-2xl 2xl:w-1/5 lg:w-1/3 md:w-1/3 w-full">
            <div className="flex flex-col gap-4 p-12 mb-5">
                <h1 className="text-5xl text-black">{price}</h1>
                <h1 className="text-2xl text-black font-bold text-amber-800">{title}</h1>
                <p className="text-gray-600 text-black">{description}</p>
                <div className="flex flex-col gap-2 text-black">
                    {
                        listed.map((item, index) => <div className="" key={index}><Star sx={{color: "green"}} /> {item}</div>)
                    }
                </div>
            </div>
            <div className="p-12 flex">
                {link !== '' && <Link
                    href={link}
                    onClick={selectPlan}
                    className="w-full flex items-center gap-2 hover:gap-8 px-8 py-3 text-white rounded-md border-2 border-transparent bg-black hover:border-black hover:bg-white hover:text-black duration-300">GET
                    STARTED <ArrowForward/>
                </Link>}
            </div>
        </div>
    )
}