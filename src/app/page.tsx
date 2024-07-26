"use client"
import Main from "@/components/Main";
import Templates from "@/components/Templates";
import HowToGet from "@/components/HowToGet";
import Testemonials from "@/components/Testemonials";
import SmallContact from "@/components/SmallContact";
import React, {useEffect, useRef, useState} from "react";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import {RevealOnScroll} from "@/app/revealOnScroll";
import InquiryForm from "@/components/InquiryForm";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
        <Main />
        <RevealOnScroll>
            <Templates
                title="Ready templates to satisfy your needs right now"
                description="Choose and order template you like, or let us know how to customize it for you"
            />
        </RevealOnScroll>
        <RevealOnScroll>
            <HowToGet />
        </RevealOnScroll>
        <RevealOnScroll>
            <Testemonials />
        </RevealOnScroll>
        <RevealOnScroll>
            <Faq />
        </RevealOnScroll>
        <RevealOnScroll>
            <InquiryForm title="Have a question?" subtitle="We're ready to answer" />
        </RevealOnScroll>
        <Footer />
    </main>
  );
}
