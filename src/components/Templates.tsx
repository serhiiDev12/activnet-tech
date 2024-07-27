"use client"
import {ArrowForward} from "@mui/icons-material";
import {useEffect, useState} from "react";
import Link from "next/link";

interface Template {
    id: number,
    title: string,
    color: string,
    route: string,
    src: any
}

export const renderStuff: Template[] = [
    {
        id: 111,
        title: "Construction",
        color: "purple",
        route: "/make-inquiry/111",
        src: "template1"
    },
    {
        id: 112,
        title: "Services",
        color: "green",
        route: "/make-inquiry/112",
        src: "template2"
    },
    {
        id: 113,
        title: "Real Estate",
        color: "blue",
        route: "/make-inquiry/113",
        src: "template3"
    },
    {
        id: 114,
        title: "Local Business",
        color: "red",
        route: "/make-inquiry/114",
        src: "template4"
    },
    {
        id: 115,
        title: "Portfolio",
        color: "black",
        route: "/make-inquiry/115",
        src: "template5"
    },
    {
        id: 115,
        title: "Custom",
        color: "white",
        route: "/make-inquiry",
        src: "custom"
    }
];

interface TemplateProps {
    title?: string,
    description?: string
}

export default function Templates({title = '', description = ''}: TemplateProps) {
    const [selectedTemplate, setSelectedTemplate] = useState(renderStuff[0] as Template);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        setLoaded(false);
        setTimeout(() => {setLoaded(true)}, 400)
    }, [selectedTemplate]);

    return (
        <div className={`flex flex-col template-section justify-center xl:p-24 p-4 duration-300 w-full ${selectedTemplate.color}`}>
            <h1 className='text-black lg:text-5xl text-3xl lg:w-1/2 font-bold'>{title ? title : ''}</h1>
            <p className="lg:text-2xl text-black text-medium text-bold mt-3">{description ? description: ''}</p>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-12 lg:px-24 md:p-8">
                <div className="flex flex-col gap-4">
                    {
                        renderStuff.map((item, index) => <div key={index}>
                            <Link
                                href={item.route}
                                onMouseOver={() => setSelectedTemplate(item)}
                                className={`cursor-pointer text-black w-full gap-12 flex justify-between items-center border-b-2 pb-2 border-b-transparent duration-300 font-light text-5xl hover:border-b-slate-800`}>
                                {item.title} <ArrowForward fontSize="large" className="ml-2"/></Link>
                        </div>)
                    }
                </div>
                <div className="flex flex-col">
                            <div
                                 className={`${loaded ? 'opacity-100': 'opacity-0'} template-img duration-300 delay-100 shadow-2xl ${selectedTemplate.src}`}>
                            </div>
                </div>
            </div>
        </div>
    );
}