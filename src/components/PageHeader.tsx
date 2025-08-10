import { twMerge } from 'tailwind-merge'
import Image from "next/image";
import HomeSVG from "@/components/svg/HomeSVG";
export default function PageHeader({children = "", className = ""}: { children?: any, className?: string }) {
    return (
        <div className={twMerge("bg-black/10 text-3xl min-w-[30vw] min-h-[10vh]", className, "flex justify-between items-center px-4 rounded")}>
            {children}
            <a className={"float-right"} href={"/"}>
                <HomeSVG height={"80px"} fill={"white"}/>
            </a>
        </div>
    )
}