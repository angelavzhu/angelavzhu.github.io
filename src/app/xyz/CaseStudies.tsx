"use client"
import Background from "@/components/ui/background";
import { useEffect, useState } from "react";
import footer from "@/assets/footer.png";

const COMPANIES = ["SageSure", "NYBG", "Google (DCC)", "Evallos"] as const;
type Company = typeof COMPANIES[number];

const SECTIONS = ["hero", "sagesure", "nybg", "google", "evallos"] as const;
type SectionId = typeof SECTIONS[number];

const COMPANY_TO_SECTION: Record<Company, SectionId> = {
    SageSure: "sagesure",
    NYBG: "nybg",
    "Google (DCC)": "google",
    Evallos: "evallos",
};

const CASE_STUDIES: Record<Company, { title: string; tags: { label: string; color: string; textColor: string }[]; description: string }> = {
    SageSure: {
        title: "Design Systems Intern @ SageSure",
        tags: [
            { label: "HAI Interaction", color: "#9add8e", textColor: "text-black" },
            { label: "Design Ops", color: "#59ac64", textColor: "text-black" },
            { label: "Design Systems", color: "#0b4e14", textColor: "text-white" },
        ],
        description: "Explored tooling, AI components, and streamlined workflows to encourage human exploration within AI-heavy workflows.",
    },
    NYBG: {
        title: "UX Designer @ NYBG",
        tags: [
            { label: "B2B Design", color: "#9add8e", textColor: "text-black" },
            { label: "Licensing", color: "#59ac64", textColor: "text-black" },
            { label: "Digital Asset Management", color: "#0b4e14", textColor: "text-white" },
        ],
        description: "Transformed NYBG's botanical archive into a trusted digital workspace where clients can discover, curate, and manage assets with confidence.",
    },
    "Google (DCC)": {
        title: "Product Designer @ Google DCC",
        tags: [
            { label: "User Research", color: "#9add8e", textColor: "text-black" },
            { label: "Wireframing", color: "#59ac64", textColor: "text-black" },
        ],
        description: "Designed and evaluated user experiences to engage college-age users with Google products.",
    },
    Evallos: {
        title: "Founding Designer @ Evallos",
        tags: [
            { label: "Education", color: "#9add8e", textColor: "text-black" },
            { label: "Startup", color: "#59ac64", textColor: "text-black" },
        ],
        description: "Owned 6 core product features and scaled a recruitment platform by introducing evaluation and improvement services for AI models.",
    },
};

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ── Fixed pills bar — hidden on hero, visible on case study sections ── */
function FixedPillsBar({ activeSection }: { activeSection: SectionId }) {
    const onHero = activeSection === "hero";
    return (
        <div
            className="fixed left-2 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[15px] items-start"
            style={{
                display: onHero ? "none" : "flex",
                pointerEvents: onHero ? "none" : "auto",
                transition: "opacity 300ms ease",
            }}
        >
            {COMPANIES.map((name, i) => {
                const isActive = COMPANY_TO_SECTION[name] === activeSection;
                const tilt = i % 2 === 0 ? "-rotate-6" : "rotate-6";
                return (
                    <button
                        key={name}
                        onClick={() => scrollTo(COMPANY_TO_SECTION[name])}
                        className="group flex items-center justify-center cursor-pointer h-[54px]"
                    >
                        <div className={`transition-transform duration-200 ${isActive ? tilt : `rotate-0 group-hover:${tilt}`}`}>
                            <div style={{ padding: "8px 8px", backgroundColor: isActive ? "#59ac64" : "#cde3c9" }}
                                className="flex h-[40px] items-center py-[8px] rounded-[12px] primarybutton"
                            >
                                <span
                                    className="whitespace-nowrap text-[20px] text-black"
                                    style={{ fontFamily: "Karla, sans-serif", fontWeight: isActive ? 700 : 400 }}
                                >
                                    {name}
                                </span>
                            </div>
                        </div>
                    </button >
                );
            })}
            {/* Scroll to top button — arrow pointing up */}
            <button
                onClick={() => scrollTo("hero")}
                className="primarybutton flex h-[40px] items-center p-[8px] rounded-[12px] cursor-pointer"
                aria-label="Back to top"
            >
                <div className="-rotate-90">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4214 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4214 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4397L12.9694 5.78063C12.8286 5.63989 12.7496 5.44902 12.7496 5.25C12.7496 5.05098 12.8286 4.86011 12.9694 4.71938C13.1101 4.57864 13.301 4.49958 13.5 4.49958C13.699 4.49958 13.8899 4.57864 14.0306 4.71938L20.7806 11.4694C20.8504 11.539 20.9057 11.6217 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1962 20.9434 12.2872C20.9057 12.3783 20.8504 12.461 20.7806 12.5306Z" fill="black" />
                    </svg>
                </div>
            </button>
        </div >
    );
}

/* ── Dot navigation (left side) ── */
function NavIndicator({ activeSection, isTransitioning }: { activeSection: SectionId; isTransitioning: boolean }) {
    return (
        <div className="fixed left-[30px] top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[15px] items-center">
            {SECTIONS.map((id) => {
                const isActive = activeSection === id;
                return (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="cursor-pointer rounded-[80px] w-[16px]"
                        style={{
                            backgroundColor: isActive ? "#59ac64" : "#A9C3AD",
                            height: isActive && isTransitioning ? "47px" : "16px",
                            transition: isActive && isTransitioning
                                ? "height 200ms cubic-bezier(0.4, 0, 0.2, 1)"
                                : "height 600ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms ease",
                        }}
                        aria-label={`Go to ${id}`}
                    />
                );
            })}
        </div>
    );
}

const HOVER_PADDING = 80;

function HoverBox({ left, top, w, h, boxW, boxH, nudge }: {
    left: string; top: string; w: number; h: number;
    boxW: number; boxH: number;
    nudge: { x: number; y: number };
}) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="absolute cursor-default"
            style={{
                left: `calc(${left} - ${HOVER_PADDING}px)`,
                top: `calc(${top} - ${HOVER_PADDING}px)`,
                width: w + HOVER_PADDING * 2,
                height: h + HOVER_PADDING * 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                style={{
                    transform: `translate(${hovered ? nudge.x : 0}px, ${hovered ? nudge.y : 0}px)`,
                    width: boxW,
                    height: boxH,
                    backgroundColor: "#d9d9d9",
                    transition: "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
            />
        </div>
    );
}

function Hero() {
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
                    Angela is turning bold ideas into experiences that remain{" "}
                    <span className="text-[#070]">thoughtful</span> and{" "}
                    <span className="text-[#070]">scalable.</span>
                </p>
            </div>

            {/*previously at */}
            <div className="flex flex-wrap gap-[20px] items-center justify-center relative" style={{ zIndex: 1 }}>
                <div className="flex items-center justify-center h-[57px]">
                    <div className="-rotate-6">
                        <div className="bg-[#59ac64] flex h-[40px] items-center rounded-[12px]" style={{ padding: "8px 8px" }}>
                            <span className="font-['Karla',sans-serif] font-bold text-[20px] text-black whitespace-nowrap">Designed at:</span>
                        </div>
                    </div>
                </div>
                {COMPANIES.map((name, i) => {
                    const tilt = i % 2 === 0 ? "-rotate-6" : "rotate-6";
                    return (
                        <button
                            key={name}
                            onClick={() => scrollTo(COMPANY_TO_SECTION[name])}
                            className="group cursor-pointer flex items-center justify-center h-[50px]"
                        >
                            <div className={`transition-transform duration-200 rotate-0 group-hover:${tilt}`}>
                                <div style={{ padding: "8px 8px" }} className="primarybutton flex h-[40px] items-center px-[20px] py-[8px] rounded-[12px]">
                                    <span className="font-['Karla',sans-serif] font-normal text-[20px] text-black whitespace-nowrap">{name}</span>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </section >
    );
}

function CaseStudyCard({ company, showFooter }: { company: Company; showFooter?: boolean }) {
    const study = CASE_STUDIES[company];
    const id = COMPANY_TO_SECTION[company];
    return (
        <section
            id={id}
            className="h-screen snap-start flex flex-col pt-[160px]"
        >
            <div className="flex flex-col lg:flex-row gap-[8px] items-center pb-[40px] flex-1"
                style={{
                    padding: "0 1% 0 8%",
                    marginLeft: '8%'

                }}
            >
                <div className="flex flex-col gap-[24px] flex-1 max-w-[487px]">
                    <p className="font-['Karla',sans-serif] font-bold text-[#0b4e14] text-[clamp(30px,3.5vw,50px)] leading-tight">{study.title}</p>
                    <div className="flex flex-wrap gap-[10px]">
                        {study.tags.map((tag) => (
                            <div key={tag.label} className={`chip ${tag.textColor}`} style={{ backgroundColor: tag.color }}>
                                <span className="font-['Karla',sans-serif] font-normal text-[16px] whitespace-nowrap">{tag.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="font-['Karla',sans-serif] font-normal text-[20px] text-black max-w-[452px]">{study.description}</p>
                    <div className="flex gap-[25px] items-center">
                        <div className="relative flex items-center justify-center p-[10px] border-b-2 border-black">
                            <span className="font-['Karla',sans-serif] font-normal text-[30px] text-black whitespace-nowrap">See Full Case </span>
                        </div>
                        <span className="font-['Karla',sans-serif] font-normal text-[30px] text-black">→</span>
                    </div>
                </div>

                <div className="flex-1 w-[60%] rounded-[20px] overflow-hidden" style={{ border: "2px solid black" }}>
                    <video id="backgroundVideo" autoPlay loop muted playsInline style={{ height: '100%', objectFit: "contain", }}>
                        {/* video in src folder */}
                        <source src="/sagesure.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            {showFooter && (
                <footer id="about" className="bg-[#070] flex items-center justify-between" style={{ padding: "0 8%" }}>
                    <div className="flex flex-col gap-[20px] flex-1 min-w-[200px]">
                        <p className="font-['Karla',sans-serif] text-[16px] text-white">Designed, illustrated, and coded on the world wide web ^-^</p>
                        <div className="flex flex-wrap gap-[30px]">
                            <button className="linkbutton" style={{ color: "white" }}>
                                <a rel="noopener noreferrer" target="_blank" href="mailto:avz7@cornell.edu">
                                    <span>Email</span>
                                    <span className="text-white text-[16px] -rotate-45 inline-block">→</span>
                                </a>
                            </button>

                            <button className="linkbutton" style={{ color: "white" }}>
                                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/angelavzhu/">
                                    <span>LinkedIn</span>
                                    <span className="text-white text-[16px] -rotate-45 inline-block">→</span>
                                </a>
                            </button>

                            <button className="linkbutton" style={{ color: "white" }}>
                                <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1mwTy7CJU0mkgGk4Wxc7viRZWfRg0xl6z/view?usp=sharing">
                                    <span>Resume</span>
                                    <span className="text-white text-[16px] -rotate-45 inline-block">→</span>
                                </a>
                            </button>

                            {/* 
                            {["Email", "LinkedIn", "Resume"].map((link) => (
                                <div key={link} className="flex items-center gap-[4px]">

                                </div>
                            ))} */}
                        </div>
                    </div>
                    <img alt="Illustrated faces" className="h-[80%]" src={footer.src} />
                </footer>
            )}
        </section>
    );
}

export default function CaseStudies() {
    const [activeSection, setActiveSection] = useState<SectionId>("hero");
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if (!container) return;

        let scrollTimer: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            setIsTransitioning(true);
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => setIsTransitioning(false), 500);
        };
        container.addEventListener("scroll", handleScroll, { passive: true });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id as SectionId);
                    }
                });
            },
            { root: container, threshold: 0.5 }
        );

        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
            container.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimer);
        };
    }, []);

    return (
        <>
            <FixedPillsBar activeSection={activeSection} />
            {/* <NavIndicator activeSection={activeSection} isTransitioning={isTransitioning} /> */}
            <div id="scroll-container" className="h-screen overflow-y-scroll snap-y snap-mandatory">
                <Hero />
                {COMPANIES.map((company, i) => (
                    <CaseStudyCard key={company} company={company} showFooter={i === COMPANIES.length - 1} />
                ))}
            </div>
        </>
    );
}
