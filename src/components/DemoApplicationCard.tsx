export default function DemoApplicationCard({children, ref}: { children: any, ref: string }) {

    return (
        <a className={"border-2 rounded border-pink-500 w-full bg-pink-500/10"} href={`/${ref}`}>
            {children}
        </a>
    )
}