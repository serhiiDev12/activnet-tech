"use client"

import {LinkedIn} from "@mui/icons-material";
import logo from './ActivNet.svg'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-900 w-full p-12 text-white flex justify-center gap-56">
            <div className="hidden flex-col gap-2 lg:flex">
                <div className="logo-company pb-2">
                    <Image src={logo} alt="" height={30}/>
                </div>
                <h2>Follow Us</h2>
                <LinkedIn
                    onClick={() => window.open('https://www.linkedin.com/company/activnetech/about/', '_blank')}
                    fontSize="large"
                    className="cursor-pointer"
                    sx={{color: "white"}}
                />
                <a href="mailto:inquiry@activnet.tech">inquiry@activnet.tech</a>
            </div>
            <div className="hidden flex-col gap-2 lg:flex">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Technologies</h2>
                    <p>Amazon Web Services</p>
                    <p>Next.js</p>
                    <p>Figma</p>
                    <p>TypeScript</p>
                    <p>SCSS</p>
                    <p>.NET / Node.js</p>
                </div>
            </div>
            <div className="footer-am-content-links flex flex-col gap-2">
                <h2 className="text-xl font-bold">Quick Links</h2>
                <Link href="/">Home</Link>
                <Link href="/#faq">FAQ</Link>
                <Link href="/services">Services</Link>
                <Link href="/plans">Prices</Link>
                <Link href="/templates">Templates</Link>
            </div>
        </div>
    )
}