import {CloudDone} from "@mui/icons-material";
import Link from "next/link";

export default function Success() {

    return (
        <div className="success w-full h-screen text-black flex justify-center items-center">
            <div className="flex flex-col gap-8 text-black justify-center items-center p-24 shadow-2xl">
                <CloudDone className="text-8xl text-green-600" />
                <h1 className="text-4xl text-black">Thank you for your inquiry!</h1>
                <p className="text-xl text-black">We'll get back to you soon</p>
                <Link href="/" className="px-8 text-black py-3 text-white rounded-md border-2 border-transparent bg-black hover:border-black hover:bg-white hover:text-black duration-300">Home</Link>
            </div>
        </div>
    )
}