import logo from "@/assets/logo.png";

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[5px] bg-[rgba(255,255,255,0.5)] flex items-center justify-between px-[60px] py-[8px]">
            <button
                // onClick={() => scrollTo("hero")}
                className="cursor-pointer">
                <img alt="Logo" className="size-[60px] object-cover" src={logo.src} />
            </button>
            <div className="flex items-center">
                <button
                    // onClick={() => scrollTo("hero")} 
                    className="flex gap-[10px] items-center justify-center px-[20px] py-[10px] cursor-pointer">
                    <div className="size-[8px] rounded-full bg-[#0b4e14]" />
                    <span className="font-['Karla',sans-serif] font-bold text-[16px] text-[#0b4e14]">Work</span>
                </button>
                <button
                    // onClick={() => scrollTo("about")} 
                    className="flex items-center justify-center px-[20px] py-[10px] cursor-pointer">
                    <span className="font-['Karla',sans-serif] font-bold text-[16px] text-black">About</span>
                </button>
                <button
                    // onClick={() => scrollTo("art")} 
                    className="flex items-center justify-center px-[20px] py-[10px] cursor-pointer">
                    <span className="font-['Karla',sans-serif] font-bold text-[16px] text-black">Art</span>
                </button>
            </div>
        </nav>
    );
}