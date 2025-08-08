import { twMerge } from 'tailwind-merge'
export default function PageHeader({children = "", className = ""}: { children?: any, className?: string }) {
    return (
        <div className={twMerge("bg-black/10 text-3xl min-w-[30vw] min-h-[10vh]", className, "flex justify-start items-center px-4 rounded")}>
            {children}
        </div>
    )
}