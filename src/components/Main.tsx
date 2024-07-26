"use client"

import {useEffect, useState} from "react";
import Link from "next/link";

export default function Main() {
    const oneTimeInit = '';
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setScroll(true);
        }, 2000);
    }, [oneTimeInit]);
    useEffect(() => {
        setTimeout(() => {
            setScroll(false);
        }, 6000);
    }, [scroll]);

    return (
        <div className="flex w-full lg:px-24 md:p-12 padding-small items-center h-screen gap-24 main">
            <div className="flex flex-col gap-8">
                <h4 className={` duration-700 lg:text-2xl text-2xl text-white font-bold`}>CREATE YOUR WEBSITE</h4>
                <h1 className={` duration-1000 lg:text-7xl text-5xl text-white font-bold`}>Best way <br/> to get cheap, <br/> competitive website</h1>
                <h4 className={` duration-1000 lg:text-2xl text-xl text-white font-bold`}>Stand out with professional wesbite, <br/> SEO optimized and build according to your ideas and needs</h4>

                <div className={` duration-1000`}>
                    <Link href="/select-service" className="px-8 py-3 rounded-md bg-white hover:bg-black hover:text-white duration-300">GET STARTED</Link>
                </div>
            </div>
            <div className={`bg-custom ${scroll ? 'scrolled': ''} duration-2000 mt-16 media-stuff hidden lg:flex`}>
            </div>
        </div>
    )
}