"use client"
import {useEffect, useState} from "react";
import logo from './logo.svg'
import Image from "next/image";
import Link from "next/link";
import {Close, Menu} from "@mui/icons-material";
import {Navbar} from "flowbite-react";

export default function NavbarHead() {
    const [scrolled, setScrolled] = useState(false);
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setScrolled(window.pageYOffset > 10)
            );
        }
    }, []);

    return (
        <nav className={`w-full flex-col xl:flex-row p-5 px-12 z-40 fixed text-white flex justify-between xl:items-center content-center ${scrolled ? 'bg-black shadow' : "bg-special"}`}>
            <Link href="/" className="flex items-center hidden justify-center xl:flex">
                <Image src={logo} className="mr-3 h-5 sm:h-7" alt="Flowbite React Logo"/>
                <h1 className="text-xl hidden block xl:flex"><span className="italic">A</span>ctiv<span className="italic">N</span>et-Tech</h1>
            </Link>
            <div className={`${toggled ? '' : 'hidden'} block xl:flex pb-6 xl:pb-0 items-center`}>
                <div className="flex flex-col gap-8 xl:gap-24 xl:flex-row mb-5 xl:mb-0">
                    <Link href="/" className={'xl:hidden text-xl hover:text-gray-200'}>Home</Link>
                    <Link href="/services" className={'text-xl hover:text-gray-200'}>SERVICES</Link>
                    <Link href="/templates" className={'text-xl hover:text-gray-200'}>TEMPLATES</Link>
                    <Link href="/plans" className={'text-xl hover:text-gray-200'}>PLANS</Link>
                </div>
                <Link href="/select-service"
                      className={'xl:mx-10 duration-300 xl:px-3 py-2 xl:border-2 mx-0 border-white hover:bg-white hover:text-black text-xl'}>MAKE
                    INQUIRY</Link>
            </div>
            {
                !toggled &&
                <Menu onClick={() => setToggled(true)} className="xl:!hidden lg:!hidden" fontSize="large" />
            }
            {
                toggled &&
                <Close onClick={() => setToggled(false)} className="xl:!hidden lg:!hidden" fontSize="large" />
            }
        </nav>
    )
}