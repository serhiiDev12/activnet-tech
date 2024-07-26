"use client"
import ServiceItemForSelect, {ServiceItemForSelectProps} from "@/components/ServiceItemForSelect";
import Footer from "@/components/Footer";

const services: ServiceItemForSelectProps[] = [
    {
        id: 1111,
        title: "Select existing template",
        description: "We'll work based on your choice of template, configure it and make it perfect",
        style: 'service1',
        link: '/select-template',
        header: 'Template Inquiry'
    },
    {
        id: 2111,
        title: "Website redesign",
        description: "We'll redesign and host your website using latest and newest technologies including with SEO. The designer fee will NOT be included in price",
        style: 'service2',
        link: '/make-inquiry',
        header: 'Website redesign Inquiry'
    },
    {
        id: 3111,
        title: "Custom template",
        description: "We'll design a template, logo and company branding according to your preferences. Designer fee will be included as one time payment",
        style: 'service3',
        link: '/make-inquiry',
        header: 'Custom template Inquiry'
    }
];

export default function SelectServices() {
    return (
        <div className="w-full pt-32 flex flex-col gap-8 items-center justify-center">
            <h1 className="text-2xl font-bold xl:text-6xl w-full xl:w-1/2 text-center">Please select service that
                fit your needs the most</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {
                    services.map(item => <ServiceItemForSelect {...item} />)
                }
            </div>
            <Footer/>
        </div>
    );
}