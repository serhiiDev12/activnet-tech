"use client"
import InquiryDynamicForm from "@/app/make-inquiry/InquiryDynamicForm";
import Footer from "@/components/Footer";
import {orderToHtml, sendOrder} from "@/app/manager";
import {renderStuff} from "@/components/Templates";

export default function MakeInquiry() {
    const submitForm = async (name:string,
                              phone:string,
                              email:string,
                              comments:string,
                              websites:string,
                              company:string,
                              finalThoughts:string,
                              service: string) => {
        const html = orderToHtml(name, phone, email, comments, websites, company, finalThoughts, service);
        await sendOrder(html);
    }
    return (
        <div className="w-full">
            <InquiryDynamicForm submit={submitForm}/>
            <Footer/>
        </div>
    );
}