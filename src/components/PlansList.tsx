"use client"

import Plan, {PlanProps} from "@/components/Plan";

export const plans: PlanProps[] = [
    {
        id: 11,
        title: "Development",
        description: "Completely FREE website development, you won't be paying for development or when your website is not up and running",
        price: "$0.00",
        listed: [],
        link: ''
    },
    {
        id: 12,
        title: "Basic",
        description: "This plan is best for individuals that need either a landing page as a representation of their company",
        price: "$16.98/m",
        listed: ["Website maintenance", "Support", "SEO", "Website changes", "10 pages limit"],
        link: '/select-service'
    },
    {
        id: 13,
        title: "Business",
        description: "Best for commercial use where you want to keep in touch with client, it allows clients to make appointments, contact business or make inquiries",
        price: "$24.71/m",
        listed: ["Website maintenance", "Support", "SEO", "Website changes", "SMS or email Integration", "30% discount on Design"],
        link: '/select-service'
    },
    {
        id: 14,
        title: "Designer services",
        description: "Want your own website design? Our designer will make you best website on the market! Go for Logo, templates and landing pages",
        price: "$0-$250",
        listed: ["Logo", "Company Branding", "Custom website", "Fixed price", "Website redesign", "Custom features"],
        link: '/make-inquiry'
    }
]

export default function PlansList() {
    return (
        <div className="plans-list w-full flex gap-5 pt-24 2xl:p-24 p-2 flex-wrap justify-center">
            {
                plans.map(item => <Plan key={item.id} {...item} />)
            }
        </div>
    )
}