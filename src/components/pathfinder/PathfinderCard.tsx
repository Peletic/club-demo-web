import DemoApplicationCard from "@/components/DemoApplicationCard";

export default function PathfinderCard() {
    // todo: BG refimg
    return (
        <DemoApplicationCard ref={"pathfinder"}>
            <div>
                Realtime interactive pathfinding
            </div>
            <div className={"hidden group-hover:block relative"}>
                DESC...
            </div>
        </DemoApplicationCard>
    )
}