"use client"

import {ArrowForwardIos} from "@mui/icons-material";

export interface Step {
    id: number,
    title: string
}

export interface StepperProps {
    step: number,
    steps: Step[]
}

export default function Stepper({step, steps}: StepperProps) {
    return (
        <div className="w-full">
            <ol className="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border-y border-gray-200 shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                {
                    steps.map((item, index) => <li key={index + item.id} className={`flex items-center ${step > index ? 'text-blue-500': 'text-gray-600'}`}>
                    <span
                        className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${step > index ? 'border-blue-500': 'border-gray-600'}`}>
                        {item.id}
                    </span>
                        <p className="text-md hidden lg:flex">{item.title}</p>
                        {index < steps.length - 1 ? <ArrowForwardIos className="text-sm ml-3" /> : <div></div>}
                    </li>)
                }
            </ol>
        </div>
    )
}