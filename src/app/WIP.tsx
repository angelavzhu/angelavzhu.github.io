import Background from "@/components/ui/background";

export default function WIP() {
    return (
        <section
            id="hero"
            className="h-screen flex flex-col items-center justify-center gap-[40px] px-[60px] snap-start relative overflow-hidden"
        >
            {/* background*/}
            <div className="absolute inset-0" style={{ zIndex: 0 }}>
                <Background />
            </div>

            {/* hero text */}
            <div style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                boxShadow: "0 0 36px 84px rgba(255, 255, 255, 0.8)",
                zIndex: 1,
            }}>
                <p className="font-['Karla',sans-serif] font-bold text-[3rem] text-black text-center leading-tight max-w-[860px] relative" style={{ zIndex: 1 }}>
                    Site under construction.<br /> Come back soon ~
                </p>
            </div>


        </section >
    );
}