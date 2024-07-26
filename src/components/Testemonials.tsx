"use client"

import {ArrowRight, Star} from "@mui/icons-material";
import {useEffect, useRef, useState} from "react";

export default function Testemonials() {

    return (
        <div className="w-full bg-neutral-900 p-4 lg:p-24">
            <div className="text-right">
                <h1 className="text-4xl lg:text-6xl text-white font-bold">What our clients say about us</h1>
                <p className="lg:text-2xl text-white font-bold">We made sure to provide a website that can compete and win the industry</p>
            </div>
            <div className="w-full block lg:flex items-center pt-16 gap-12">
                <div className="w-full lg:w-1/2 flex-column items-center p-10">
                    <div className="flex">
                        <Star fontSize="large" sx={{color: "yellow"}} />
                        <Star fontSize="large" sx={{color: "yellow"}} />
                        <Star fontSize="large" sx={{color: "yellow"}} />
                        <Star fontSize="large" sx={{color: "yellow"}} />
                        <Star fontSize="large" sx={{color: "yellow"}} />
                    </div>
                    <h1 className="text-white text-3xl font-bold py-4">CEO of Centrix Ops - Perfect service</h1>
                    <p className="text-white text-xl">I am excited to share my experience of partnership with Activnet to create a website for
                        my digital services company. Activnet helped me throughout the whole developing process, making sure that every
                        goal is met and every change request is handled. Team was always in touch and helped to resolve many problems
                        with a robust professional approach. Me and my clients are more than happy with the results that we achieved with Activnet.
                        I also went with a monthly subscription so it almost didn't cost me anything without compromising on quality.
                        I would highly recommend Activnet to anyone who wants to get their business on the internet.
                        Simply can't miss on that opportunity now that every competitor is online as well.</p>
                </div>
                <div className="flex w-full lg:w-1/2 items-center justify-center p-10 py-32 bg-centrix">
                    <a className="outlined flex justify-center items-center text-white text-2xl flex px-8 py-2 h-fit" href="https://centrixops.com" target="_blank">GO TO WEBSITE <ArrowRight fontSize="large" /></a>
                </div>
            </div>
        </div>
    );
}