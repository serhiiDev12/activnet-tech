"use client"
import ServiceItem from "@/components/service-item";
import web1 from '../app/images/web1.png'
import seo1 from '../app/images/seo1.png'
import design1 from '../app/images/design1.png'
import support1 from '../app/images/support1.png'
import {ArrowForward} from "@mui/icons-material";
import Footer from "@/components/Footer";
import Link from "next/link";

const content = [
    {
        id: 1,
        title: "Free Web Development",
        description: "We make all the job for free, starting from website and pages development, ending with SEO optimization and hosting. Don\'t waste any of your valuable time building the website our specialists will make this for you for free.",
        classes: "text-right p-12 flex-row text-white bg-cs",
        img: "web1"
    },
    {
        id: 2,
        title: "SEO Optimized",
        description: "To make website searchable through different search engines we use Next.js technology that works great with search engines and provide all necessary support for your success. All websites delivered have consistency of SEO optimization.",
        classes: "text-left p-12 flex-row-reverse bg-white text-black",
        img: "seo1"
    },
    {
        id: 3,
        title: "User Interface Design",
        description: "Don't be restricted by ready design, use your imagination, and our designers will implement it quickly. Of course web development still free. We do UI, UX, Logo design. Anything you need, just let us know ;)",
        classes: "text-right p-12 flex-row bg-cs text-white",
        img: "design1"
    },
    {
        id: 4,
        title: "Life long support",
        description: "We monitor all our services and websites every day, and making backups to ensure your website is up and running, any incedents are reported to us and we take actions. We do UI, UX, Logo design. Anything you need, just let us know ;)",
        classes: "text-left p-12 flex-row-reverse bg-black text-white",
        img: "support1"
    }
]

export default function ServicesPage() {
    return (
        <div className="services-section w-full">
            <div className="h-screen flex items-center w-full bg-services">
                <div className="w-full bg-semi p-6 lg:p-24">
                    <div className="">
                        <h1 className="lg:text-5xl text-4xl text-white font-bold">Explore services and choose what you need</h1>
                        <p className="lg:text-2xl md:text-xl text-white font-bold">Your creativity and our dedication will win</p>
                        <div className="mt-12">
                            <Link href="#middle" className="px-4 py-2 border-2 border-transparent bg-white text-black mt-24 duration-300 hover:border-white hover:bg-black hover:text-white">Read more <ArrowForward /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="middle" className="w-full"></div>
            {
                content.map((item, index) => <ServiceItem key={index} contentOne={{title: item.title, body: item.description}} classes={item.classes} contentTwo={item.img} />)
            }

            <Footer />
        </div>
    )
}