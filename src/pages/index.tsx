import {Geist, Geist_Mono} from "next/font/google";
import PathfinderCard from "@/components/pathfinder/PathfinderCard";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className={"m-0 p-0 min-w-[100vw] min-h-[100vh]"}>
            <div className={"flex flex-col min-w-[70vw] w-64 min-h-[45vh] h-44 bg-black/20 mx-auto p-4 rounded"}>
                <h1 className={"min-h-12 w-full flex text-2xl p-2 rounded bg-black/20 justify-start items-center"}>
                    Demo Applications
                </h1>
                <div className={"grid grid-cols-3 auto-rows-m grid-rows-3 auto-rows-auto justify-between gap-4 py-4 h-full"}>
                    <PathfinderCard/>
                </div>
            </div>
        </div>
    );
}
