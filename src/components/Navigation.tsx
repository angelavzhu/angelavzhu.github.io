"use client"
import img from "@/assets/logo.svg";

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navigation() {
    return (
        <nav className="fixed top-4 z-50 w-full flex justify-center">
            <div style={{ padding: "0 2%" }} className="flex row gap-[2vw] backdrop-blur-[5px] backdrop-blur-[5px] bg-[rgba(255,255,255,0.5)] rounded-[20px]">
                <button onClick={() => scrollTo("hero")} className="cursor-pointer">
                    <img alt="Logo" className="size-[60px] object-cover" src={img.src} />
                </button>

                <button onClick={() => scrollTo("hero")}
                    className="flex gap-[10px] items-center justify-center linkbutton"
                    style={{ color: "#0b4e14", textDecorationColor: "rgba(0,0,0,0)" }}
                >
                    <span className="font-['Karla',sans-serif] font-bold text-[20px]">Work</span>
                </button>
                <button onClick={() => scrollTo("about")}
                    className="linkbutton">
                    <span className="font-['Karla',sans-serif] font-bold text-[20px] text-black">About</span>
                </button>
                <button onClick={() => scrollTo("art")} className="linkbutton">
                    <span className="font-['Karla',sans-serif] font-bold text-[20px] text-black">Art</span>
                </button>
            </div>
        </nav>
    );
}
