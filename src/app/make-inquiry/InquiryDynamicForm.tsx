"use client"

import Stepper, {Step} from "@/components/Stepper";
import {useState} from "react";
import {ArrowBack, ArrowForward, Refresh, Star} from "@mui/icons-material";
import Selector from "@/components/Selector";
import {plans} from "@/components/PlansList";
import {PlanProps} from "@/components/Plan";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Loading from "@/components/Loading";
import {router} from "next/client";

export interface InquiryDynamicFormProps {
    submit: (name:string,
             phone:string,
             email:string,
             comments:string,
             websites:string,
             company:string,
             finalThoughts:string,
             service: string) => Promise<void>,
    template?: string
}

export default function InquiryDynamicForm(props: InquiryDynamicFormProps) {
    const [step, setStep] = useState(1);
    const planToSerch = localStorage.getItem('plan');
    const planObj = plans.find(item => item.title === planToSerch);
    const [selectedPlan, setPlan] = useState(planObj ? planObj: plans[1]);
    const router = useRouter();

    const steps: Step[] = [
        {
            id: 1,
            title: "Contact Information"
        },
        {
            id: 2,
            title: "Select services"
        },
        {
            id: 3,
            title: "Summary"
        },
        {
            id: 4,
            title: "Submit"
        }
    ];

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    const [websites, setWebsites] = useState("");
    const [company, setCompany] = useState("");
    const [finalThoughts, setFinalThoughts] = useState("");
    const [loading, setLoading] = useState(false);

    const next = () => {
        if (step < 4)
            setStep(step + 1);
    }
    const back = () => {
        if (step > 1)
            setStep(step - 1);
    }

    const service = window.localStorage.getItem("service");

    const submit = async () => {
        setLoading(true);
        await props.submit(name, phone, email, comments, websites, company, finalThoughts, service);
        router.push('/success');
        setLoading(false);
    }

    return (
        <div className="inquiry bg-gray-50">
            {loading && <Loading />}
            <div className="w-full flex justify-center items-center pt-32 pb-4">
                <h1 className="text-6xl font-bold">{service ? service : 'Get started with your new website'}</h1>
            </div>
            <Stepper step={step} steps={steps} />
            <div className="flex h-full xl:p-12 lg:p-12 md:p-12 p-0 w-full justify-center">

                {props.template && <div className="bg-white hidden h-full xl:flex lg:flex md:flex flex-col gap-8 pb-4">
                    <div className={"template-img w-1/3 border " + props.template}></div>
                    <Link href="/select-template"
                          className="w-fit ml-5 px-8 py-3 text-white rounded-md border-2 border-transparent bg-black hover:border-black hover:bg-white hover:text-black duration-300">Change <Refresh/></Link>
                </div>}

                <div
                    className="shadow-2xl rounded-b-md bg-white ls:p-24 md:p-24 p-8 py-12 flex flex-col xl:w-1/3 lg:w-1/2 md:w-1/2 w-full">
                    {
                        step === 1 &&
                        <>
                            <h1 className="text-2xl mb-4 font-bold">Let's start with your contact information</h1>
                            <p className="text-sm">Name *</p>
                            <input id="name" type="text"
                                   value={name}
                                   onChange={e => setName(e.target.value)}
                                   required={true}
                                   className="bg-white mb-4 w-full border-2 border-gray-100 rounded-lg p-3"
                                   placeholder="Put your name here..."/>
                            <p className="text-sm">Phone</p>
                            <input id="name" type="text"
                                   value={phone}
                                   onChange={e => setPhone(e.target.value)}
                                   className="bg-white mb-4  w-full border-2 border-gray-100 rounded-lg p-3"
                                   placeholder="Put your phone number here..."/>
                            <p className="text-sm">Email *</p>
                            <input id="name" type="text"
                                   required={true}
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}
                                   className="bg-white mb-4 w-full border-2 border-gray-100 rounded-lg p-3"
                                   placeholder="Put your email here..."/>
                        </>
                    }
                    {
                        step === 2 &&
                        <>
                            <h1 className="text-2xl mb-4 font-bold">Select services that will fit your needs the
                                most</h1>
                            <Selector selected={selectedPlan.id} items={props.template ? plans.slice(1, plans.length-1) : plans.slice(1, plans.length)}
                                      placeholder={"Select your plan"}
                                      setSelected={(plan) => {
                                          console.log('aa');
                                          setPlan(plan)
                                      }}/>
                            {selectedPlan && selectedPlan.id !== 1 && <div className="flex flex-col">
                                <p className="py-2 font-bold">{selectedPlan.description}</p>
                                {selectedPlan.listed.map((inPlan, index) => <div className=""
                                                                                 key={index + 'a'}>
                                    <Star sx={{color: "green"}}/> {inPlan}</div>)}
                            </div>}
                            {selectedPlan &&
                                <h1 className="text-4xl font-light pt-4">Final Price: {selectedPlan.price}</h1>}
                            <p className="text-sm mt-4">Comments</p>
                            <textarea placeholder="Anything else you want us to know?"
                                      value={comments}
                                      onChange={e => setComments(e.target.value)}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-white border-2 rounded focus:border-blue-500 outline-0 border-gray-300 focus:ring-blue-500 "></textarea>
                        </>
                    }
                    {
                        step === 3 &&
                        <>
                            <h1 className="text-2xl mb-4 font-bold">Let's summarize the form, share anything you want to
                                add here</h1>
                            <p className="text-sm">Websites</p>
                            <textarea placeholder="If you have websites you like, list urls here, separated by comma"
                                      value={websites}
                                      onChange={e => setWebsites(e.target.value)}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-white border-2 rounded focus:border-blue-500 outline-0 border-gray-300 focus:ring-blue-500 "></textarea>
                            <p className="text-sm mt-4">Company description</p>
                            <textarea placeholder="Brief description of your company or website"
                                      value={company}
                                      onChange={e => setCompany(e.target.value)}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-white border-2 rounded focus:border-blue-500 outline-0 border-gray-300 focus:ring-blue-500 "></textarea>
                            <p className="text-sm mt-4">Summary</p>
                            <textarea placeholder="Anything else you want us to know?"
                                      value={finalThoughts}
                                      onChange={e => setFinalThoughts(e.target.value)}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-white border-2 rounded focus:border-blue-500 outline-0 border-gray-300 focus:ring-blue-500 "></textarea>

                        </>
                    }
                    {
                        step === 4 &&
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl mb-4 font-bold">Review your details</h1>
                            <div className="flex gap-8"><h1 className="font-bold">Name:</h1> {name}</div>
                            <div className="flex gap-8"><h1 className="font-bold">Phone:</h1> {phone}</div>
                            <div className="flex gap-8"><h1 className="font-bold">Email:</h1> {email}</div>
                            <div className="flex gap-8"><h1 className="font-bold">Plan:</h1> {selectedPlan.title}</div>
                            <div className="flex gap-8"><h1 className="font-bold">Comments:</h1> {comments}</div>
                            <div className="flex gap-8"><h1 className="font-bold">Websites:</h1> {websites}</div>
                            <div className="flex gap-8"><h1 className="font-bold">Company description:</h1> {company}
                            </div>
                            <div className="flex gap-8"><h1 className="font-bold">Final Thoughts:</h1> {finalThoughts}
                            </div>
                        </div>
                    }
                    <div className={`flex ${step !== 1 ? 'justify-between' : 'justify-end'} pt-12`}>
                        {
                            step !== 1 &&
                            <button
                                className="flex justify-center text-xl items-center duration-300 hover:text-amber-600"
                                onClick={back}><ArrowBack/> Back
                            </button>
                        }
                        {
                            step !== 4 &&
                            <button
                                className={"flex justify-center text-xl py-2 px-2 items-center duration-300 hover:text-blue-700 " + (step === 1 && (name === '' || email === '') ? 'bg-gray-200 text-gray-500 hover:text-gray-500': '')}
                                disabled={step === 1 && (name === '' || email === '')}
                                onClick={next}>Next <ArrowForward/></button>
                        }
                        {
                            step === 4 &&
                            <button
                                className="flex justify-center text-xl px-4 py-2 text-white bg-black items-center duration-300 border-2 border-black hover:bg-white hover:text-black"
                                onClick={submit}>Submit</button>
                        }
                    </div>

                    <Link href="/select-template" className="mt-16 md:hidden flex justify-center items-center">Change template <Refresh /></Link>
                </div>
            </div>
        </div>
    );
}