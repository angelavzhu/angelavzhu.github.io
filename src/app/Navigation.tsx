"use client"
import img from "@/assets/logo.svg";

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navigation() {
    return (
        <nav className="fixed top-4 left-0 right-0 z-50 w-full flex justify-center">
            <div className="flex row gap-[2vw] backdrop-blur-[5px] backdrop-blur-[5px] bg-[rgba(255,255,255,0.5)] rounded-[20px]">
                <button onClick={() => scrollTo("hero")} className="cursor-pointer">
                    <img alt="Logo" className="size-[60px] object-cover" src={img.src} />
                </button>
                <button onClick={() => scrollTo("hero")} className="flex gap-[10px] items-center justify-center px-[20px] py-[10px] cursor-pointer">
                    <div className="size-[8px] rounded-full bg-[#0b4e14]" />
                    <span className="font-['Karla',sans-serif] font-bold text-[16px] text-[#0b4e14]">Work</span>
                </button>
                <button onClick={() => scrollTo("about")} className="flex items-center justify-center px-[20px] py-[10px] cursor-pointer">
                    <span className="font-['Karla',sans-serif] font-bold text-[16px] text-black">About</span>
                </button>
                <button onClick={() => scrollTo("art")} className="flex items-center justify-center px-[20px] py-[10px] cursor-pointer">
                    <span className="font-['Karla',sans-serif] font-bold text-[16px] text-black">Art</span>
                </button>
            </div>
        </nav>
    );
}
