import { Check } from "@phosphor-icons/react/dist/ssr";

export function BenefitsList({ title }: { title: string }){
    return (
        <div className="flex items-center justify-start gap-3 w-80">
            <span className="bg-primary text-white p-1 rounded-full"><Check size={20} /></span>
            <span className="text-md text-[#5C6574] leading-5">{title}</span>
        </div>
    )
}