"use client"

import {useState} from "react";
import {sendOrder} from "@/app/manager";
import {CircularProgress} from "@mui/material";

export interface InquiryFormProps {
    title: string,
    subtitle: string,
    isPaged: boolean
}

export default function InquiryForm(props: InquiryFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [tankYou, setThankYou] = useState(false);

    const send = async () => {
        if (email === '' && message === '' && !loading) {
            return;
        }

        setLoading(true);
        await sendOrder(`
        <h1>Name: ${name}</h1>
        <h1>Email: ${email}</h1>
        <h1>Message: ${message}</h1>
        `)
        setLoading(false);
        setThankYou(true);
    }

    return (
        <div className="w-full flex rounded-md">
            <div className="bg-form w-2/5 flex-col hidden md:flex lg:flex xl:flex justify-center gap-8">
                <h1 className="bg-white-transparent text-center text-6xl font-bold px-12 py-8">{props.title}</h1>
                <p className="text-5xl font-bold text-center text-white px-12">{props.subtitle}</p>
            </div>
            <div className="flex flex-col gap-8 w-full xl:w-2/5 p-24 border-t-2 border-gray-300">
                {!tankYou && <>
                    <h1 className="text-6xl font-bold">Let's talk!</h1>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name"
                           className="border-2 border-gray-300 px-3 py-3 rounded focus:border-blue-500 outline-0"/>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email"
                           className="border-2 border-gray-300 px-3 py-3 rounded focus:border-blue-500 outline-0"/>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} type="text" id="message"
                              rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 bg-white bg-gray-50 border-2 rounded focus:border-blue-500 outline-0 border-gray-300 focus:ring-blue-500 "
                              placeholder="Job to be done"/>

                    {loading ? <CircularProgress/> :
                        <button onClick={send}
                                className="w-fit px-8 py-3 text-white rounded-md border-2 border-transparent bg-black hover:border-black hover:bg-white hover:text-black duration-300">
                            GET STARTED
                        </button>
                    }
                </>}
                {
                    tankYou && <h1 className="text-6xl py-48 font-bold">Thank You!</h1>
                }
            </div>
        </div>
    )
}