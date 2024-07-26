"use client"

import InquiryDynamicForm from "@/app/make-inquiry/InquiryDynamicForm";
import Footer from "@/components/Footer";
import { useParams  } from 'next/navigation'
import { renderStuff } from '@/components/Templates';
import {Refresh} from "@mui/icons-material";
import Link from "next/link";
import {orderToHtml, sendOrder} from "@/app/manager";

export default function MakeInquiryWithId() {
    const router = useParams();

    const submitForm = async (name:string,
                        phone:string,
                        email:string,
                        comments:string,
                        websites:string,
                        company:string,
                        finalThoughts:string) => {
        const html = orderToHtml(name, phone, email, comments, websites, company, finalThoughts, renderStuff.find(item => item.id.toString() === router.templateid)?.src);
        await sendOrder(html);
    }

    return (
        <div className="w-full">
            <InquiryDynamicForm submit={submitForm} template={renderStuff.find(item => item.id.toString() === router.templateid)?.src} />
            <Footer/>
        </div>
    )
}