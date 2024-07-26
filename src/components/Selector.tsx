"use client"

import {PlanProps} from "@/components/Plan";

interface SelectorProps {
    items: PlanProps[],
    placeholder: string,
    selected: number,
    setSelected: (plan: PlanProps) => void
}

export default function Selector({items, selected, placeholder, setSelected}:SelectorProps) {
    return (
        <form className="w-full">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{placeholder}</label>
            <select id="countries"
                    value={selected}
                    onChange={(e) => {
                        setSelected(items.find(item => item.id === +e.target.value) as PlanProps);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {
                    items.map(item =>
                        <option key={item.title} value={item.id}>{item.title}</option>)
                }
            </select>
        </form>
    )
}