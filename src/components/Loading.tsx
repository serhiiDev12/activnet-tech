"use client"

import {CircularProgress} from "@mui/material";

export default function Loading() {
    return (<div className="fixed z-40 h-screen w-screen flex justify-center bg-white items-center">
        <div className="flex flex-col justify-center gap-8 items-center">
            <CircularProgress size={80} />
            <h1 className="font-light text-5xl text-center">Loading</h1>
            <p className="font-bold text-xl">PLease wait, we're sending your inquiry to our specialist</p>
        </div>
    </div>)
}