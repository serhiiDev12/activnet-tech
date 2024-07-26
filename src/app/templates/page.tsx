import Templates from "@/components/Templates";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";
import {RevealOnScroll} from "@/app/revealOnScroll";

export default function () {
    return (
        <>
            <div className="w-full flex h-80 main"></div>
            <Templates title="Explore unique templates we provide or select a custom for design services" />
            <RevealOnScroll>
                <div className="w-full flex flex-col gap-8 pt-12">
                    <h1 className="text-7xl w-1/2 px-24 font-bold">Any questions?</h1>
                        <div className="w-full flex">
                            <InquiryForm title="Contact us" subtitle="We're ready to answer your questions" />
                        </div>
                </div>
            </RevealOnScroll>
            <Footer/>
        </>
    )
}