"use client"

export default function SmallContact() {
    return (
        <div className="lg:flex justify-center items-center lg w-full p-6 xl:p-24 lg:px-60">
            <h1 className="lg:text-4xl lg:m-0 mb-5 text-2xl w-full lg:w-1/2 font-bold">Have any question? <br/> Ask it right away.</h1>
            <div className="flex lg:w-1/2 h-fit">
                <input type="text" placeholder="Message" className="p-3 border-2 focus:outline-0 w-full border-black"/>
                <button className="duration-300 px-12 py-3 bg-neutral-900 border-2 border-neutral-900 text-white hover:bg-white hover:text-black">SUBMIT</button>
            </div>
        </div>
    )
}