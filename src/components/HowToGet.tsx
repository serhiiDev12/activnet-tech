"use client"

import {ArrowForward, AutoFixHigh, Close, Done, Feed, Grading} from "@mui/icons-material";

export default function HowToGet() {
    return (
        <div className=" w-full p-4 lg:p-24 bg-gray-50">
            <div className="header-text">
                <h1 className="text-6xl pb-2 font-bold">How it works</h1>
                <p className="text-2xl">Read more about process</p>
            </div>
            <div className="flex flex-1 justify-between w-full pt-16 m-auto gap-12">
                <div className="flex flex-col gap-8">
                    <div className="">
                        <h3 className="text-2xl pb-2 font-bold flex items-end gap-2"><span className="text-7xl font-light">01</span>Select Services</h3>
                        <p className="pb-2 text-xl">It can be either custom design order or you can choose our template</p>
                        <ul className="list-none text-gray-800">
                            <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                          className="text-green-500"/> Free web
                                development
                            </li>
                            <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                          className="text-green-500"/> Maintenance
                            </li>
                            <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                          className="text-green-500"/> UX/UI and Logo
                                Design
                            </li>
                            <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                          className="text-green-500"/> Website rebuild
                            </li>
                            <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                          className="text-green-500"/>  Anytime change
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-2xl pb-2 font-bold flex items-end gap-2"><span className="text-7xl font-light">02</span> Fill you contact info
                        </h3>
                        <p className="pb-2 text-xl">Describe you business and give us your contact information, it will
                            be used for
                            communication</p>
                        <ul className="list-none text-gray-800">
                            <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                          className="text-green-500"/> What business does
                            </li>
                            <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                          className="text-green-500"/> Small history about it
                            </li>
                            <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                          className="text-green-500"/> Do you have website or not?
                            </li>
                            <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                          className="text-green-500"/> Your contact info
                            </li>
                            <li className="flex items-center font-bold gap-1"><Close fontSize="small"
                                                                          className="text-orange-700"/> No payment or credit card required
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-2xl pb-2 font-bold flex items-end gap-2"><span className="text-7xl font-light">03</span>Enjoy your
                            website</h3>
                        <p className="pb-2 text-xl">We'll show you variants of your website, and implement the one you
                            like the most for free</p>
                        <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                      className="text-green-500"/> 24/7 support
                        </li>
                        <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                      className="text-green-500"/> Free changes on the website
                        </li>
                        <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                      className="text-green-500"/> No need to look for domain or buy it
                        </li>
                        <li className="flex items-center font-bold gap-1"><Done fontSize="small"
                                                                      className="text-green-500"/> 1 month free for new customer
                        </li>
                    </div>

                    <button
                        className="px-8 py-3 flex items-center justify-center w-fit rounded-md text-white bg-black hover:bg-white hover:text-black duration-300 gap-1">
                        START NOW <ArrowForward fontSize="medium"/></button>
                </div>
                <div className="hidden lg:block image shadow-lg rounded-md"></div>
            </div>
        </div>
    )
}